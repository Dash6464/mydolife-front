//Boostrap
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';

//core
import 'primereact/resources/primereact.min.css';

import './style.css';

import Mainteam from './componets/Mainteam';

function App() {
  return (
    <div className="App">
      <h1>¿Quienes somos?</h1>
      <Mainteam />
    </div>
  );
}

export default App;
