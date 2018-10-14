import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import InnerRouter from './InnerRouter.jsx';
import articleData from './data/articleData.js';
import storyData from './data/storyData.js';
import projectData from './data/projectData.js';
import { normalize } from './helpers/utils.js';

class OuterRouter extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location.pathname.split('/');

    this.state = {
      chapterTitle:
        location[1] === 'chapter'
          ? this.validateChapter(location[2]) || normalize(storyData[0].title)
          : normalize(storyData[0].title),
      projectName:
        location[1] === 'projects'
          ? this.validateProjectName(location[2]) || projectData[0].name
          : projectData[0].name,
      projectImageIndex:
        location[1] === 'projects'
          ? this.validateProjectThumbnail(location[3], 3) || 1
          : 1,
      publication:
        location[1] === 'journalism'
          ? this.validatePublication(location[2]) ||
            articleData[0].publication.toLowerCase()
          : articleData[0].publication.toLowerCase(),
      headline:
        location[1] === 'journalism'
          ? this.validateHeadline(location[2], location[3]) ||
            normalize(articleData[0].headline)
          : normalize(articleData[0].headline),
      showStoryText: true,
      showProjectDetails: false
    };

    this.toggleText = this.toggleText.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleText() {
    // Expl: https://stackoverflow.com/a/29101393/9215718

    this.setState({ showStoryText: !this.state.showStoryText });
    return 'Switched text!';
  }

  toggleDetails() {
    this.setState({ showProjectDetails: !this.state.showProjectDetails });
    return 'Switched details!';
  }

  validatePublication(publication) {
    return articleData.find(clip =>
      normalize(clip.publication).includes(publication)
    )
      ? publication
      : undefined;
  }

  validateHeadline(publication, headline) {
    const headlineIsValid = articleData.find(clip => {
      return normalize(clip.headline).includes(headline);
    });

    if (!headline && !headlineIsValid) {
      const defaultClip = articleData.filter(clip => {
        return (
          normalize(clip.publication) === this.validatePublication(publication)
        );
      });

      headline = defaultClip.length
        ? normalize(defaultClip[0].headline)
        : undefined;
    }

    return headline;
  }

  validateProjectName(name) {
    return projectData.find(project => project.name.includes(name))
      ? name
      : undefined;
  }

  validateProjectThumbnail(number, max) {
    return parseInt(number) > 0 && parseInt(number) <= max
      ? parseInt(number)
      : undefined;
  }

  validateChapter(title) {
    const chapterTitle = storyData.filter(chapter => {
      return normalize(chapter.title) === title;
    });

    return chapterTitle.length ? normalize(chapterTitle[0].title) : undefined;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          render={() => (
            <InnerRouter
              state={this.state}
              toggleText={this.toggleText}
              toggleDetails={this.toggleDetails}
            />
          )}
        />
      </Switch>
    );
  }

  componentDidUpdate() {
    // ~ja Must compare props to state to see a difference
    // Location checks used to prevent collisions

    const location = this.props.location.pathname.split('/');

    const chapterTitle =
      location[1] === 'chapter' ? this.validateChapter(location[2]) : undefined;
    const projectName =
      location[1] === 'projects'
        ? this.validateProjectName(location[2])
        : undefined;
    const projectImageIndex =
      location[1] === 'projects'
        ? this.validateProjectThumbnail(location[3], 3)
        : undefined;
    const publication =
      location[1] === 'journalism'
        ? this.validatePublication(location[2])
        : undefined;
    const headline =
      location[1] === 'journalism'
        ? this.validateHeadline(location[2], location[3])
        : undefined;
    const updateChapterTitle = chapterTitle
      ? chapterTitle !== this.state.chapterTitle
      : undefined;
    const updateProjectName = projectName
      ? projectName !== this.state.projectName
      : undefined;
    const updateProjectImageIndex = projectImageIndex
      ? projectImageIndex !== this.state.projectImageIndex
      : undefined;
    const updatePublication = publication
      ? publication !== this.state.publication
      : undefined;
    const updateHeadline = headline
      ? headline !== this.state.headline
      : undefined;

    if (
      updateChapterTitle ||
      updateProjectName ||
      updateProjectImageIndex ||
      updatePublication ||
      updateHeadline
    ) {
      this.setState({
        chapterTitle: updateChapterTitle
          ? chapterTitle
          : this.state.chapterTitle,
        projectName: updateProjectName ? projectName : this.state.projectName,
        projectImageIndex: updateProjectImageIndex
          ? projectImageIndex
          : this.state.projectImageIndex,
        publication: updatePublication ? publication : this.state.publication,
        headline: updateHeadline ? headline : this.state.headline
      });
    }

    console.log('State in cDU: ', this.state);
    console.log('---');
  }
}

export default withRouter(OuterRouter);
