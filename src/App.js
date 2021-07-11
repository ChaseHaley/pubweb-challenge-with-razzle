import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;