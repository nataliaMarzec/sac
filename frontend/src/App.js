import React from 'react';
// import logoGira from './logoGira.svg';
import './App.css';
// import Sac from './Sac'
import Home from './componentes/Home';
import Clientes from './componentes/Clientes';
import {BrowserRouter as Router, Route,Switch, Redirect
} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

// https://reacttraining.com/react-router/web/guides/philosophy

      
function App() {
  return (
    <div className="App"  >
    <Router>
    
      {/* <Navbar className="App-navbar" collapseOnSelect expand="lg" bg="" variant="light">   */}
  <Navbar className="App-collapseOnSelect" >   
  <Navbar.Brand href="#home" style={{color:'white'}}>SAC</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="App-header">
      <Nav.Link href="#features">Caja</Nav.Link>
      <NavDropdown title="Cliente" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="registrar/cliente.nombre">formulario</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title="Proveedor" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#registrar/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
    </Nav>
 
  </Navbar.Collapse>
  <Nav>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> 
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </Nav>
 
 
</Navbar>

       

        {/* <img src={logoGira} className="App-logoGira" alt="logoGira" />
        <p>codice zingaro: <code>Sac.js</code> aggirando il codice ...</p>
        <a src={'./Sac'} className="Sac-link" href="./Sac.js" content="0;URL=Sac.js" onclick="alert('Un mensaje de prueba')">
          Development "link" App-Sac </a> */}
     
      

      <main className="App-main">
        <Switch>
            <Route path="/" exact components={HomeComponent} />
            <Route path="/clientes"  components={ClientesComponent} />
            
            
            
            <Redirect to="/" />
        </Switch>
      </main>
    </Router>  

        
    
      <body>
        {/* <h1 className="App-body" >Code for generic integrations</h1> */}
      </body>
    </div>
  );
}


function HomeComponent(){
 return(<Home entity="home"/>)
}

function ClientesComponent(){
  return (<Clientes entity="clientes"/>)
}

 









export default App;






