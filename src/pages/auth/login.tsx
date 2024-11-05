import Login from "@/components/authentication/login";
import AuthLayout from "@/components/shared/layouts/auth-layout";

export default function LoginPage() {
	return (
		<AuthLayout>
			<Login />
		</AuthLayout>
	);
}
