
import './App.css';
import Home from './components/Home/Home';
import Todos from './components/Todos/Todos';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';
import Comments from './components/Comments/Comments';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="todos" element={<Todos />} />
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;