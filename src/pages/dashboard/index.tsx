import DashboardHome from "@/components/dashboard/home";
import DashboardLayout from "@/components/shared/layouts/dashboard-layout";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardHomePage() {
	const navigate = useNavigate();
	onAuthStateChanged(auth, (user) => {
		if (!user) {
			navigate("/login");
		}
	});
	return (
		<DashboardLayout>
			<DashboardHome />
		</DashboardLayout>
	);
}
