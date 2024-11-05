import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import SocialAuthButtons from "../social-auth-buttons";
import AuthSeparator from "@/components/shared/auth-separator";

export default function Register() {
	return (
		<div>
			<div className="flex flex-col gap-4 flex-grow">
				<h1 className="text-3xl font-bold text-center max-w-[400px]">
					Create a free account to discover your personalized learning
					path
				</h1>
				<div className="flex-grow flex-1">
					{/* Social login with google and facebook buttons */}
					<SocialAuthButtons />
				</div>
				<div>
					<AuthSeparator />
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
						<Button>Sign up</Button>
					</form>
				</div>
				<div className="text-xs text-muted-foreground font-medium text-center  [&>span]:cursor-pointer [&>span]:underline">
					{/* by signing up message */}
					By clicking above, I agree to Brilliant's <span>Terms</span>
					, and <span>Privacy Policy</span>
				</div>
				<div className="text-center font-medium text-muted-foreground">
					{/* existing  user? */}
					Existing User?{" "}
					<Link
						to="/login"
						className="font-semibold text-foreground underline-offset-8 underline"
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
}
