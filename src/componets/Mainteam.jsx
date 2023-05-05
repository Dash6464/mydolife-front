import React, {useState , useEffect} from 'react'

import { Carousel } from 'primereact/carousel';

//core
import 'primereact/resources/primereact.min.css';

import { Avatar } from 'primereact/avatar';

const Mainteam = () => {
const [members, setMembers] = useState([]);
    const responsiveOptions = [
    {
      breakpoint: "1081px",
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: "720px",
      numVisible: 1,
      numScroll: 1
    }
  ];

  const url = "https://pokeapi.co/api/v2/pokemon?limit=22";

  const obtenerPokemons2 = async() =>{
    const respuesta = await fetch(url)

    const json = await respuesta.json()

    let extraDatos = []

    for (let index = 0; index < json.results.length; index++) {
      const respuesta2 = (await fetch(json.results[index].url));

      const json2 = (await respuesta2.json())

      extraDatos.push(json2)

    }
    setMembers(extraDatos)

    
  }

    useEffect(() => {
        obtenerPokemons2()
    }, []);

    const Membersteam = (members) => {
        return (
            <div className='text-center'>
              <Avatar
                style={
                {
                width: 281,
                height: 281,
                backgroundColor: "#FFF"
                }
              }
              shape="circle" 
              image={members.sprites.front_default}
              />
              <h2 className='text-center' style={{ color: "#2F4944", fontSize: 40 }}>{members.name}</h2>
              <p className='text-center' style={{ color: "#FFF", fontSize: 36}}>{members.types[0].type.name}</p>
            </div>
        );
    };

    return (
        <div className="card">
          <Carousel
            value={members}
            numVisible={3} 
            numScroll={1} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={Membersteam}
            style={{ backgroundColor: "#6ACC53" }}
            showIndicators={false}
            />
        </div>
    )
}

export default Mainteam