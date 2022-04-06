import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home/Home.page';
import PersonsPage from './pages/Persons/Persons.page';

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='persons' element={<PersonsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}