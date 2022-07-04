import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PrivateRoute } from '@/routes/PrivateRoute'
import GlobalStyle from './styles/GlobalStyle'
import { GlobalModal } from './components'

const RegisterPage = lazy(() => import('./pages/RegisterPage'))

const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <GlobalModal />
      <Routes>
        <Route path="/*" element={<Navigate replace to="/kayit" />} />
        <Route path="/kayit" element={<RegisterPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>

      <ToastContainer />
    </Suspense>
  )
}

export default App
