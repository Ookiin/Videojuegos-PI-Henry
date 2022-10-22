import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import HomePage from '../components/HomePage/HomePage'
import AddVideogame from '../components/AddVideogame/AddVideogame'
import VideoGameDetails from '../components/VideoGameDetails/VideoGameDetails'
import Page404 from '../components/404Error/404error';
 
function App() {
  return (
    <BrowserRouter> 
      <div className='App'>
        <Switch>
          <Route exact path = '/' component = {LandingPage} />
          <Route exact path = '/videogame' component = {AddVideogame} />
          <Route exact path = '/videogame/:id' component = {VideoGameDetails} />
          <Route exact path = '/videogames' component = {HomePage} />
          <Route path='*' component={Page404} />
        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;
