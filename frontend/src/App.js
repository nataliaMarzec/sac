import React, { Component } from 'react';
import { HashRouter,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Usuarios from './views/Usuarios/Usuarios';
// import Clientes from './views/Clientes/Clientes'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const Clientes = React.lazy(() => import('./views/Clientes/Clientes'));


// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {
//nuevo agregado Router
  render() {
    return (
     <HashRouter>
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              {/* <Route path="/usuarios"  Component={Usuarios}></Route> */}
              {/* <Route path="/clientes" name="Clientes" component={Clientes} render={props => <ClienteForm {...props}/>} /> */}
              {/* <Route path="/clienteForm" name="ClienteForm" component={ClienteForm} render={props => <Clientes {...props}/>} /> */}
            </Switch>


          </React.Suspense>
       </Router>
     </HashRouter>
    );
  }
}



// function UsuariosComponent() {
//   return (<Usuarios entity="Usuario" name="Usuarios"/>)
// }

export default App;
