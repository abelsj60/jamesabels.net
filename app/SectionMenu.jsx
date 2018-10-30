import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArticleNav from './ArticleNav.jsx';
import ChapterNav from './ChapterNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import { splitPath } from './helpers/utils.js';

class SectionMenu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  get projectPage() {
    return this.location[2].toLowerCase() === 'projects';
  }

  get storyPage() {
    return this.location[2].toLowerCase() === 'chapter';
  }

  render() {
    return (
      <section
        id="contents-list"
        className={`${this.location[2].toLowerCase()}-menu`}
      >
        {this.projectPage ? (
          <MultiProjectNav state={this.props.state} />
        ) : this.storyPage ? (
          <ChapterNav state={this.props.state} />
        ) : (
          <ArticleNav state={this.props.state} />
        )}
      </section>
    );
  }
}

export default withRouter(SectionMenu);
