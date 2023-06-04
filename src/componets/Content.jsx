import React from 'react'

const Content = () => {
  return (
    <div className="row" style={{ marginTop: 100}}>
      <div className="col-md-12 col-xl-4 text-center text-xl-start">
        <img src='./images/Kowie 1.png' alt="Kowie"/>
      </div>
      <div className="col-md-12 col-xl-8 text-center text-xl-start" style={{
        marginTop: 75,
      }}>
        <h1
          className='titulo'
        >
          Creamos contenido
        </h1>
        <div className='separador'></div>
        <p className='info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      
    </div>
  )
}

export default Content