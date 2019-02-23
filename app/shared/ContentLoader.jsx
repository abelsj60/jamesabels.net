import ComponentData from '../classes/ComponentData.js';
import Location from '../classes/Location.js';
import Menu from '../menu/Menu.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import {
  Route,
  Redirect,
  Switch
} from 'react-router';

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(props);
    const l = new Location(r.pathToMatch, props);

    this.overflowRef = React.createRef();

    this.state = {
      isNotFound: !l.pathIsJustRight,
      needsRedirect: l.needsRedirect
    };
  }

  render() {
    const {
      needsRedirect,
      isNotFound
    } = this.state;
    let cD;
    let l;
    let r;

    /** ComponentData contains configured Components
     *
     * Includes data from and derived from props, e.g.,
     * all section data ('contentData').
     *
     * Note: ContentaLoader unmounts when users swap
     * sections, so there's no need to update
     * contentData when cDU() runs.
     */

    if (!needsRedirect && !isNotFound) {
      r = new Referrer(this.props);
      cD = new ComponentData(r.location, this.props);
      l = new Location(r.pathToMatch, this.props);
    }

    return needsRedirect ? (
      <Redirect to="/i" />
    ) : isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path={`/${r.location}/menu`}
          render={
            () => {
              if (l.type === 'chapter') {
                return <Redirect to="/not-found" />;
              }

              return (
                <Menu {...this.props}>
                  {cD.getMenuComponent(this.props, l.params)}
                </Menu>
              );
            }
          }
        />
        <Route
          path={r.genericPath}
          render={
            () => cD.getSection(this.props, this.overflowRef, l.params)
          }
        />
      </Switch>
    );
  }

  componentDidUpdate(prevProps) {
    const r = new Referrer(this.props);
    const l = new Location(r.pathToMatch, this.props, prevProps);

    if (l.needsRedirect) {
      const startRedirect = !this.state.needsRedirect;

      if (startRedirect) {
        this.setState({ needsRedirect: startRedirect });
      }
    } else if (l.isSwappingContent) {
      let paramOneAsIndex;
      let paramTwoAsIndex;

      switch (l.type) {
        case 'chapter':
          // paramTwoAsIndex is undefined, so won't fail below
          paramOneAsIndex = l.params.titleToIndex();
          break;
        case 'projects':
          paramOneAsIndex = l.params.projectNameToIndex();
          paramTwoAsIndex = l.params.projectThumbnailToIndex();
          break;
        case 'journalism':
          paramOneAsIndex = l.params.publicationToIndex();
          paramTwoAsIndex = l.params.headlineToIndex();
          break;
        case 'reverie':
          // paramTwoAsIndex is undefined, so won't fail below
          paramOneAsIndex = l.params.headlineToIndex();
          break;
      }

      if (paramOneAsIndex !== -1 && paramTwoAsIndex !== -1) {
        this.props.boundHandleClickForBody(paramOneAsIndex, paramTwoAsIndex);

        if (this.overflowRef.current.scrollTop !== 0) {
          const isProjects = l.type === 'projects';
          const lastIndexForProjectData =
            prevProps.bodyState.indexForProjectData;
          const updateScrollTop = isProjects
            ? paramOneAsIndex !== lastIndexForProjectData
            : true;

          if (updateScrollTop) {
            this.overflowRef.current.scrollTop = 0;
          }
        }
      }
    }
  }
}
