import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import {HashRouter,Route,Switch}  from 'react-router-dom'  ;
import Notfound from './Components/Notfound';

function App() {
  return (
    
    <HashRouter basename={process.env.PUBLIC_URL}>
     <Navbar/>
     <Switch>
     <Route  path={process.env.PUBLIC_URL + '/'} component={Home}/>
     <Route exact path="/all" component={AllUsers}/>
     <Route exact path="/add" component={AddUsers}/>
     <Route exact path="/edit/:id" component={EditUser} />
     <Route component={Notfound} />
     
     </Switch>
     </HashRouter>
    
  )
}


export default App;
