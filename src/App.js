import './App.css';
import { HashRouter as Router, Link, Route, Routes,} from 'react-router-dom';
import Home from './Components/Home/Home';
import ListExpenses from './Components/List Expenses/ListExpenses';
import NewExpense from './Components/New Expense/NewExpense';

function App() {
  return (
    <div className="App">
        <h1>Expense Tracker</h1>
          <Router>
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/new">New Expense</Link> </li>
              <li> <Link to="/list">List Expenses</Link> </li>
            </ul>    
                <Routes>                    
                    <Route path ="/new" component={NewExpense}/>
                    <Route exact path ="/list" component={ListExpenses}/> 
                    <Route path ="/list:id" component={ListExpenses}/>
                    <Route component={Home}/>
                </Routes>    
          </Router>
    </div>
  );
}

export default App;
