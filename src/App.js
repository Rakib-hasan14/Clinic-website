import './App.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AuthProvider from './components/Home/hooks/AuthContext';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Switch>

         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <PrivateRoute path="/contact">
            <Contact></Contact>   
         </PrivateRoute>
         <PrivateRoute path="/testimonials">
            <Testimonials></Testimonials> 
         </PrivateRoute>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/registration">
            <Register></Register>
         </Route>
         <PrivateRoute path="/details/:dataId">
            <Details></Details>
         </PrivateRoute>
         
         <Route path="*">
            <NotFound></NotFound>
         </Route>

       </Switch>
       <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
