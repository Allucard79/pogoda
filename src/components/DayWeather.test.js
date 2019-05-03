import React from 'react';
import { shallow } from 'enzyme';
import DayWeather from './DayWeather';

it('renders without crashing', () => {
  shallow(<DayWeather />);
});
