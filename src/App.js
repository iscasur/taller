import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/home';
import Cc from './pages/cc';
import Dass from './pages/dass';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dass' component={Dass} />
          <Route path='/cc' component={Cc} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
