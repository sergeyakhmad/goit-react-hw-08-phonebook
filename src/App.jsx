import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authSelectors } from 'redux/auth';

const HomeView = lazy(() => import('views/HomeView/HomeView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
