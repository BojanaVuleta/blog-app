import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AppPosts from "./components/AppPosts";
import SinglePost from "./components/SinglePost";
import AddPost from "./components/AddPost";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<AppPosts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/add" element={<AddPost/>}/>
        <Route path="/posts/edit/:id" element={<AddPost/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
