import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

it('should render quote correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
