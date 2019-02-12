import React from 'react';

const imageUrl = 'https://images-1.wuaki.tv/system/images/46/original/register-slider-generic-1548402588-width1920-quality80.jpeg';

const Jumbotron = () => (
  <body
    className="jumbotron-container"
    style={{
      backgroundColor: '#141414',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: '100%'
  }}>
  </body>
);

export { Jumbotron };
