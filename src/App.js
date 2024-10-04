import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CreateProject from "./components/task1/CreateProject";
import CreateAccount from "./components/task2/CreateAccount";
import { Button } from "antd";
function App() {
  return (
    <Router>
      <div className="bg-[#F9F9F9] h-screen flex items-center justify-center">
        <Routes>
          {/* Redirect the root URL ("/") to "/create-project" */}
          <Route path="/" element={<Navigate to="/create-project" replace />} />

          {/* CreateProject component route */}
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
