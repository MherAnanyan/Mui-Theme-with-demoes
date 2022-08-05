import * as React from 'react';
import { Wrapper } from '../../Wrapper';
import { HugContents } from './HugContents';
import { Fixed } from './Fixed';
import { FixedHeight } from './FixedHeight';

export const Menus = () => {
  return (
    <Wrapper title="Menus">
      <div style={{ display: 'flex', gap: 50 }}>
        <HugContents />
        <Fixed />
        <FixedHeight />
      </div>
    </Wrapper>
  );
};
