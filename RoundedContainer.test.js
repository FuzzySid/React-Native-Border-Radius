import React from 'react';
import renderer from 'react-test-renderer';

import RoundedContainer from './RoundedContainer';

describe('<RoundedContainer/>', () => {
  it('Has Border Radius', () => {
    const roundedContainer = renderer.create(<RoundedContainer/>).toJSON();
    expect(roundedContainer.props.style.borderRadius).toBeGreaterThan(0);
  });
});