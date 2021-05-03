import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import BlogPageOne from "./pages/BlogPageOne";
import BlogPageTwo from "./pages/BlogPageTwo";
import BlogPageThree from "./pages/BlogPageThree";
import SPA from './components/SPA';


function App() {
  return (
      <Router>
          <div className="App">
            <Route path="/" component={SPA} exact/>
            <Route path="/minews" component={BlogPageOne}/>
            <Route path="/munchies" component={BlogPageTwo}/>
            <Route path="/accell" component={BlogPageThree}/>
          </div>
      </Router>
  );
}

export default App;
