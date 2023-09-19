import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Tidy" deadline="Today" description="Empty bin basket" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" />
    </div>
  );
}

export default App;