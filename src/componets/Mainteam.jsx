import React, { useState, useEffect } from 'react';

import { Carousel } from 'primereact/carousel';

//core
import 'primereact/resources/primereact.min.css';

import Lottie from "lottie-react";
import * as animacion from './../lottie/montaña.json';

import { Avatar } from 'primereact/avatar';

const Mainteam = () => {
  const [members, setMembers] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: '1081px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '720px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const getMembers = () => {
    fetch('./helpers/smash.json')
      .then((response) => response.json())
      .then((datos) => setMembers(datos.smash64));
  };

  useEffect(() => {
    getMembers();
  }, []);

  const membersTeam = (members) => {
    return (
      <div className="text-center">
        <Avatar
          style={{
            width: 281,
            height: 281,
            backgroundColor: '#FFF'
          }}
          shape="circle"
          // image={members.sprites.front_default}
        />
        <h2 className="text-center" style={{ color: '#2F4944', fontSize: 40 }}>
          {members.nombre}
        </h2>
        <p className="text-center" style={{ color: '#FFF', fontSize: 36 }}>
          {members.arquetipo1}
        </p>
      </div>
    );
  };

  return (
    <div className="card">
      <div style={{ zIndex: 10 }}>
        <Lottie animationData={animacion} loop={true} autoPlay={true} />
      </div>
      <Carousel
        value={members}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={membersTeam}
        style={{ backgroundColor: '#6ACC53' }}
        showIndicators={false}
        circular={true}
      />
    </div>
  );
};

export default Mainteam;
