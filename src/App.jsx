// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./features/auth/LoginForm";
import ProjectList from "./features/projects/ProjectList";
import TaskBoard from "./features/tasks/TaskBoard";
import CommentBox from "./features/comments/CommentBox";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <div className="container">
                  <h1>خانه</h1>
                  <ProjectList />
                  <TaskBoard />
                  <CommentBox />
                </div>
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
