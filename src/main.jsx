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
import Hire from './Components/Hire/Hire.jsx';
import LoginForm from './Components/Login/LoginForm.jsx';

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
      // {
      //   path: "/allLawyer",
      //   Component: allLawyer
      // },
      {
        path: "/legalservice",
        Component: LegalService
      },
      {
        loader: () => fetch("./LawyerDetails.json"),
        path: "/allLawyer",
        Component: allLawyer
      },
      {
        path: "/lawyerProfile",
        Component: LawyerProfile
      },
      {
        path: "/hire",
        Component: Hire
      },
      {
        path: "/LoginForm",
        Component: LoginForm
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
