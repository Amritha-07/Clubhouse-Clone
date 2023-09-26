import './App.css';
import AllowNotification from './pages/AllowNotification';
import CodeConfirmation from './pages/CodeConfirmation';
import Home from './pages/Home';
import AppLayout from './pages/Layouts/AppLayout';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <PlanLayout>
        <Routes>
          <Route path="/" Component={Welcome}  />
          <Route path="/invite" Component={PhoneConfirmation} />
          <Route path='/code_confirm' Component={CodeConfirmation} />
          <Route path='/allow_notification' Component={AllowNotification} />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route path='/home' Component={Home} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
