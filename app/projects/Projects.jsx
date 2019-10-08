import eventManagement from '../helpers/eventManagement.js';
import Loader from '../shared/Loader.jsx';
import Main from '../primitives/Main.jsx';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import {
  isMobile
} from 'react-device-detect';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';

const Type = styled.p`
  font-size: ${p => p.theme.fontSizes.three};
  color:${p => p.theme.colors.lightBlack};
  margin-bottom: 4px;
  font-style: italic;
`;
const ProjectName = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
  margin-top: -8px;
  margin-bottom: 4px;
`;
const Hed = styled.h3`
  font-size: ${p => p.theme.fontSizes.eight};
  font-weight: 400;
  color: ${p => p.theme.colors.blue};
  margin-bottom: 8px;
  // Gets cut off in Chrome (no need to counteract in ContentHolder.)
  margin-left: 2px; 
`;
const Dek = styled.h2`
  font-size: ${p => p.theme.fontSizes.thirteen};
  margin-bottom: ${p => p.theme.bottomMargin.regular};
  font-weight: 300;
  color: ${p => p.theme.colors.pink};
`;
const Graf = styled.p`
  margin-right: 0px;
  margin-bottom: ${p => !p.lastItem ? p.theme.bottomMargin.regular : '15px'};
  // Gets cut off in Chrome (no need to counteract in ContentHolder.)
  margin-left: 2px; 
`;
const Figure = styled.figure`
  margin: 0px;
  padding-top: 15px;
  border-top: 1px solid ${p => p.theme.colors.blueTwo};
`;
const Caption = styled.figcaption`
  margin-bottom: 10px;
  font-size: ${p => p.theme.fontSizes.seven};
  line-height: 1.5;
  color: ${p => p.theme.colors.lightBlack};
`;
const ImageHolder = styled.div`
  padding: 15px;
  min-height: 155px;
  background-color: ${p => p.theme.colors.reverieBlue};
`;
const MainImage = styled.img`
  opacity: ${p => p.imageLoaded ? '1' : '0'};
  width: 100%;
  height: auto;
  vertical-align: top;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, .3);
`;

export default function Projects(props) {
  const {
    appState,
    boundHandleClickForContentLoader,
    contentState
  } = props;
  const {
    allContentData,
    imageLoaded,
    projectIndex,
    thumbnailIndex
  } = contentState;
  const {
    captions,
    // full,
    partialUrls,
    pitch,
    projectName,
    showTheseAttributes,
    type,
    // zoomed
  } = allContentData[projectIndex].attributes;
  const { pinchZoomed } = appState;
  const caption = captions[thumbnailIndex];

  // Larger res ('zoomed') image if:
  //  a. desktop
  //  b. pinchZoomed

  // const source = !isMobile || pinchZoomed
  //   ? zoomed[thumbnailIndex]
  //   : full[thumbnailIndex];
  const newSource = partialUrls[thumbnailIndex];
  const attributeArray = showTheseAttributes.map(
    name => allContentData[projectIndex].attributes[name]
  );
  const onLoadMainImage = event => {
    eventManagement(event);
    boundHandleClickForContentLoader('imageLoader', 1)
  };
  const onTransitionEndForLoader = event => {
    eventManagement(event);
    boundHandleClickForContentLoader('imageLoader', 2)
  };

  return (
    <Main>
      <ContentHolder>
        <Shelf
          height="32px"
          tinyHeight="20px"
        >
          <MenuButton
            {...props}
          />
          <Loader
            spinner={true}
            marginLeft="auto"
            show={imageLoaded < 1}
            done={imageLoaded > 1}
            forTransition={onTransitionEndForLoader}
          />
          <ProjectNav
            {...props}
            imageLoaded={imageLoaded}
          />
        </Shelf>
        <Overflow>
          <Type>
            {type}
          </Type>
          <ProjectName>
            {projectName}
          </ProjectName>
          <Dek>
            {pitch}
          </Dek>
          <Mapper
            mapData={attributeArray}
            render={
              (text, idx) => {
                return (
                  <Fragment key={idx}>
                    <Hed>
                      {
                        showTheseAttributes[idx][0]
                          .toUpperCase() + showTheseAttributes[idx]
                          .slice(1)
                      }
                    </Hed>
                    <Graf>
                      {text}
                    </Graf>
                  </Fragment>
                );
              }
            }
          />
          <Figure>
            <Caption>
              {caption}
            </Caption>
            <ImageHolder>
              <MainImage
                alt="mainPic"
                // src={source}
                src={`${newSource}-625-1x.jpg`}
                srcSet={
                  `${newSource}-1250-2x.jpg 2x`,
                  `${newSource}-1875-3x.jpg 3x`,
                  `${newSource}-2500-4x.jpg 4x`
                }
                imageLoaded={imageLoaded}
                onLoad={onLoadMainImage}
              />
            </ImageHolder>
          </Figure>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
