import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
	return (
		<div>
			<div>
				<h1>Title</h1>
				<div>{/* Social login with google and facebook buttons */}</div>
				<div>{/* Separator */}</div>
				<div>
					<form>
						<Input placeholder="Email" />
						<Input placeholder="Password" />
						<div>
							<Input placeholder="First name" />
							<Input placeholder="Last name" />
						</div>
						<Input placeholder="Age" />
						<Button>Register</Button>
					</form>
				</div>
				<div>{/* by signing up message */}</div>
				<div>{/* existing  user? */}</div>
			</div>
		</div>
	);
}
