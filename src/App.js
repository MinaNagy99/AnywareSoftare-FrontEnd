import "./App.css";
import DashbourdComponent from "./components/pages/DashbourdComponent/DashbourdComponent.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent/LayoutComponent.jsx";
import AnnouncementComponent from "./components/pages/AnnouncementComponent/AnnouncementComponent.jsx";
import FirstLayoutComponent from "./components/FirstLayoutComponent/FirstLayoutComponent.jsx";
import { LoginComponent } from "./components/pages/LoginComponent/LoginComponet.jsx";
import RegisterComponent from "./components/pages/RegisterComponent/RegisterComponent.jsx";
import ProtectedRouteComponent from "./components/ProtectedRoute/ProtectedRouteComponent.js";
import NotFoundComponent from "./components/pages/NotfoundComponent/NotFoundComponent.jsx";
function App() {
  let route = createBrowserRouter([
    {
      path: "/",
      element: <FirstLayoutComponent />,
      children: [
        { index: true, element: <LoginComponent /> },
        { path: "/register", element: <RegisterComponent /> },
        {
          path: "/home",
          element: (
            <ProtectedRouteComponent>
              <LayoutComponent />
            </ProtectedRouteComponent>
          ),
          children: [
            { path: "dashboard", element: <DashbourdComponent /> },
            { path: "announcement", element: <AnnouncementComponent /> },
            {path:'*',element:<NotFoundComponent/>}
          ]
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
