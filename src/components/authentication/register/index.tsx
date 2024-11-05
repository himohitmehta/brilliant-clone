import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import SocialAuthButtons from "../social-auth-buttons";

export default function Register() {
	return (
		<div>
			<div className="flex flex-col gap-4 flex-grow">
				<h1>Title</h1>
				<div className="flex-grow flex-1">
					{/* Social login with google and facebook buttons */}
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
						<div className="flex gap-4">
							<Input placeholder="First name" />
							<Input placeholder="Last name" />
						</div>
						<Input placeholder="Age" />
						<Button>Register</Button>
					</form>
				</div>
				<div>
					{/* by signing up message */}
					By signing up, you agree to our Terms, Data Policy and
					Cookies Policy.
				</div>
				<div>
					{/* existing  user? */}
					Already have an account? <Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
}
