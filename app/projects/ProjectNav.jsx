import adjustTabIndex from '../helpers/adjustTabIndex.js';
import eventManagement from '../helpers/eventManagement.js';
import { isIE } from 'react-device-detect';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import urlPrefix from '../helpers/urlPrefix';

const Group = styled(UnorderedList)`
  flex: ${p => p.imageLoaded > 1 && !p.isMenu && '1'};
  justify-content: ${p => p.imageLoaded > 1 && !p.isMenu && 'flex-end'};
  margin-left: ${p => !p.isMenu && '15px'};
  display: flex; // See note above
  // Ensures height is true on IE (empty space on top/bottom otherwise)
  ${isIE && 'flex-shrink: 0;'} 

  ${p => p.isMenu && css`
    margin-bottom: ${!p.finalGroup ? '30px' : '5px'};
    // Prevent popping out of container if hi-dpi images are used
    max-width: 100%; 
  `};
`;
const ListItem = styled.li`
  height: 100%;
  margin-right: ${p => !p.finalThumbnail && '15px'};
  // Accounts for no { padding: 6px } on last image in IE 11
  ${p => isIE && p.finalThumbnail && 'flex-shrink: 1.0275;'} 
  
  &:first-child {
    margin-left: ${p => p.isMenu && '0px'};
  }
  
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    margin-right: ${p => !p.finalThumbnail && p.isMenu && '20px'};
  }
`;
const RestyledLink = styled(
  // Filter out highlightThis, isMenu from StyledLink
  // eslint-disable-next-line
  ({ highlightThis, isMenu, offline, ...rest }) => <StyledLink {...rest} />
)`
  display: flex;
  height: ${p => !p.isMenu && '15px'};
  border: 1px solid ${p => p.highlightThis ? p.theme.colors.darkPinkTwo : p.theme.colors.blueTwo};
  align-items: center; // Prevents image from stretching

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: ${p => !p.isMenu && '30px'};
  }
`;
const Image = styled.img`
  vertical-align: top;
  height: ${p => !p.isMenu && '100%'}; // Proper height on project page
  width: ${p => p.isMenu && '100%'}; // Proper width in /menu
  ${p => p.offline && 'font-size: 0rem;'}
  ${p => p.offline && 'color: white;'}
`;

export default function ProjectNav(props) {
  const {
    appState,
    boundHandleClickForApp,
    boundHandleClickForContentLoader,
    contentState,
    imageLoaded,
    mappedProject,
    mappedProjectIndex,
    totalThumbnailCount
  } = props;
  const {
    offline,
    tempContent
  } = appState;
  const {
    allContentData,
    projectIndex,
    thumbnailCount,
    thumbnailIndex
  } = contentState;
  const {
    projectThumbnail,
    projectName
  } = allContentData[projectIndex].attributes;

  /* A pernicious bug:
  
    O.K. We'll crash if the user goes back-and-forth to-and-from the /menu.
    
    The reason: appState.isMenu is out-of-sync, which means the App will try to get data from mappedProject, which 
    is undefined. This happens b/c ProjectNav gets called before the handleBackAndForth() event handler. 
      -I don't know why.
    
    Rather than go nuts tracking down why or redesigning the whole app, I'm going to CHEAT and check the state of 
    the menu directly via the window object. It'll be accurate, meaning this allows us to avoid problems easily. 
    
    To be interanlly consistent, I'll use isMenuLocally instead of isMenu throughout this ProjectNav. 
  */
  const isMenuLocally = window.location.pathname.split('/').indexOf('menu') === 2;
  const finalGroup = isMenuLocally && mappedProjectIndex === allContentData.length - 1;
  const useThisData = !isMenuLocally ? projectThumbnail : mappedProject.attributes.projectThumbnail;
  // Let's see if the thumbnails are fully loaded while on the /menu page. Thumbnail count will be the same length
  // as useThisData on /projects pages, and the length of totalThumbnailCount on /menu pages (MultiProjecNav).
  // Note: Projects.jsx has its own isOffline value, meaning /projects image handling can bifurcate...
  const fullyLoaded = !isMenuLocally ? thumbnailCount === useThisData.length : thumbnailCount === totalThumbnailCount;
  const isOffline = offline && !fullyLoaded;
  const tabIndex = adjustTabIndex(tempContent);
  const handleThumbnailLoads = event => {
    eventManagement(event);
    boundHandleClickForContentLoader('trackThumbnailCount')
  };

  return (
    <Group
      finalGroup={finalGroup}
      imageLoaded={imageLoaded}
      isMenu={isMenuLocally}
    >
      <Mapper
        mapData={useThisData}
        render={(thumb, idx) => {
          const isActive = isMenuLocally && projectName === mappedProject.attributes.projectName;
          const highlightThis = (!isMenuLocally && thumbnailIndex === idx) || (isActive && thumbnailIndex === idx);

          return (
            <ListItem
              finalThumbnail={idx === useThisData.length - 1}
              isMenu={isMenuLocally}
              key={idx}
            >
              <RestyledLink
                highlightThis={highlightThis}
                isMenu={isMenuLocally}
                tabIndex={tabIndex}
                to={`/projects/${normalize(
                  !isMenuLocally ? projectName : mappedProject.attributes.projectName
                )}/${idx + 1}`}
                boundHandleClickForApp={boundHandleClickForApp}
              >
                <Image
                  alt={`Thumbnail for ${projectName}, image ${idx + 1}.`}
                  isMenu={isMenuLocally}
                  offline={isOffline}
                  onLoad={handleThumbnailLoads}
                  src={offlineImageToggle(isOffline, `${urlPrefix}${thumb}-1x.jpg`)}
                  srcSet={
                    offlineImageToggle(isOffline, `${urlPrefix}${thumb}-2x.jpg 2x`),
                    offlineImageToggle(isOffline, `${urlPrefix}${thumb}-3x.jpg 3x`),
                    offlineImageToggle(isOffline, `${urlPrefix}${thumb}-4x.jpg 4x`)
                  }
                />
              </RestyledLink>
            </ListItem>
          );
        }}
      />
    </Group>
  );
}
