import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Master1_1 from './Components/Master1/Master1_1';
import Master1_2 from './Components/Master1/Master1_2';
import Master2 from './Components/Master2/Master2'
import Master3 from './Components/Master3/Master3'
function App() {
  return (
     <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route exact path="/master1_1/:product/:organisation" component={Master1_1} />
       <Route exact path="/master1_2" component={Master1_2} />
       <Route exact path="/master2" component={Master2} />
       <Route exact path="/master3" component={Master3} />
     </BrowserRouter>
  );
}

export default App;
