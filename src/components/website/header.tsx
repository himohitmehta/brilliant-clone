import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function LandingPageHeader() {
	return (
		<div className="py-4">
			<div className="flex gap-4  max-w-7xl mx-auto justify-between items-center">
				{/* logo */}
				<Link to="/" className="text-2xl font-medium">
					<img src={`/public/logo.png`} />
				</Link>
				{/* menu icon */}
				<Button variant={"outline"} asChild>
					<Link to="/login">Log in</Link>
				</Button>
			</div>
		</div>
	);
}
