import Container from './components/Container/Container';
import NavLink from './components/NavLinks/NavLinks';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import List from './components/List/List';

const App = () => {
  return (
    <main>
      <NavLink />
      <Container>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/list/:listId" element={<List />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Container>
    </main>
    
  );
};

export default App;