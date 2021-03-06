import React from 'react';
import styled, { css } from 'styled-components';

// Try to run animations on a separate thread, strategy warrants more investigation:
// https://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css
// Revisit: https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

export default styled.img`
  position: absolute;
  display: block;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  // With luck, will-change will transform image to bitmap for smoother transforms.
  // Takes a beat, so may not be done in practice before first transition...
  // Added anyway.
  ${p => p.spellLevel > 0 && 'will-change: transform, opacity'};
  // Note: below is currently abandoned attempt to add a blur filter to the mix, it looks great, but: 
  //  a. It's hard to implement in an aesthetically pleasing way, and
  //  b. More important, it results in a currently unacceptable performance hit...
  //  -Will need to add to will-change and transition when adding it back.
  // ${p => p.spellLevel > 4 && !p.inCity && 'filter: blur(40px);'}
  opacity: ${p => p.inCity ? '1' : '0'};
  ${p => p.spellLevel > 0 && css`transform: ${p.inCity ? 'scale(1)' : 'scale(1.78)'};`}
  // Transition used for background swap. Opacity bezier curve should match that used by ForrestBackground.
  // Added a slight delay to both transitions to give the browser a second to breathe.
  // Also, mental note --> The cubic-bezier curve is the best. I tested extensively.
  ${p => p.spellLevel > 0 && css`transition: transform 1.75s, opacity 1.31s cubic-bezier(0.77, 0, 0.175, 1);`}
  z-index: ${p => !p.inCity && p.spellLevel <= 5 ? '-2' : '0'};
`;
