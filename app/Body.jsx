import About from './about/About.jsx';
import State from './classes/State.js';
import ContentLoader from './shared/ContentLoader.jsx';
import EventHandling from './classes/EventHandling.js';
import Home from './home/Home.jsx';
import Location from './classes/Location';
import NotFound from './not-found/NotFound.jsx';
import React, { Component } from 'react';
import Referrer from './classes/Referrer.js';
import ReloadRoute from './reload/ReloadRoute.jsx';
import {
  Switch,
  Route
} from 'react-router-dom';

export default class Body extends Component {
  constructor(props) {
    super(props);

    /** Build initial bodyState.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections or from section-to-menu.
     */

    const referrer = new Referrer(props);
    const location = new Location(referrer.pathToMatch, props);
    const state = new State(props, location);

    this.state = {
      indexForArticleData: state.get(
        'indexForArticleData'
      ),
      indexForChapterData: state.get(
        'indexForChapterData'
      ),
      indexForProjectData: state.get(
        'indexForProjectData'
      ),
      indexForProjectPics: state.get(
        'indexForProjectPics'
      ),
      indexForPublication: state.get(
        'indexForPublication'
      ),
      indexForReverieData: state.get(
        'indexForReverieData'
      )
    };
  }

  render() {
    const eventHandling = new EventHandling('body', this);
    const boundHandleClickForBody = eventHandling.boundHandleClick;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={
            () => <Home {...this.props} />
          }
        />
        {[
          '/chapter/:title?',
          '/journalism/:publication?/:headline?',
          '/projects/:projectName?/:projectThumbnail?',
          '/reverie/:headline?'
        ].map(
          (path, idx) => (
            <Route
              key={idx}
              path={path}
              render={
                ({ match }) => (
                  <ContentLoader
                    {...this.props}
                    bodyState={this.state}
                    boundHandleClickForBody={boundHandleClickForBody}
                    match={match}
                  />
                )
              }
            />
          ))}
        <Route
          exact
          path="/i"
          render={
            () => <ReloadRoute {...this.props} bodyState={this.state} />
          }
        />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
