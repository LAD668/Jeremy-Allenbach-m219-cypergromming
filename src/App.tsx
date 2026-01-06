import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CyberGrooming } from './pages/CyberGrooming';
import { Protection } from './pages/Protection';
import { LearningArea } from './pages/LearningArea';
import { GetHelp } from './pages/GetHelp';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cyber-grooming" element={<CyberGrooming />} />
        <Route path="/protection" element={<Protection />} />
        <Route path="/learning-area" element={<LearningArea />} />
        <Route path="/get-help" element={<GetHelp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
