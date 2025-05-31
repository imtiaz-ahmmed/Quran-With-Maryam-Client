import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Features from "../Pages/Features/Features";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";

import SurahList from "../Pages/Quran/SurahList";
import SurahDetails from "../Pages/Quran/SurahDetails";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import SingleInstructorDetails from "../Pages/SingleInstructorDetails/SingleInstructorDetails";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./privateRoute";
import StudentDashboard from "../Pages/Dashboard/Student/StudentDashboard/StudentDashboard";
import MySelectedClasses from "../Pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import MyPaymentHistory from "../Pages/Dashboard/Student/MyPaymentHistory/MyPaymentHistory";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import InstructorDashboard from "../Pages/Dashboard/Instructor/InstructorDashboard/InstructorDashboard";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import InstructorRoute from "./InstructorRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/quran",
        element: <SurahList></SurahList>,
      },

      {
        path: "/all-instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "/all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/all-instructors/instructor/:instructorName",
        element: <SingleInstructorDetails></SingleInstructorDetails>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/surah/:surahNumber",
        element: <SurahDetails></SurahDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/student",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "/dashboard/student/my-selected-classes",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "/dashboard/student/my-enrolled-classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "/dashboard/my-payment-history",
        element: <MyPaymentHistory></MyPaymentHistory>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/instructor",
        element: (
          <InstructorRoute>
            <InstructorDashboard></InstructorDashboard>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/instructor/add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/instructor/my-class",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
    ],
  },
]);
