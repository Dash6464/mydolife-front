import React from 'react';

import { Avatar } from 'primereact/avatar';

const Aboutus = () => {

  return (
    <div className="row d-flex flex-xl-row-reverse" style={{marginTop: 160}}>
      <div className="col-md-12 col-xl-4 text-center text-xl-start">
        <Avatar
          style={{
            width: 281,
            height: 281,
            backgroundColor: '#DFDFD',
            marginTop: 25
          }}
          shape="circle"
          // image={members.sprites.front_default}
        />
      </div>
      <div className="col-md-12 col-xl-8 text-center text-xl-start">
        <h1
          className='titulo'
        >
          Acerca de nosotros
        </h1>
        <div className='separador'></div>
        <p className='info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a className='btn btn-outline-primary btn-bd-primary' href="index.html">
          Descubre más
        </a>
      </div>
      
    </div>
  );
};

export default Aboutus;
