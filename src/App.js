import './App.css';
import AllowNotification from './pages/AllowNotification';
import CodeConfirmation from './pages/CodeConfirmation';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path='/code_confirm' element={<CodeConfirmation />} />
          <Route path='/allow_notification' element={<AllowNotification />} />
        </Routes>
      </PlanLayout>
    </Router>
  );
}

export default App;
