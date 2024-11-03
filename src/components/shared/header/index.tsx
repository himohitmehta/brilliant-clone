import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<div>
				logo
				{/* logo */}
				{/* navigation */}
				<div>
					<Link to={"/home"}>Home</Link>
					<Link to={"/courses"}>Courses</Link>
				</div>
				{/* search */}
				{/* chip */}
				{/* badge */}
				{/* menu icon */}
			</div>
		</div>
	);
}
