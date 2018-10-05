import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import Chapter from './Chapter.jsx';
import AlexaStories from './AlexaStories.jsx';
import IndexMenu from './IndexMenu.jsx';
import storyData from './helpers/storyData.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location.pathname.split('/');

    console.log('Constructor');
    console.log('Location in Constructor:', location);
    // console.log('Number test: ', this.validateNumber(location[2], 5));
    // console.log('Length test: ', location.length === 2);

    // ~ja Technically, we don't need the location checks/ternaries in state
    // b/c the location of each number type is different in each section of
    // the site, but explicitly checking seems like a better practice

    this.state = {
      chapter:
        location[1] === 'chapter'
          ? this.validateNumber(location[2], 4) || 1
          : 1,
      projectName:
        location[1] === 'projects'
          ? this.validateProjectName(location[2]) || 'arrow'
          : 'arrow',
      projectImageIndex:
        location[1] === 'projects'
          ? this.validateNumber(location[3], 3) || 1
          : 1,
      clip: undefined
    };
  }

  validateProjectName(name) {
    return ['arrow', 'slingshot', 'tmmnews'].includes(name) ? name : undefined;
  }

  validateNumber(number, max) {
    return parseInt(number) > 0 && parseInt(number) <= max
      ? parseInt(number)
      : undefined;
  }

  render() {
    console.log('State in Render: ', this.state);
    return (
      <section className="inner-page">
        <Header />
        <Switch>
          {/*
            <Route
              exact
              path="/chapter/index"
              render={() => {
                const section = 'chapter';

                return <IndexMenu section={section} />;
            }}
            />
          */}
          <Route
            exact
            path="/chapter"
            render={() => <Redirect to={'/chapter/' + this.state.chapter} />}
          />
          <Route
            path="/chapter/:num"
            render={() => {
              if (this.state.chapter) {
                return <Chapter chapterNumber={this.state.chapter} />;
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Redirect
                to={`/projects/${this.state.projectName}/${
                  this.state.projectImageIndex
                }`}
              />
            )}
          />
          <Route
            exact
            path="/projects/:name"
            render={() => (
              <Redirect
                to={`/projects/${this.state.projectName}/${
                  this.state.projectImageIndex
                }`}
              />
            )}
          />
          <Route
            path="/projects/:name/:projectImageIndex"
            render={() => {
              if (this.state.projectName && this.state.projectImageIndex) {
                return (
                  <Projects
                    projectName={this.state.projectName}
                    projectImageIndex={this.state.projectImageIndex}
                  />
                );
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route path="/alexa" component={AlexaStories} />
          <Route
            exact
            path="/jnl"
            render={() => <Redirect to="/jnl/forbes/1" component={JandL} />}
          />
          <Route
            exact
            path="/jnl/:name"
            render={({ match }) => {
              const publication = match.params.name;
              return (
                <Redirect to={'/jnl/' + publication + '/1'} component={JandL} />
              );
            }}
          />
          <Route
            path="/jnl/:publication/:id"
            render={({ match }) => {
              const publication = match.params.publication.toLowerCase();
              const id = parseInt(match.params.id) - 1;

              if (storyData[publication][id]) {
                return <JandL publication={publication} id={id} />;
              } else {
                return <Route component={NotFound} />;
              }
            }}
          />
          <Route
            exact
            path="/index"
            render={() => {
              return <Redirect to={'/index/projects'} />;
            }}
          />
          <Route
            path="/index/:section"
            render={({ match }) => {
              const section = match.params.section.toLowerCase();

              return <IndexMenu section={section} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </section>
    );
  }

  componentDidUpdate() {
    // ~ja Must compare props to state to see a difference
    // Location checks used in 186 - 195 as good practice

    const location = this.props.location.pathname.split('/');

    const chapterNumber =
      location[1] === 'chapter'
        ? this.validateNumber(parseInt(location[2]), 4)
        : undefined;
    const projectName =
      location[1] === 'projects'
        ? this.validateProjectName(location[2])
        : undefined;
    const projectImageIndex =
      location[1] === 'projects'
        ? this.validateNumber(location[3], 3)
        : undefined;
    const updateChapterNumber = chapterNumber
      ? chapterNumber !== this.state.chapter
      : undefined;
    const updateProjectName = projectName
      ? projectName !== this.state.projectName
      : undefined;
    const updateProjectImageIndex = projectImageIndex
      ? projectImageIndex !== this.state.projectImageIndex
      : undefined;

    if (updateChapterNumber || updateProjectName || updateProjectImageIndex) {
      this.setState({
        chapter: updateChapterNumber ? chapterNumber : this.state.chapter,
        projectName: updateProjectName ? projectName : this.state.projectName,
        projectImageIndex: updateProjectImageIndex
          ? projectImageIndex
          : this.state.projectImageIndex
      });
    }

    console.log('State in cDU: ', this.state);
    console.log('---');
  }
}

export default App;
