import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
import Admin from "./pages/admin/Admin";
import AddCat from "./pages/admin/category/AddCat";
import AllCat from "./pages/admin/category/AllCat";
import EditCat from "./pages/admin/category/EditCat";
import AddPost from "./pages/admin/post/AddPost";
import EditPost from "./pages/admin/post/EditPost";
import Posts from "./pages/admin/post/Posts";
import AddTag from "./pages/admin/tag/AddTag";
import AllTag from "./pages/admin/tag/AllTag";
import EditTag from "./pages/admin/tag/EditTag";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import "./styles.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route
          path="/admin"
          element={
            <RouteGuard>
              <Admin />
            </RouteGuard>
          }
        >
          <Route path="cats">
            <Route path="all" element={<AllCat />} />
            <Route path="add" element={<AddCat />} />
            <Route path="edit/:id" element={<EditCat />} />
          </Route>
          <Route path="tags">
            <Route path="all" element={<AllTag />} />
            <Route path="add" element={<AddTag />} />
            <Route path="edit/:id" element={<EditTag />} />
          </Route>
          <Route path="posts">
            <Route path="all" element={<Posts />} />
            <Route path="add" element={<AddPost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
