import React from 'react';
import { NAVIGATION_ITEMS } from '../constants';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <a
          href={`#${item}`}
          key={item}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
