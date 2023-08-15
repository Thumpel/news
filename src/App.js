import React from "react";
import AddPosts from "./pages/AddPosts";
import PostList from "./pages/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AddPosts />} />
          <Route path="/read_post"element={<PostList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
