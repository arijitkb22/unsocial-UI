import { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import FollowersPreview from "./components/FollowersPreview";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import ForYou from "./components/ForYou";
import PostListProvider from "./store/post-list-store";
import SuggestionProvider from "./store/suggestion-post-store";
import { AuthContext, AuthProvider, useAuth } from "./store/auth-store";
import LoginPage from "./components/LoginPage";

function App() {
  const [count, setCount] = useState(0);
  const { isLoggedIn } = useAuth();


  return (
    <PostListProvider>
      {isLoggedIn? (
        <>
          <Header />
          <div className="content">
            <div className="left-section">
              <UserProfile />
              <FollowersPreview />
            </div>
            <center className="mid-section">
              <CreatePost />
              <PostList />
            </center>
            <div className="right-section">
              <SuggestionProvider>
                <ForYou />
              </SuggestionProvider>
            </div>
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </PostListProvider>
  );
}

export default App;
