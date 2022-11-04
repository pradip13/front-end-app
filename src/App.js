// import NavBar from './component/NavBar';
import RouteList from './routes';

import HeaderTemplate from './template/header';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <HeaderTemplate />
      <RouteList />
    </div>
  );
}

export default App;
