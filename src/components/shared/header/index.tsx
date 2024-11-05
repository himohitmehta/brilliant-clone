import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MenuIcon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiHome } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";

export default function Header() {
	const { pathname } = useLocation();

	return (
		<div className="shadow-sm ">
			<div className="flex gap-4  max-w-7xl mx-auto items-center">
				{/* logo */}
				<Link to="/" className="text-2xl font-bold">
					{/* Brilliant */}
					<img src={`/logo.png`} />
				</Link>
				{/* <img src={logo} alt="logo" className="w-40 h-10" /> */}
				{/* navigation */}
				<div className="flex gap-4 flex-grow">
					{links.map((link) => (
						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-b-2 border-black  py-4 px-2 font-bold flex items-center gap-2 text-black"
									: "py-4 px-2 font-medium text-muted-foreground flex gap-2 items-center"
							}
							to={link.to}
						>
							{pathname === link.to ? (
								<link.activeIcon />
							) : (
								<link.icon />
							)}{" "}
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
		icon: HiOutlineHome,
		activeIcon: HiHome,
	},
	{
		title: "Courses",
		to: "/courses",
		icon: MdOutlineLibraryBooks,
		activeIcon: MdLibraryBooks,
	},
];
