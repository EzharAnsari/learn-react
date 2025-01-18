import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListContextProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListContextProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Headers></Headers>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footers></Footers>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
