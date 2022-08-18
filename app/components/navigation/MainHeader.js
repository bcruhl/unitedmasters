import React from 'react';
import Strings from '../../utils/strings';
import logo from '../../static/img/logo-unitedmasters.png'

const MainHeader = () => {
    return (
    <>
      <h1>{Strings.str('mainHeaderMessage')}</h1>
      <header>
        <img
          src={logo}
          alt={Strings.str('logoAltText')}
        />
      </header>
    </>
  );
};

export default MainHeader;
