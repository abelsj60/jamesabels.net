import React from 'react';
import styled from 'styled-components';

import Main from '../primitives/Main.jsx';
import Hed from '../primitives/Hed.jsx';
import Graf from '../primitives/Graf.jsx';

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
  margin-top: 20px;
`;
const RestyledHed = styled(Hed)`
  font-family: Kaushan Script, cursive;
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1px 1px 2px black;
`;
const RestyledGraf = styled(Graf)`
  text-shadow: 1px 1px 2px black;
  margin-left: 16px;
`;
const BoyInForeground = styled.img`
  position: absolute;
  bottom: 0;
  align-self: center;
  object-fit: cover;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;
const TravelButton = styled.section`
  z-index: 2;
  font-size: 1.3rem;
  border-radius: 5px;
  width: 80px;
  color: white;
  padding: 10px;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  margin-bottom: 45px;
  border: 0.5px solid white;
`;

export default function Home(props) {
  const { inCity, showBusinessCard, showLegalTerms } = props.state;
  const { boundHandleClickForApp } = props;
  const buttonText = inCity ? 'Home' : 'Away';

  return (
    <RestyledMain>
      <NameTag tempContentIsOn={showBusinessCard || showLegalTerms}>
        <RestyledHed size="6.5" color="yellow">
          James Abels
        </RestyledHed>
        <RestyledGraf size="1.65" color="pink" top="-15">
          coding narratives and magical adventures
        </RestyledGraf>
      </NameTag>
      <BoyInForeground src="/foreground.png" />
      <FantasyAsBackground
        alt="fantasy world"
        src="/background-fantasy.png"
        inCity={inCity}
      />
      <CityAsBackground
        alt="city world"
        src="/background-city.png"
        inCity={inCity}
      />
      <TravelButton
        tempContentIsOn={showBusinessCard || showLegalTerms}
        onClick={() => boundHandleClickForApp('swapHomePageImage')}
      >
        {buttonText}
      </TravelButton>
    </RestyledMain>
  );
}
