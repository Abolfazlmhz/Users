// src/App.jsx
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
import AuthWrapper from "./features/auth/AuthWrapper";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/"
          element={
            <AuthWrapper>
              <div className="container">
                <h1>خانه</h1>
                <ProjectList />
                <TaskBoard />
                <CommentBox />
              </div>
            </AuthWrapper>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
