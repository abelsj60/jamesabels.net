import React from 'react';
import styled from 'styled-components';

import Main from '../primitives/Main.jsx';
import Hed from '../primitives/Hed.jsx';
import Graf from '../primitives/Graf.jsx';
import Button from '../shared/Button.jsx';

const RestyledMain = styled(Main)`
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 848px) {
    flex-direction: column;
  }
`;
const NameTag = styled.div`
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 30px;
  cursor: pointer;
`;
const RestyledHed = styled(Hed)`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1px 1px 2px black;
`;
const RestyledGraf = styled(Graf)`
  text-shadow: 1px 1px 2px black;
  margin-left: 18px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
const PictureBox = styled.div`
  position: absolute;
  top: 0px;
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1;
`;
const BoyInForeground = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100vh;
  min-width: 100vw;
  z-index: 1;
  pointer-events: none;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  position: unset;
  left: 0px;
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  position: absolute;
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;
const TravelButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 0.5px solid white;
  border-radius: 5px;
  color: white;
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  font-size: 1.3rem;
  margin-bottom: 45px;
  z-index: 2;
`;

export default function Home(props) {
  const { inCity, showBusinessCard, showLegalTerms } = props.appState;
  const { boundHandleClickForApp } = props;
  const travelButtonText = inCity ? 'Home' : 'Away';

  return (
    <RestyledMain>
      <NameTag tempContentIsOn={showBusinessCard || showLegalTerms}>
        <RestyledHed size="6.5" color="yellow">
          JamesAbels
        </RestyledHed>
        <RestyledGraf size="1.7" color="pink" top="-16">
          narrative coding and other adventures
        </RestyledGraf>
      </NameTag>
      <PictureBox>
        <BoyInForeground src="/foreground.png" alt="the boy looks out" />
        <Portal />
        <FantasyAsBackground
          alt="the boy builds a fantasy world"
          src="/background-fantasy.png"
          inCity={inCity}
        />
        <CityAsBackground
          alt="the boy sees a city view"
          src="/background-city.png"
          inCity={inCity}
        />
      </PictureBox>
      <TravelButton
        className="travel-button"
        clickFunction={() => boundHandleClickForApp('swapHomePageImage')}
        tempContentIsOn={showBusinessCard || showLegalTerms}
        text={travelButtonText}
      />
    </RestyledMain>
  );
}
