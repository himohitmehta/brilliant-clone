import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/login";
import WebsiteLandingPage from "./pages/website";
import DashboardHomePage from "./pages/dashboard";
import RegisterPage from "./pages/auth/register";
import DashboardCoursesPage from "./pages/dashboard/courses";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/home",
		element: <DashboardHomePage />,
	},
	{
		path: "/courses",
		element: <DashboardCoursesPage />,
	},
	{
		path: "/",
		element: <WebsiteLandingPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
