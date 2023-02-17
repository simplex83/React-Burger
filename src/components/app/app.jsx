import React from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { getIngredients } from "../../services/actions/ingredients";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Main,
  LoginPage,
  RegisterPage,
  ForgotPage,
  ResetPage,
  ErrorPage,
  ProfilePage,
  PersonalPage,
  IngredientPage,
} from "../../pages";
import { ProtectedRouteElement } from "../../components/protect";
import { getUserInfo } from "../../services/actions/authorization";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { getCookie } from "../../utils/cookies";

export function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  

  useEffect(() => {
    if (getCookie('accessToken')) dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${styles.container}`}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <ProtectedRouteElement element={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteElement element={<RegisterPage />} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRouteElement element={<ForgotPage />} />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRouteElement element={<ResetPage />} />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement  element={<ProfilePage />} />
          }
        >
          <Route path="" element={<PersonalPage />} />
          {/* <Route path="/orders" element={<OrderPage />}/> */}
        </Route>
        <Route path="/*" element={<ErrorPage />} />
        <Route path={`/ingredients/:id`} element={<IngredientPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal closePopup={() => window.history.back()}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}
export default App;
