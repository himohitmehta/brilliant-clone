import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/login";
import WebsiteLandingPage from "./pages/website";
import DashboardHomePage from "./pages/dashboard";
import RegisterPage from "./pages/auth/register";
import DashboardCoursesPage from "./pages/dashboard/courses";
import { NuqsAdapter } from "nuqs/adapters/react-router";
import { Toaster } from "./components/ui/sonner";
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
	return (
		<NuqsAdapter>
			<Toaster />
			<RouterProvider router={router} />
		</NuqsAdapter>
	);
}

export default App;
