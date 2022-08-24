import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* exact where path cannot be altered and output same page */}
          <Route path="/books" element={<Books books={books} />} />
          {/* send props to route */}
          <Route path="/books/:id" element={<BookInfo books={books} />} />
          <Route path="/cart" element={<Cart books={books}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
