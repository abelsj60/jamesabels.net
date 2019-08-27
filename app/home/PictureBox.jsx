import bio from '../data/home/home.md';
import React from 'react';
import styled, { css } from 'styled-components';

const largeScale = 1.35;
const PictureHolder = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
const BlurredBoyImage = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  opacity: ${p => p.boyIsLoading || p.fantasyIsLoading || p.theme.blurForTempContent ? '1' : '0'};
  transition: ${p => !p.finishedHomePageLoad && 'opacity .75s'};
`;
const BoyImage = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: ${p => p.boyIsLoading || p.fantasyIsLoading ? '0' : '1'};
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: .1;
  display: ${p => !p.isCasting || p.castSpell ? 'none' : 'block'};
  display: none;
`;
const BlurredFantasyImage = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => p.boyIsLoading || p.fantasyIsLoading || (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? '1' : '0'};
  transition: ${p => !p.finishedHomePageLoad && 'opacity .5s'};
  z-index: ${p => !p.inCity && !p.castSpell ? '0' : '-2'};
  ${p => (p.castSpell || p.inCity) && 'display: none'};
`;
const FantasyImage = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => p.boyIsLoading || p.fantasyIsLoading || p.inCity ? '0' : '1'};
  transform: ${p => p.inCity ? css`scale(${largeScale})` : 'scale(1)'};
  transform-origin: 50% 5%;
  transition: transform 1.75s, opacity ${p => !p.inCity ? '1.35s' : '1.35s'} cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${p => !p.inCity && !p.castSpell ? '-1' : '-3'};
`;
const BlurredCityImage = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? '1' : '0'};
  z-index: ${p => !p.inCity && !p.castSpell ? '-2' : '0'};
  ${p => (p.castSpell || !p.inCity) && 'display: none;'}
`;
const CityImage = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => p.inCity ? '1' : '0'};
  transform: ${p => p.inCity ? 'scale(1)' : css`scale(${largeScale})`};
  transition: transform 1.75s, opacity ${p => p.inCity ? '1.35s' : '1.35s'} cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${p => !p.inCity && !p.castSpell ? '-3' : '-1'};
`;

export default function PictureBox(props) {
  const {
    boyInForegroundImage,
    boyInForegroundImageBlurred,
    cityImage,
    cityImageBlurred,
    descriptionBoy,
    descriptionFantasy,
    descriptionCity,
    fantasyImage,
    fantasyImageBlurred
  } = bio.attributes;
  const {
    appState,
    boundHandleClickForHome,
    handleInitialLoad,
    homeState
  } = props;
  const {
    finishedHomePageLoad,
    homeAnimation,
    inCity
  } = appState;
  const {
    castSpell,
    isCasting,
    finishedLoadingBoy,
    finishedLoadingFantasy,
    loadBoy,
    loadFantasy
  } = homeState;

  const transitionHandler = function(magicState, activeBackground, event) {
    event.preventDefault();

    if (
      magicState
        && activeBackground
        && event.propertyName === 'transform'
    ) {
      boundHandleClickForHome('toggleSpell');
    }
  }

  return (
    <PictureHolder>
      <BlurredBoyImage
        boyIsLoading={loadBoy}
        fantasyIsLoading={loadFantasy}
        finishedLoadingBoy={finishedLoadingBoy}
        finishedLoadingFantasy={finishedLoadingFantasy}
        finishedHomePageLoad={finishedHomePageLoad}
        homeAnimation={homeAnimation !== 'run'}
        src={boyInForegroundImageBlurred}
        alt={descriptionBoy}
        onTransitionEnd={() => handleInitialLoad('finishedLoadingBoy')}
      />
      <BoyImage
        src={boyInForegroundImage}
        alt={descriptionBoy}
        boyIsLoading={loadBoy}
        fantasyIsLoading={loadFantasy}
        finishedHomePageLoad={finishedHomePageLoad}
        onLoad={() => handleInitialLoad('boy')}
      />
      <Portal
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <BlurredFantasyImage 
        src={fantasyImageBlurred}
        finishedLoadingBoy={finishedLoadingBoy}
        finishedLoadingFantasy={finishedLoadingFantasy}
        finishedHomePageLoad={finishedHomePageLoad}
        boyIsLoading={loadBoy}
        fantasyIsLoading={loadFantasy}
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        onTransitionEnd={() => handleInitialLoad('finishedLoadingFantasy')}
      />
      <FantasyImage
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        src={fantasyImage}
        alt={descriptionFantasy}
        onLoad={() => handleInitialLoad('fantasy')}
        onTransitionEnd={transitionHandler.bind(null, castSpell, inCity)}
      />
      <BlurredCityImage 
        src={cityImageBlurred}
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <CityImage
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        src={cityImage}
        alt={descriptionCity}
        onTransitionEnd={transitionHandler.bind(null, castSpell, !inCity)}
      />
    </PictureHolder>
  );
}
