import Login from "@/components/authentication/login";
import AuthLayout from "@/components/shared/layouts/auth-layout";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const navigate = useNavigate();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			navigate("/home");
		}
	});
	return (
		<AuthLayout>
			<Login />
		</AuthLayout>
	);
}
