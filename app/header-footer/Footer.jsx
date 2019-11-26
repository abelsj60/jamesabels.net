import Button from './Button.jsx';
import eventManagement from '../helpers/eventManagement.js';
import Loader from '../shared/Loader.jsx';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.footer`
  filter: ${p => p.tempContent === 3 && p.theme.blur};
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: ${p => p.theme.fontSizes.one};
  position: relative;
  width: 100%;
  max-width: 70rem;

  // May use in future, but on iPhones w/homebar, the bottom of the Footer cooperates
  // On iPhones w/o the homebar, the screen will leap up, but we don't push it down
  // w/a call to window.scrollTo, so...who cares?  
  // padding-bottom: env(safe-area-inset-bottom);
  // padding-bottom: cover(safe-area-inset-bottom);

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    filter: unset;
  }
`;
const Line = styled.div`
  display: ${p => p.home ? 'none' : ''};
  position: absolute;
  z-index: 1;
  left: 25px;
  right: 25px;
  top: 0px;
  margin: 0px;
  height: 1px;
  background-color: ${p => !p.isNotFound ? p.theme.colors.pink : p.theme.colors.white};
  opacity: ${p => p.isReverie || (p.illustrationDirection === 'exit' && p.illustrationLevel < 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel < 1) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0  && p.illustrationLevel < 3 && 'opacity .3s'};
  
  @media (min-width: ${p => p.theme.mediaQueries.desktop}) {
    left: 5px;
    right: 5px;
  }
`;
const RestyledLink = styled(({
  isStory,
  ...rest
}) => <StyledLink {...rest} />)`
  margin-right: 20px;
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: ${p => !p.isLink && p.marginRight !== 'none' && '20px'}; // marginRight default is undefined/falsy
  margin-bottom: 0px;
  color: ${p => (p.active ? (!p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white)};
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.zero};
  user-select: none;
  text-shadow: ${p => !p.isReverie && p.tempContent < 1 && ((p.home && p.coverValY < 0) || ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2))) && '2px 2px 2.5px rgba(0, 0, 0, .4)'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && '.35s'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
    margin-right: ${p => p.marginRight !== 'never' ? '20px' : ''};
    padding-right: 5px;
  }
`;
const TextBox = styled.div`
  display: flex;
  z-index: 1;
  margin-right: 25px;
  
  // Fix IE 11 so story button sits on left and nav items sit on right
  // (Extra rules account for a problem with space-between)
  flex: 1;
  justify-content: flex-end;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-right: 0px;
  }
`;

export default function FooterContainer(props) {
  const {
    appState,
    boundHandleClickForApp
  } = props;
  const {
    currentCaller,
    illustrationDelay,
    illustrationDirection,
    illustrationLevel,
    illustrationState,
    lastCaller,
    tempContent
  } = appState;

  const handleClickForContactLink = event => {
    eventManagement(event);
    boundHandleClickForApp('updateTempContent', 1);
  };
  const handleClickForLegalLink = event => {
    eventManagement(event);
    boundHandleClickForApp('updateTempContent', 2);
  };
  const handleClickForStoryButton = event => {
    /* Alternate approach:

      The button currently reacts to App's existing illustrationState.
        -Location swaps are handled by the Constructor in ContentLoader
          -Via boundHandleClickForApp('updateIllustrationState')
        -Content swaps are updated by ContentLoader.cDU
          -Via boundHandleClickForApp('updateIllustrationState')

      Future alternatives:
        Check the illustration's state here, call setState to update it, 
        then call 'toggleStoryText' by via its callback (param two).
          -One benefit is that we'd be checking the status closer to the
          action, which would let us better account for a lost network
          (if we use navigator.onLine, not an 'offline' event).
    */

    eventManagement(event);

    if (illustrationState < 0) {
      boundHandleClickForApp('toggleIllustrationDelay');
    } else if (illustrationLevel === 0 || illustrationLevel === 3) {
      boundHandleClickForApp('toggleStoryText');
    }
  };

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';
  const isNotFound = currentCaller === 'not-found';
  // No text b/c 'home' is '/'
  const reverieLink = isReverie ? `/${lastCaller !== 'home' ? lastCaller : ''}` : '/reverie';

  return (
    <Container
      story={isStory}
      tempContent={tempContent}
    >
      <Line
        home={isHome}
        hide={illustrationLevel}
        illustrationLevel={illustrationLevel}
        illustrationDirection={illustrationDirection}
        isNotFound={isNotFound}
        isReverie={isReverie}
      />
      <Button
        // Can use ' hardware-accelerate-w-transform' b/c no other transform applied
        className={isStory ? 'hardware-accelerate hardware-accelerate-w-transform' : ''}
        clickFunction={handleClickForStoryButton}
        illustrationDirection={illustrationDirection}
        illustrationLevel={illustrationLevel}
        isReverie={isReverie}
        isStory={isStory}
        tempContent={tempContent}
        text={
          illustrationDelay
            ? 'Cancel'
            : illustrationDirection === 'enter' && illustrationLevel > 0
              ? 'Text on'
              : 'Text off'
        }
      />
      {isStory && (
        <Loader
          // done={!illustrationDelay} // Snappier when disabled...
          fontSize="small"
          marginBottom="2"
          marginLeft="20"
          maxWidth="33"
          smallMarginLeft="12"
          smallMarginRight="17"
          show={illustrationDelay}
          smallFont={true}
          white={true}
        />
      )}
      <TextBox
        isStory={isStory}
      >
        <RestyledLink
          boundHandleClickForApp={boundHandleClickForApp}
          isStory={isStory}
          to={reverieLink}
        >
          <Graf
            active={isReverie}
              // Can use ' hardware-accelerate-w-transform' b/c no other transform applied
            className={isStory ? 'hardware-accelerate hardware-accelerate-w-transform' : ''}
            home={isHome}
            illustrationLevel={illustrationLevel}
            illustrationDirection={illustrationDirection}
            isLink={true}
            isNotFound={isNotFound}
            isReverie={isReverie}
            isStory={isStory}
            marginRight="never"
            tempContent={tempContent}
          >
            Reverie
          </Graf>
        </RestyledLink>
        <Graf
          active={tempContent === 1}
            // Can use ' hardware-accelerate-w-transform' b/c no other transform applied
          className={isStory ? 'hardware-accelerate hardware-accelerate-w-transform' : ''}
          home={isHome}
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isNotFound={isNotFound}
          isReverie={isReverie}
          isStory={isStory}
          onClick={handleClickForContactLink}
          tempContent={tempContent}
        >
          Contact
        </Graf>
        <Graf
          active={tempContent === 2}
            // Can use ' hardware-accelerate-w-transform' b/c no other transform applied
          className={isStory ? 'hardware-accelerate hardware-accelerate-w-transform' : ''}
          home={isHome}
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isReverie={isReverie}
          isStory={isStory}
          isNotFound={isNotFound}
          marginRight="none"
          onClick={handleClickForLegalLink}
          tempContent={tempContent}
        >
          Legal
        </Graf>
      </TextBox>
    </Container>
  );
}
