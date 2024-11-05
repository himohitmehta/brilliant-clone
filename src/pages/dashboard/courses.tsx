import Courses from "@/components/dashboard/courses";
import DashboardLayout from "@/components/shared/layouts/dashboard-layout";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardCoursesPage() {
	const navigate = useNavigate();
	onAuthStateChanged(auth, (user) => {
		if (!user) {
			navigate("/login");
		}
	});

	return (
		<DashboardLayout>
			<Courses />
		</DashboardLayout>
	);
}
