import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import StoryButton from './StoryButton.jsx';
import Referrer from './custom/Referrer.js';

const Footer = styled.footer.attrs(props => ({
  style: {
    opacity: props.home ? props.magicOpacity : '',
    pointerEvents: props.blockPointer ? 'none' : 'auto'
  }
}))`
  display: flex;
  justify-content: ${props => (!props.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: 1.1rem;
  z-index: 1;
  border-top: 0.5px solid #fd1172;

  @media (min-width: 848px) {
    justify-content: flex-end;
  }
`;
const LinkToReverie = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: 25px;
  color: ${props => (props.show ? '#FD1172' : '#6E7DAB')};
`;
const FooterText = styled.div`
  display: flex;
`;

export default function FooterContainer(props) {
  const { boundHandleClickForApp, state } = props;
  const {
    blockPointer,
    magicOpacity,
    showBusinessCard,
    showLegalTerms,
    showStoryText,
    currentCaller,
    lastCaller
  } = state;

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';

  const whereItStarted =
    lastCaller !== 'home' && lastCaller !== 'i' ? lastCaller : '';
  const linkForReverie = isReverie ? `/${whereItStarted}` : '/reverie';

  return (
    <Footer
      home={isHome}
      story={isStory}
      magicOpacity={magicOpacity}
      blockPointer={blockPointer}
    >
      <StoryButton
        story={isStory}
        showStoryText={showStoryText}
        boundHandleClickForApp={boundHandleClickForApp}
      />
      <FooterText>
        <LinkToReverie to={linkForReverie}>
          <Graf show={isReverie}>Reverie</Graf>
        </LinkToReverie>
        <Graf
          show={showBusinessCard}
          onClick={() => {
            boundHandleClickForApp('showBusinessCard');
          }}
        >
          Contact
        </Graf>
        <Graf
          show={showLegalTerms}
          onClick={() => boundHandleClickForApp('showLegalTerms')}
        >
          Legal
        </Graf>
      </FooterText>
    </Footer>
  );
}
