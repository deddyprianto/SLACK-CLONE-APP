import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import Chat from "./components/Chat";
const App = () => {
  const roomID = useSelector((state) => state.appGlobal.roomId);
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
