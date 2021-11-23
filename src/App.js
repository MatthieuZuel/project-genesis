import { ContactPage, Home, PageNotFound } from './Pages';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={ <ContactPage /> } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
