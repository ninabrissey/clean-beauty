import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchData } from '../apiCalls';
import Nav from '../Nav/Nav';
import './App.css';

const App = () => {
  const [eyes, setEyes] = useState([]);
  const [face, setFace] = useState([]);
  const [lips, setLips] = useState([]);
  const [cheeks, setCheeks] = useState([]);
  const [nails, setNails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const handleClick = () => {};

  const getData = (path) => {
    try {
      fetchData(path);
    } catch {
      setError(error.message);
    }
  };

  return (
    <div className="app">
      <Switch>
        <Nav />
        <Route to="/">
          <HomePage />
        </Route>
        <Route to="/:id">
          <MakeupContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
