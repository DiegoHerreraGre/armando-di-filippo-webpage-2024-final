import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Books from './components/Books';
import NavBar from './components/NavBar';
import GeneralFooter from './components/GeneralFooter';
import BooksId from './components/BookId';
import {Contact} from './components/Contact';
import BlogEntry from './components/BlogEntry';
import Auth from './components/Auth';
import './App.css';
import Repository from './components/Repository';
/**
 * The App component serves as the root component of the application.
 * It sets up the router and defines the routes for the application.
 * It also includes the NavBar, hero section, and GeneralFooter components.
 *
 * @returns {JSX.Element} The main application component.
 */
function App()  {
    return (
        <>
            <Router>
                <NavBar/>
                <div id='hero-init'>
                    <h1>Armando Di Filippo</h1>
                    <div id='h5-title'>
                        <h5>Mirando desde una perspectiva histórico-estructural la economía</h5>
                    </div>
                    <img src='' alt=''/>
                </div>
                <Routes>
                    <Route index path="/" element={<Home/>}/>
                    <Route path="/books/" element={<Books/>}/>
                    <Route path="/books/:id" element={<BooksId/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/repository" element={<Repository/>}/>
                    <Route path="/blog" element={<BlogEntry/>}/>
                    <Route path="/blog/:id" element={<BlogEntry/>}/>
                </Routes>
                <GeneralFooter/>
            </Router>
        </>
    );
}
// Export the App component as the default export.
export default App;