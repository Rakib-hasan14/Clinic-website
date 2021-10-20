import './App.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AuthProvider from './components/Home/hooks/AuthContext';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Switch>
         
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/contact">
            <Contact></Contact>   
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/registration">
            <Register></Register>
         </Route>
         <Route excat path="/">
            <Home></Home>
         </Route>

       </Switch>
       <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
