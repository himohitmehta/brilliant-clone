import Login from "@/components/authentication/login";
import AuthLayout from "@/components/shared/layouts/auth-layout";

export default function LoginPage() {
	return (
		<AuthLayout>
			Login form
			<div>
				{/* left side image */}
				<div>Image will be added here</div>
				{/* right side content with form */}
				<div>
					the form content will be added here
					<Login />
				</div>
			</div>
		</AuthLayout>
	);
}
