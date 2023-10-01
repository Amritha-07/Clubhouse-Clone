import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllowNotification from './pages/AllowNotification';
import CodeConfirmation from './pages/CodeConfirmation';
import Home from './pages/Home';
import AppLayout from './pages/Layouts/AppLayout';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Activity from './pages/Activity';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <Router>
        <PlanLayout>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/invite' element={<PhoneConfirmation />} />
          <Route path='/code_confirm' element={<CodeConfirmation />} />
          <Route path='/allow_notification' element={<AllowNotification />} />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/upcoming' element={<Upcoming />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
