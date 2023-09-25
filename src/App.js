import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <PlanLayout>
        <Welcome />
      </PlanLayout>
    </Router>
  );
}

export default App;
