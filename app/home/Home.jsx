import Charms from './Charms.jsx';
import ClickHandling from '../classes/ClickHandling.js';
import Main from '../primitives/Main.jsx';
import NameTag from './NameTag.jsx';
import React, { Component } from 'react';
import PictureBox from './PictureBox.jsx';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  position: relative;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    // 1. Goal is needed to cast a spell w/the Pulsers.
    // 2. Transition is needed so the double firing of 'onTransitionEnd'
    // doesn't toggle the Pulsers on and off in rapid succession.
    this.goal = 5;
    this.transition = 0;
    // Create an initial spell pattern
    const pattern = this.createSpellPattern();

    this.state = {
      isCasting: false,
      castSpell: false,
      score: 0, // Used to select an active Pulser and cast spell
      pattern: pattern,
      activePulser: pattern[0] // Initial Pulser is always [0].
    };

    this.trackTransitionEnd = this.trackTransitionEnd.bind(this);
  }

  render() {
    // const { pinchZoomed } = props.appState;
    // const foregroundImage = pinchZoomed
    //   ? bio.attributes.boyInForegroundImage
    //   : bio.attributes.zoomedBoyInForegroundImage;
    // const fantasyImage = pinchZoomed
    //   ? bio.attributes.fantasyImage
    //   : bio.attributes.zoomedFantasyImage;
    // const cityImage = pinchZoomed
    //   ? bio.attributes.cityImage
    //   : bio.attributes.zoomedCityImage;

    const hcForHome = new ClickHandling('home', this);
    const boundHandleClickForHome = hcForHome.boundHandleClick;

    const hcPulser = new ClickHandling('pulser', this);
    const boundHandlePulser = hcPulser.boundHandleClick;

    return (
      <RestyledMain>
        <NameTag
          {...this.props}
          homeState={this.state}
          boundHandleClickForHome={boundHandleClickForHome}
        />
        <Charms
          {...this.props}
          homeState={this.state}
          boundHandlePulser={boundHandlePulser}
        />
        <PictureBox
          {...this.props}
          homeState={this.state}
          trackTransitionEnd={this.trackTransitionEnd}
          boundHandleClickForHome={boundHandleClickForHome}
        />
      </RestyledMain>
    );
  }

  createSpellPattern() {
    const pattern = [];

    for (let i = 0; i < this.goal; i++) {
      let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

      // Let's ensure our Pulser order isn't redundant.
      if (i > 0) {
        while (pattern[i - 1] === randomNum) {
          randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
      }

      pattern.push(randomNum);
    }

    return pattern;
  }

  trackTransitionEnd() {
    // Track the two firings of 'onTransitionEnd'.

    if (this.transition === 0) {
      this.transition = 1;
    } else {
      this.transition = 0;
    }
  }
}
