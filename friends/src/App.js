import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/loginpage";
import PrivateRoute from "./components/PrivateRoute";
import FriendPage from "./components/friendPage";
import PublicPage from "./components/publicpage/publicPage";

function App() {
  return (
    <Router>
      <Route path="/" component={PublicPage} />
      <PrivateRoute exact path="/friendsPage" component={FriendPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
