import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthButtons from "../social-auth-buttons";

export default function Login() {
	const navigate = useNavigate();
	const handleLogin = () => {
		console.log("login");
		navigate("/home");
	};
	return (
		<div>
			<div className="flex flex-col  gap-4">
				<h1>Title</h1>
				<div>
					<SocialAuthButtons />
				</div>
				<div>
					{/* Separator */}
					----- OR -----
				</div>
				<div>
					<form className="flex flex-col gap-4">
						<Input placeholder="Email" />
						<Input placeholder="Password" />
						<Button onClick={handleLogin}>Login</Button>
					</form>
				</div>
				<div>
					{/* by signing up message */}
					By signing up, you agree to our Terms, Data Policy and
					Cookies Policy.
				</div>
				<div>
					{/* existing  user? */}
					Don't have an account? <Link to="/Register">Register</Link>
				</div>
			</div>
		</div>
	);
}
