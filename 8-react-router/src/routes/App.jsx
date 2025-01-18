import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import SideBar from "../components/SideBar";
import PostListContextProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListContextProvider>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Headers></Headers>
          <Outlet />
          <Footers></Footers>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
