import {
    BrowserRouter as Router,
    Routes, Route
} from 'react-router-dom'

import Portfolio from './app-portfolio/Portfolio';
import Jor from './app-jor/Jor';
import Invest from './app-invest/Invest';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Portfolio/>} />
                    <Route path='/jor' element={<Jor/>} />
                    <Route path='/invest' element={<Invest/>} />  
                </Routes>
            </Router>
        </>
    );
};

export default App;