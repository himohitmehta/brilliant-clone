import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
export default function Header() {
	return (
		<div className="shadow-sm ">
			<div className="flex gap-4  max-w-7xl mx-auto items-center">
				Brilliant
				{/* logo */}
				{/* navigation */}
				<div className="flex gap-4 flex-grow">
					{links.map((link) => (
						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-b-2 border-blue-500 py-4 px-2"
									: "py-4 px-2"
							}
							to={link.to}
						>
							{link.title}
						</NavLink>
					))}
				</div>
				{/* search */}
				<div>
					<Input
						placeholder="Search..."
						className="lg:min-w-[480px]"
					/>
				</div>
				{/* chip */}
				<Button
					variant={"outline"}
					className="border-destructive text-destructive rounded-full hover:bg-destructive hover:text-white"
					size={"sm"}
				>
					Gift Premium
				</Button>
				{/* badge */}
				<Button
					variant={"ghost"}
					// size={"icon"}
					className="[&_svg]:size-6 "
				>
					<span className="font-bold">1</span>{" "}
					<AiOutlineThunderbolt />
				</Button>
				{/* menu icon */}
				<Button variant={"ghost"} size={"icon"}>
					<MenuIcon />
				</Button>
			</div>
		</div>
	);
}

const links = [
	{
		title: "Home",
		to: "/home",
	},
	{
		title: "Courses",
		to: "/courses",
	},
];
