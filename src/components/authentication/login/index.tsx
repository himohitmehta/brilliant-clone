import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthButtons from "../social-auth-buttons";
import AuthSeparator from "@/components/shared/auth-separator";

export default function Login() {
	const navigate = useNavigate();
	const handleLogin = () => {
		console.log("login");
		navigate("/home");
	};
	return (
		<div>
			<div className="flex flex-col  gap-4">
				<h1 className="text-3xl font-bold text-center">
					Login to your account
				</h1>
				<div>
					<SocialAuthButtons />
				</div>
				<div>
					<AuthSeparator />
				</div>
				<div>
					<form className="flex flex-col gap-4">
						<Input placeholder="Email" />
						<Input placeholder="Password" />
						<Button onClick={handleLogin}>Login</Button>
					</form>
				</div>

				<div className="text-xs text-muted-foreground font-medium text-center  [&>span]:cursor-pointer [&>span]:underline">
					{/* by signing up message */}
					By clicking above, I agree to Brilliant's <span>Terms</span>
					, and <span>Privacy Policy</span>
				</div>
				<div className="text-center font-medium text-muted-foreground">
					{/* existing  user? */}
					Don't have an account?{" "}
					<Link
						to="/register"
						className="font-semibold text-foreground underline-offset-8 underline"
					>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
}
