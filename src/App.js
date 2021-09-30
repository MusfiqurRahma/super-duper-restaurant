import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Details from './components/Deatails/Details';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path='/header/restaurant'>
          <Header></Header>
          </Route>
          <Route exact path='/restaurant/:restaurantId'>
           <Details></Details>
          </Route>
          <Route exact path='/home'>
          <Restaurant></Restaurant>
          </Route>
          <Route exact path='/about'>
          <About></About>
          </Route>
          <Route path='/about/contact'>
          <Contact></Contact>
          </Route>
          <Route path ='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
