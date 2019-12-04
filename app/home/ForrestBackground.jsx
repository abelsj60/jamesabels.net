import React from 'react';
import styled, { css } from 'styled-components';

// Try to run animations on a separate thread, strategy warrants more investigation:
// https://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css
// Revist: https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

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
  // Only hidden during the initial stages of the load. It's always visible thereafter. 
  // Only transition when casting spells (initial entrance hidden by fallback image).
  // Note: below is currently abandoned attempt to add a blur filter to the mix, it looks great, but: 
  //  a. It's hard to implement in an aesthetically pleasant way, and
  //  b. More important, it results in a currently unacceptable performance hit...
  //  -Will need to add to will-change and transition when adding it back.
  // ${p => !p.inCity && p.spellLevel > 0 && css`filter: blur(${p => p.spellLevel < 4 ? '40px' : '5px'})`};
  opacity: ${p => (!p.homePageLoaded && p.loadLevel < 2) || (p.homePageLoaded && p.inCity) ? '0' : '1'}};
  transform: ${p => p.inCity ? 'scale(1.48)' : 'scale(1)'} translate3d(0, 0, 0);
  transform-origin: 50% ${p => p.inCity ? '-3%' : '-6%'};
  // Transition used for background swap. Opacity bezier curve should match that used by NycBackground.
  // Added a slight delay to both transitions to give the browser a second to breathe.
  // Also, mental note --> The cubic-bezier curve is the best. I tested extensively.
  transition: ${p => p.spellLevel > 0 && 'transform 1.75s, opacity 1.31s cubic-bezier(0.77, 0, 0.175, 1)'};
`;
