import Header from './components/nav/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            {/* <Route path="/color" element={<Color />}></Route> */}
            {/* <Route path="/contact" element={<Contact ?.}></Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
