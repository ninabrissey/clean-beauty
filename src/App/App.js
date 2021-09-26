import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MakeupContainer from '../MakeupContainer/MakeupContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        {/* <Route
          exact
          path="/"
          render={() => <HomePage onLoad={window.scrollTo(0, 0)} />} */}
        {/* /> */}
        <Route
          exact
          path="/categories/:id"
          render={({ match }) => (
            <MakeupContainer
              id={match.params.id}
              onLoad={window.scrollTo(0, 0)}
            />
          )}
        />
        {/* <Route render={() => <NotFound />} /> */}
      </Switch>
    </div>
  );
};

export default App;
