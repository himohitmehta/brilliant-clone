import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
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
						<Button>Login</Button>
					</form>
				</div>
				<div>{/* existing  user? */}</div>
			</div>
		</div>
	);
}
