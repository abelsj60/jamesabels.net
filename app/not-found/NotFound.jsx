import React from 'react';
import styled from 'styled-components';
import Main from '../primitives/Main.jsx';
import Hed from '../primitives/Hed.jsx';
import Right from '../primitives/Right.jsx';

const RestyledRight = styled(Right)`
  flex: 1;
`;
const FailWhale = styled.section`
  flex: 1;
  background-color: cornflowerblue;
`;

export default function NotFound() {
  return (
    <Main>
      <RestyledRight>
        <Hed b="15" s="3">
          Uh oh. Not found!
        </Hed>
        <FailWhale />
      </RestyledRight>
    </Main>
  );
}
