import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import MakeupContainer from '../MakeupContainer/MakeupContainer';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Nav className="nav-main" />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage className="main" onLoad={window.scrollTo(0, 0)} />
          )}
        />
        <Route
          exact
          path="/categories/:id"
          render={({ match }) => (
            <MakeupContainer
              className="main"
              id={match.params.id}
              onLoad={window.scrollTo(0, 0)}
            />
          )}
        />
        {/* <Route render={() => <NotFound />} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
