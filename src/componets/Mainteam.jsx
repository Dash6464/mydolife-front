import React, { useState, useEffect } from 'react';

import { Carousel } from 'primereact/carousel';

//core
import 'primereact/resources/primereact.min.css';

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
    fetch("./helpers/smash.json")
    .then(response => response.json())
    .then(datos => setMembers(datos.smash64))
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
      <div>
        <img src="images/Colina/image 1.png" alt="Colinas" id='colina1'/>
        <img src='images/Colina/image 2.png' alt='Colinas' id='colina2'/>
        <img src="images/Colina/image 3.png" alt="Colinas" id='colina3'/>
        <img src="images/Colina/image 4.png" alt="Colinas" id='colina4'/>
        <img src="images/Colina/image 5.png" alt="Colinas" id='colina5'/>
        <img src="images/Colina/image 6.png" alt="Colinas" id='colina6'/>
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
