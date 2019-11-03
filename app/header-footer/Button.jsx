import React from 'react';
import styled from 'styled-components';

const Structure = styled.button`
  display: ${p => !p.isStory ? 'none' : ''};
  margin-left: 25px;
  width: 69px;
  padding: 7px 0px;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-color: unset; // otherwise, button grey
  border: 1px rgba(255, 255, 255, .6) solid;
  box-shadow: ${p => p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) && '2px 2px 2.5px rgba(0, 0, 0, .3)'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .5s' : ''};
  user-select: none;
  z-index: 0;

  :focus {
    outline: 0;
  }
`;
const Cover = styled.div`
  background-color: ${p => p.theme.colors.black};
  opacity: ${p => p.illustrationLevel >= 2 ? '.2' : '.125'}; // Multi-value?
  transition: ${p => p.illustrationLevel > 0 && 'opacity .35s'};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
`;
const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: 400;
  margin-bottom: 0px;
`;

export default function Button(props) {
  const {
    className,
    clickFunction,
    illustrationDirection,
    illustrationLevel,
    isStory,
    tempContent,
    text
  } = props;

  return (
    <Structure
      className={className}
      illustrationDirection={illustrationDirection}
      illustrationLevel={illustrationLevel}
      isStory={isStory}
      onClick={clickFunction}
      tempContent={tempContent}
    >
      <Cover
        illustrationLevel={illustrationLevel}
      />
      <Text>
        {text}
      </Text>
    </Structure>
  );
}
