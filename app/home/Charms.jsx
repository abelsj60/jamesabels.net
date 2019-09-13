import FitText from '@kennethormandy/react-fittext';
import React from 'react';
import Mapper from '../shared/Mapper.jsx';
import styled, { css, keyframes } from 'styled-components';
import SubHed from './SubHed.jsx';

const bigPinkPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(253,17,114, 0);
  }

  100% {
    transform: rotate(1turn);
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 0);
  }
`;
const pinkPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(253,17,114, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 0);
  }
`;
const bigYellowPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(255, 231, 76, 0);
  }

  100% {
    transform: rotate(1turn);
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 0);
  }
`;
const yellowPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(255, 231, 76, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 0);
  }
`;

const OuterContainer = styled.div`
  display: ${p => p.spellLevel < 5  && !p.tempContentIsOn ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  opacity: ${p => (p.enter && p.spellLevel >= 3 )|| (p.exit && p.spellLevel > 3) ? '1' : '0'};
  transition: opacity .535s ease-in;
  ${p => p.nameTagWidth && `width: ${p.nameTagWidth}px`};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    width: 240px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}) {
    width: 330px;
  }
`;
const CharmBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Charm = styled.div`
  // Separate p.enter and p.exit checks so the animation starts on spellLevel 4 and runs through the onExit fadeOut (otherwise, it ends onExit. Awkward).
  animation: ${p => (((p.enter && p.spellLevel > 3) || (p.exit && p.spellLevel >= 3)) && p.isActive && css`1.5s -.15s ${p.isReady ? bigYellowPulse : bigPinkPulse} infinite`)};
  border: 2px dotted ${p => p.theme.colors.pink};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  z-index: 3;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}) {
    width: 75px;
    height: 75px;
  }
`;
const CharmShadow = styled.div`
  background-color: ${p => p.isReady && p.isActive ? 'rgba(255, 231, 76, .6)' : 'rgba(253, 17, 114, .6)'};
  box-shadow: 0px 0px 22px -8px rgba(0, 0, 0, .8);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;
const Eye = styled.div`
  // Separate p.enter and p.exit checks so the animation starts on spellLevel 4 and runs through the onExit fadeOut (otherwise, it ends onExit. Awkward).
  animation: ${p => (((p.enter && p.spellLevel > 3) || (p.exit && p.spellLevel >= 3)) && p.isActive && css`1.5s -.15s ${p.isReady ? pinkPulse : yellowPulse} infinite`)};
  background-color: ${p => p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow};
  height: 18px;
  width: 5px;
  border-radius: 50%;
  z-index: 1;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: 23px;
    width: 6px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}) {
    height: 35px;
    width: 8px;
  }
`;
const EyeShadow = styled.div`
  border-radius: 50%;
  box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,.15);
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const Dashboard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  margin-right: 35px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 32px;
  }
`;
const Score = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  font-weight: 400;
  color: ${p => p.theme.colors.black};
  transition: color .5s ease-out;
  margin-bottom: 5px;
`;
const OuterBar = styled.div`
  height: 1px;
  width: 100%;
  align-self: center;
  background-color: ${p => p.theme.colors.white};
`;
const InnerBar = styled.div`
  width: ${p => p.barWidth}%;
  height: 100%;
  background-color: ${p => p.theme.colors.black};
  transition: width .5s ease-out, background-color .5s ease-out;
`;

export default function Charms(props) {
  const {
    appState,
    charmRefs,
    goal,
    homeState,
    setSpellLevels
  } = props;
  const {
    inCity,
    nameTagWidth,
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    activeCharm,
    isCasting,
    spellLevel,
    movement,
    score
  } = homeState;

  // Let's set up a progress bar.

  const barWidth = score * (100 / (goal - 1));
  const isReady = score === goal - 1;

  return (
    <OuterContainer
      spellLevel={spellLevel}
      enter={movement === 'enter'}
      exit={movement === 'exit'}
      isCasting={isCasting}
      tempContentIsOn={showBusinessCard || showLegalTerms}
      nameTagWidth={nameTagWidth}
      onTransitionEnd={() => {
        if (movement === 'enter') {
          setSpellLevels.four();
        }

        if (movement === 'exit') {
          setSpellLevels.two();
        }
      }}
    >
      <FitText
        compressor={2.3}
      >
        <SubHed
          marginLeft="1.17em"
        >
          {!inCity
            ? "Tap the pulses to travel home"
            : "Tap the pulses for adventure"}
        </SubHed>
      </FitText>
      <InnerContainer>
        <CharmBox>
          <Mapper
            mapData={['one', 'two', 'three']}
            render={
              (_, idx) => {
                const isActive = activeCharm === idx + 1;
                return (
                  <Charm
                    key={idx}
                    isActive={isActive}
                    spellLevel={spellLevel}
                    enter={movement === 'enter'}
                    exit={movement === 'exit'}
                    isReady={isReady}
                    ref={charmRefs[idx]} // Add a ref to each Charm when mounted
                  >
                    <CharmShadow
                      isActive={isActive}
                      spellLevel={spellLevel}
                      isReady={isReady}
                    />
                    <Eye
                      isActive={isActive}
                      spellLevel={spellLevel}
                      enter={movement === 'enter'}
                      exit={movement === 'exit'}
                      isReady={isReady}
                    >
                      <EyeShadow
                        isActive={isActive}
                        spellLevel={spellLevel}
                        isReady={isReady}
                      />
                    </Eye>
                  </Charm>
                );
              }}
          />
        </CharmBox>
        <Dashboard>
          <Score
            isReady={isReady}
          >
            Cast spell in {5 - score}...
          </Score>
          <OuterBar>
            <InnerBar
              barWidth={barWidth}
              isReady={isReady}
            />
          </OuterBar>
        </Dashboard>
      </InnerContainer>
    </OuterContainer>
  );
}
