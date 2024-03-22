import logo from './logo.svg';
import './App.css';
import BookPage from './component/Book/Book Page/BookPage';
import StudentPage from './component/Student/StudentPage/StudentPage';

function App() {
  return (
   <>
    <div className="navigation">
      <ul>
        <li><a href="#">Student</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Transaction</a></li>
      </ul>
    </div>
    <StudentPage/>
    <BookPage/>
   </>
  );
}

export default App;
