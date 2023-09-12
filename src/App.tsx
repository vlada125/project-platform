// Dependencies
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import HomePage from "./pages/main/Home";
import TasksPage from "./pages/main/Tasks";
import ProjectsPage from "./pages/main/Projects";
import LoginPage from "./pages/auth/Login";
import SignUpPage from "./pages/auth/SignUp";
import { currentUser } from "./utils/currentuser";
import Files from "./pages/main/Files/index";

import { VerificationDonePage } from "./pages/main/VerificationDonePage/VerificationDonePage";
// Routes
import * as ROUTES from "./constants/routes";

// Export App
const App = () => {
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const fetch = useCallback(async () => {
    const user = await currentUser(token);
    setIsLoggedIn(user);
  }, []);

  useEffect(() => {
    fetch();
  }, []);
  if (isLoggedIn != null) {
    return (
      <div className="App h-screen overflow-x-hidden">
        <BrowserRouter>
          <Provider store={store}>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.FILES} element={<Files />} />
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
              <Route path={ROUTES.TASKS} element={<TasksPage />} />
              <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />

              <Route
                path={ROUTES.VERIFICATION_DONE}
                element={<VerificationDonePage />}
              />
            </Routes>
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
  return null;
};

export default App;
