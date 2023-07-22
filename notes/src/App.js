import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Home.js';
import Blog from './Blog.js';
import NotesList from './pages/notes/list';
import AddNotes from './pages/notes/add';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} >    </Route>    
        <Route path="/blogs" element={<Blog />}>       </Route>
        <Route path='/notes' element={<NotesList />} >    </Route>    
        <Route path="/addnote" element={<AddNotes />}>       </Route>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
