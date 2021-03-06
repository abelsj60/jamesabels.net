import callReactGa from '../helpers/callReactGa.js';
import dayjs from 'dayjs';
import eventManagement from '../helpers/eventManagement.js';
import getFontSize from '../helpers/getFontSize.js';
import home from '../data/home/home.md';
import Loader from '../shared/Loader.jsx';
import marked from 'marked';
import React, { Fragment } from 'react';
import {
  isIOS,
  osVersion
} from 'react-device-detect';
import ReactHtmlParser from 'react-html-parser';
import ReactGA from 'react-ga';
import styled, { css, keyframes } from 'styled-components';
import SubHed from './SubHed.jsx';

const blurInKeyframes = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;
const heartbeatKeyframes = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }

  16% {
    transform: scale(1.03);
    animation-timing-function: ease-in;
  }

  25% {
    transform: scale(0.97);
    animation-timing-function: ease-out;
  }

  41% {
    transform: scale(1.05);
    animation-timing-function: ease-in;
  }

  51% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;
const OuterContainer = styled.div`
  display: ${p => p.tempContent > 0 ? 'none' : 'block'};
  // The double animation prop works b/c heartbeat runs three times on load, then stops. It then
  // effectively 'goes away' because p.heartbeat is false. The blur in keyframes is then used when 
  // a background change is triggered. This wouldn't work if the two were set to run 
  // simultaneously — the second would overwrite the first.
  ${p => p.heartbeat > 0 && p.heartbeat < 2 && css`animation: 1.15s ease-in-out ${heartbeatKeyframes} 3 both`};
  ${p => p.spellLevel === 5 && css`animation: ${blurInKeyframes} ${!p.inCity ? '1.52s' : '1.5s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both`};
  pointer-events: ${p => p.spellLevel === 5 && 'none'};
  text-align: center;
  z-index: 2;
  // Set margin-top with spacer height to avoid a weird "jumping bug" when using spacer alone. While spacer says it's always on screen,
  // when in landscape, the browser thinks it's removed as it exits the spell. This caused my name to jump up and get cut off. 
  // We get the right result by positioning the element w/margin-top, and setting spacer to position: absolute (to cover the h1's excess space).
  margin-top: ${p => p.spacerHeight}px;
  ${p => p.nameTagWidth && `width: ${p.nameTagWidth}px`};
`;
const Spacer = styled.div`
  // This really isn't a spacer any more. It's position: absolute, so more of a coverPlate. It minimizes accidental clicks/touches above my 
  // name, which is an active onClick zone b/c the h1 has unintentional space above it. The OuterContainer positions itself w/margin-top.
  position: absolute;
  height: ${p => p.spacerHeight}px;
  width: 100%;
  z-index: 3;
`;
const HedLink = styled.a`
  display: flex;
  text-decoration: none;
  margin-left: 2px; // Here instead of Hed / H1...no penalty.
`;
const Hed = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  font-size: ${p => p.fontSize}px;
  text-shadow: 2px 1.5px 5px black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  // Use !p.homePageLoaded to limit opacity change to load sequence.
  // Use p.offline to change how the hed's shown when surfing online/offline.
  ${p => !p.homePageLoaded && !p.offline && css`opacity: ${p.loadLevel < 1 ? '0' : '1'}`};
  // Match transition values to FallbackImage in PictureBox.
  ${p => p.loadLevel < 2 && css`transition: opacity .69s .01s ease-in-out;`}
  // Let's set height in a consistent way. HTML text often has wonky CapHeights and Baselines. One solution: 
  // https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce
  // It didn't work well for me. So, I did the following:
  //  1. Found a line-height that tightened the space around the text to what I expected/wanted.
  //  2. Explicitly set the element's height to match the font-size (in px) so nothing gets cut off.
  // Note: This worked great here, but may not work as well with multiple lines of text...
  line-height: .45;
  height: ${p => p.fontSize}px;
  margin-left: 0px;
  width: 100%;
`;
const InnerContainer = styled.div`
  display: ${p => p.spellLevel < 5 && ((p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2)) ? 'none' : 'block'};
  width: 100%;
  // Remember, opacity brings the component into view IF display: block is set one spellLevel sooner. 
  // Why? The element must exist in DOM to transition. This technique is used several times...
  opacity: ${p => (!p.homePageLoaded && p.loadLevel < 2) || (p.spellLevel < 5 && (p.enter && p.spellLevel >= 1) || (p.exit && p.spellLevel > 1)) ? '0' : '1'};
  // Compared to <Hed />, this element's initial fade-in looks best when it starts later, runs faster, and uses a different bezier curve.
  // Transition settings for the spell should match (in total) PictureBox/Fallbacks's transition property.
  transition: opacity ${p => (!p.homePageLoaded && p.loadLevel < 2) ? '.695s .005s' : p.enter ? '.45s' : '.65s'} ease-in-out;
  // Properly set full width by going to source, less the "j" in the Hed.
  width: ${p => p.finalWidth};
  // Properly offset container by the width of the "j" in the Hed.
  // Note: On mobile, the start on the left may be further right than expected.
  margin-left: ${p => p.marginLeft};
`;
const Pitch = styled.section`
  overflow: auto;
  margin-top: 10px;
  z-index: 2;
  // Ensure full width
  width: 100%; 
  
  p {
    font-size: ${p => p.fontSize}px;
    font-weight: 500;
    margin-bottom: 0px;
    margin-left: 2px; // Place in <p> so the width doesn't extend past containing <section> 
    color: ${p => p.theme.colors.black};
    text-shadow: 1.5px 1px 2px white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function NameTag(props) {
  const {
    appState,
    boundHandleClickForApp,
    boundHandleClickForHome,
    homeState,
    setLoadLevels,
    setSpellLevel
  } = props;
  const {
    homePageLoaded,
    heartbeat,
    nameTagWidth,
    offline,
    spacerHeight,
    tempContent,
    type
  } = appState;
  const {
    eventType,
    loadLevel,
    movement,
    score,
    spellLevel
  } = homeState;
  const {
    attributes,
    body
  } = home;
  const {
    motto,
    name
  } = attributes;
  // Shift Subhed and Pitch elements left so they start after the 'J' in my name.
  // The fontSize algorithm excludes margins, so the new size will be true... 
  const leftMargin = nameTagWidth * .052;
  const handleClickForHed = event => {
    eventManagement(event);

    // 1. No spell if iOS <= 7!
    // 2. Otherwise, if online, always cast a spell.
    // 3. If not online, allow one more click to exit spell.

    if (
      (!isIOS || (isIOS && parseInt(osVersion) > 7))
        && (!offline || (offline && spellLevel > 0))
    ) {
      // Heartbeat ends at 3, set in PictureBox.onTransitionEndForBlurredBoy
      if (homePageLoaded && heartbeat > 1 && (spellLevel === 0 || spellLevel === 4)) {
        if (eventType === 'touch') {
          boundHandleClickForHome('resetEventType');
          return false;
        }

        if (callReactGa()) {
          ReactGA.event({
            category: 'Home state',
            action: `Spell toggled: ${spellLevel === 0 ? 'off' : 'on'}`,
            value: score
          });
        }
  
        boundHandleClickForHome('toggleSpell');
      }
    }
  };
  const handleAnimationEndForHeartbeat = event => {
    eventManagement(event);
    boundHandleClickForApp('updateHeartbeat'); // Sets to 2
    // Animation only runs if heartbeat = 0, so no check needed!
    localStorage.lastHeartbeat = dayjs().format();
  };
  const handleTransitionEndForHed = event => {
    eventManagement(event);

    if (spellLevel < 1) {
      setLoadLevels(7);
    }
  };
  const handleTransitionEndForInnerContainer = event => {
    eventManagement(event);
    // Use conditional if InnerContainer set to position: absolute
    // Don't need it when dispaly: none is used instead.
    if (spellLevel === 1) { 
      setSpellLevel.two(movement === 'enter', 'InnerContainer');
      setSpellLevel.reset(movement === 'exit', 'InnerContainer');
    }
  };

  return (
    <Fragment>
      <Spacer
        spacerHeight={spacerHeight}
      />
      <OuterContainer
        heartbeat={heartbeat}
        nameTagWidth={nameTagWidth}
        onAnimationEnd={handleAnimationEndForHeartbeat}
        spacerHeight={spacerHeight}
        spellLevel={spellLevel}
        tempContent={tempContent}
      >
        <HedLink
          href=''
          onClick={handleClickForHed}
        >
          <Hed
            fontSize={getFontSize(nameTagWidth, 1.17)}
            homePageLoaded={homePageLoaded}
            loadLevel={loadLevel}
            offline={offline}
            onTransitionEnd={handleTransitionEndForHed}
          >
            {name}
          </Hed>
        </HedLink>
        <InnerContainer
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          // Full nameTagWidth - width of 'J' + the two px offset.
          finalWidth={`${nameTagWidth - leftMargin + 2}px`}
          homePageLoaded={homePageLoaded}
          loadLevel={loadLevel}
          marginLeft={`${leftMargin}px`}
          onTransitionEnd={handleTransitionEndForInnerContainer}
          spellLevel={spellLevel}
        >
          <SubHed
            // Has to be tuned on mobile devices? Why? Who knows.
            fontSize={getFontSize(nameTagWidth, type !== 'mobile' ? 3.15 : 2.9)}
          >
            {motto}
          </SubHed>
          <Pitch
            fontSize={getFontSize(nameTagWidth, 5)}
          >
            <Fragment>
              {ReactHtmlParser(marked(
                body, { smartypants: true }
              ))}
            </Fragment>
          </Pitch>
        </InnerContainer>
        <Loader
          // Remember, 'done' keeps it off when navigating 
          // home after homePageLoaded is true...
          done={homePageLoaded}
          marginBottom="13"
          show={loadLevel === 1}
          text={'Loading art...'}
        />
      </OuterContainer>
    </Fragment>
  );
}
