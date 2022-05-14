import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from "./Components/Auth"
import Blogs from "./Components/Blogs"
import UserBlogs from "./Components/UserBlogs"
import BlogDetail from "./Components/BlogDetail"
import AddBlog from "./Components/AddBlog"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store";

function App() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispath(authActions.login())
    }
  }, [dispath]);
  return (
    <div>

      <Router>
        <Header />
        <div>
          <Routes>
            {!isLoggedIn ? (
              <Route exact path="/auth" element={<Auth />} />
            ) : (
              <>
                <Route exact path="/blogs" element={<Blogs />} />
                <Route exact path="/blogs/add" element={<AddBlog />} />
                <Route exact path="/myBlogs" element={<UserBlogs />} />
                <Route exact path="/myBlogs/:id" element={<BlogDetail />} />
              </>)
            }
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
