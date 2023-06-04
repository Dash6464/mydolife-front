//Boostrap
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';

//core
import 'primereact/resources/primereact.min.css';

import './style.css';
import Navbar from './componets/Navbar';
import Title from './componets/Title';
import Icon from './componets/Icon';
import Aboutus from './componets/Aboutus';
import Content from './componets/Content';
import Mainteam from './componets/Mainteam';
import Contact from './componets/Contact';

function App() {
  return (
    <div className="App">
      <div style={{ position: 'sticky', top: 0, zIndex: 11 }} id="inicio">
        <Navbar />
      </div>
      <div id="title" style={{ zIndex: 10 }}>
        <Title />
      </div>
      <Icon />
      <div
        className="container d-flex flex justify-content-center"
        style={{
          marginTop: 60,
          marginBottom: 180
        }}
        id="nosotros"
      >
        <Aboutus />
      </div>
      <div
        className="container d-flex flex justify-content-center"
        style={{
          marginTop: 60,
          marginBottom: 180
        }}
      >
        <Content />
      </div>
      <div id="equipo">
        <Mainteam />
      </div>
      <div id="contacto">
        <Contact />
      </div>
    </div>
  );
}

export default App;
