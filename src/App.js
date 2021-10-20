import './App.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import DataContext from './components/Home/hooks/AuthContext';
import AuthProvider from './components/Home/hooks/AuthContext';
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Switch>
         <Route excat path="/">
            <Home></Home>
         </Route>
       </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
