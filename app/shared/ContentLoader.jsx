import ArticleOrReverie from '../article-n-reverie/ArticleOrReverie.jsx';
import ArticleOrReverieNav from '../article-n-reverie/ArticleOrReverieNav.jsx';
import ClickHandling from '../classes/ClickHandling.js';
import Content from '../classes/Content.js';
import Location from '../classes/Location.js';
import Menu from '../menu/Menu.jsx';
import MultiProjectNav from '../projects/MultiProjectNav.jsx';
import Projects from '../projects/Projects.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import {
  Route,
  Redirect,
  Switch
} from 'react-router';
import ScrollHandling from '../classes/ScrollHandling.js';
import State from '../classes/State.js';
import Story from '../story/Story.jsx';

// For future refactoring: https://stackoverflow.com/a/51753410

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const referrer = new Referrer(props);
    const location = new Location(referrer.pathToMatch, props);
    const state = new State(props, location);
    const content = new Content(location.caller);
    const allContentData = content.getContentData();
    let imageLoaded = -1;

    this.overflowRef = location.caller === 'chapter'
      ? React.createRef()
      : {}; // Prevents errors

    if (location.caller === 'chapter') {
      const number = state.getIndex('chapter') + 1;
      imageLoaded = props.appState.images[`chapter-${number}-blurred`].complete ? 2 : 0;

      props.boundHandleClickForApp(
        'updateIllustrationState',
        ( // Is always < 0 on mobile to prevent weird flashes.
          props.appState.type === 'mobile' 
            // Is < 0 if !.complete, or if we're offline. This allows the mobile device
            // to reveal it after onLoad fires via handleLoadForMainImage().
            || (!props.appState.images[`chapter-${number}-main`].complete || props.appState.offline)
        ) ? number * -1 : number
      );
    } else if (location.caller === 'projects') {
      imageLoaded = 0;
    }

    this.state = {
      allContentData: allContentData,
      caller: location.caller,
      chapterIndex: state.getIndex('chapter'),
      headlineIndex: state.getIndex('article'),
      // -1 = n/a, 0 = not loaded, 1 = loaded, 2 = done
      imageLoaded: imageLoaded,
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect,
      projectIndex: state.getIndex('project'),
      reverieIndex: state.getIndex('reverie'),
      thumbnailIndex: state.getIndex('projectPics')
    };
  }

  render() {
    const {
      caller,
      isNotFound,
      needsRedirect
    } = this.state;
    const referrer = new Referrer(this.props);

    return needsRedirect
      ? (
        <Redirect
          to="/i"
        />
      ) : isNotFound
        ? (
          <Redirect
            to="/not-found"
          />
        ) : (
          <Switch>
            <Route
              exact
              path={`/${caller}/menu`}
              render={() => {
                if (caller === 'chapter') {
                  return (
                    <Redirect
                      to="/not-found"
                    />
                  );
                }
                // Variable b/c components must be Capitalized!
                const MenuContent = this.getMenuContent(caller);
                return (
                  <Menu
                    {...this.props}
                  >
                    <MenuContent
                      {...this.props}
                      contentState={this.state}
                    />
                  </Menu>
                );
              }}
            />
            <Route
              path={referrer.finalPath}
              render={() => {
                const PageContent = this.getPage(caller);
                let boundHandleClickForContentLoader;

                if (caller === 'projects' || caller === 'chapter') {
                  const clickHandling = new ClickHandling('contentLoader', this);
                  boundHandleClickForContentLoader = clickHandling.boundHandleClick;
                }

                return (
                  <PageContent
                    {...this.props}
                    boundHandleClickForContentLoader={boundHandleClickForContentLoader}
                    contentState={this.state}
                    overflowRef={this.overflowRef}
                  />
                );
              }}
            />
          </Switch>
        );
  }

  getMenuContent(caller) {
    switch (caller) {
      case 'journalism':
        return ArticleOrReverieNav;
      case 'projects':
        return MultiProjectNav;
      case 'reverie':
        return ArticleOrReverieNav;
    }
  }

  getPage(caller) {
    switch (caller) {
      case 'chapter':
        return Story;
      case 'journalism':
        return ArticleOrReverie;
      case 'projects':
        return Projects;
      case 'reverie':
        return ArticleOrReverie;
    }
  }

  componentDidUpdate(prevProps) {
    const referrer = new Referrer(this.props);
    const location = new Location(referrer.pathToMatch, this.props, prevProps);

    if (location.needsRedirect) {
      this.setState({ needsRedirect: true });
    } else if (location.isSwappingContent) {
      const {
        appState,
        boundHandleClickForApp,
        boundHandleClickForBody
      } = this.props;
      const state = new State(this.props, location);
      const clickHandling = new ClickHandling('contentLoader', this);
      const boundHandleClickForContentLoader = clickHandling.boundHandleClick;

      state.rebuildBody(boundHandleClickForBody);
      state.resetIllustrationState(boundHandleClickForApp);
      state.rebuildContentLoader(boundHandleClickForContentLoader);

      /* Reset scroll top in /chapter

        The scrollTop reset is not currently applied to the /projects, and 
        /journalism routes b/c they can only be changed via /menu. If you 
        want to expand this to include the /projects and /journalism, remember 
        to filter /menu paths, as they don't have an overflowRef, and so will 
        kick an error. 
      */

      if (location.caller === 'chapter') {
        const { currentCaller } = appState;
        const scrollHandler = new ScrollHandling(currentCaller);
        scrollHandler.resetElementTop(this.overflowRef, prevProps);
      }
    }
  }
}
