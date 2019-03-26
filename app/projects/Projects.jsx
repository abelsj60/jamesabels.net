import DesktopProjectNav from './DesktopProjectNav.jsx';
import Graf from '../primitives/Graf.jsx';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import Main from '../primitives/Main.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const RestyledHedOne = styled(Hed)`
  font-weight: 300;
`;
const RestyledHedTwo = styled(Hed)`
  font-weight: 400;
`;
const Images = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 651px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media (min-width: 848px) {
    flex-direction: column;
  }

  @media (min-width: 1004px) {
    flex-direction: row-reverse;
  }
`;
const Figure = styled.figure`
  margin: 0px;

  @media (min-width: 651px) {
    display: flex;
    flex-direction: column;
  }
`;
const Caption = styled.figcaption`
  display: flex;
  margin: 10px 10px 8px 0px;
  font-size: 1.4rem;
  color: ${p => p.theme.colors.blue};
  font-weight: 300;

  @media (min-width: 651px) {
    margin-top: 0;
  }

  @media (min-width: 848px) {
    margin-top: 10px;
  }

  @media (min-width: 1004px) {
    margin-top: 0;
  }
`;
const Image = styled.img`
  flex: 1;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;

  @media (min-width: 651px) {
    margin-right: 10px;
  }

  @media (min-width: 848px) {
    margin-right: 0px;
  }

  @media (min-width: 1004px) {
    margin-right: 10px;
  }
`;

export default function Projects(props) {
  const {
    data,
    overflowRef,
    params
  } = props;

  const indexForProjectData = params.projectNameToIndex();
  const indexForProjectPics = params.projectThumbnailToIndex();
  const project = data[indexForProjectData];

  const {
    captions,
    contribution,
    description,
    full,
    projectName,
    technologies,
    type
  } = project.attributes;
  const caption = captions[indexForProjectPics];
  const source = full[indexForProjectPics];
  const mapData = [
    { technologies },
    { contribution },
    { description }
  ];
  const keys = mapData.map(
    item => Object.keys(item)[0]
  );

  return (
    <Main>
      <Left>
        <DesktopProjectNav {...props} data={data} params={params} />
      </Left>
      <Right>
        <MenuButton {...props} noOffset={true} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <Hed b="5" c="pink" s="3" t="-8">
            {projectName}
          </Hed>
          <section>
            <RestyledHedOne as="h2" b="15" s="1.7">
              {type}
            </RestyledHedOne>
            <Mapper
              mapData={mapData}
              render={
                (proj, idx) => (
                  <Fragment key={idx}>
                    <RestyledHedTwo as="h3" b="8" c="blue" s="1.4">
                      {keys[idx][0].toUpperCase() + keys[idx].slice(1)}
                    </RestyledHedTwo>
                    <Graf b="10" t="0">
                      {proj[keys[idx]]}
                    </Graf>
                  </Fragment>
                )
              }
            />
            <Images>
              <ProjectNav
                indexForProjectPics={indexForProjectPics}
                isRight={true}
                project={project}
              />
              <Figure>
                <Caption>{caption}</Caption>
                <Image alt="mainPic" src={source} />
              </Figure>
            </Images>
          </section>
        </Overflow>
      </Right>
    </Main>
  );
}
