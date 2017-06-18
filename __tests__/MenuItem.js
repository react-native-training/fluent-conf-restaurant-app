import 'react-native';
import React from 'react';
import MenuItem from '../app/components/MenuItem.js';

import renderer from 'react-test-renderer';

/*
* MenuItem props:
* source function or object
* title string
* description string
* price string
*/

it('renders correctly', () => {
  const tree = renderer.create(
    <MenuItem
      title='Guacamole'
      description='Lorem ipsum'
      price='$4.99'
      source={require('../app/assets/images/guacamole.jpg')}
    />
  );
  expect(tree).toMatchSnapshot();
});
