import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import FindLawyer from './Components/FindLawyer/FindLawyer.jsx';
import LegalService from './Components/LegalService/LegalService.jsx';
import allLawyer from './Components/allLawyer/allLawyer.jsx';
import LawyerProfile from './Components/LawyerProfile/LawyerProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/findlawyer",
        Component: FindLawyer
      },
      {
        path: "/legalservice",
        Component: LegalService
      },
      {
        path: "/allLawyer",
        Component: allLawyer
      },
      {
        path: "/lawyerProfile",
        Component: LawyerProfile
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
