import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Setting from './components/Setting';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import User from './components/User';

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <Navigation />
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path='*' element={<NotFound />}></Route>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/user/:UserId' element={<User />} />
            </Routes>
        </div>
    );
}

export default App;
