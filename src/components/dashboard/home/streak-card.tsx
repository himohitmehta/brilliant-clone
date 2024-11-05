import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AiFillThunderbolt, AiOutlineThunderbolt } from "react-icons/ai";

export default function StreakCard() {
	return (
		<Card className="p-2">
			<div className="flex w-full">
				<h1 className="flex items-center font-bold text-3xl  flex-grow">
					<span>1</span>{" "}
					<AiOutlineThunderbolt className="text-muted-foreground" />
				</h1>
				<Button
					variant={"secondary"}
					size="icon"
					className="rounded-full"
				>
					<ChevronDown />
				</Button>
			</div>
			<div>
				<h4 className="">
					Solve <b>3 problems </b> to continue your streak
				</h4>
				<div className="flex gap-4 p-2">
					{streak.map((item) => {
						const isFilled = item.icon === "filled";
						const isActive = item.icon === "active";
						return (
							<div className="flex items-center flex-col gap-2">
								<div
									className={cn(
										"rounded-full p-2 border",
										isFilled && "bg-yellow-500",
										isActive && "border-black",
									)}
								>
									{item.icon === "filled" ? (
										<AiFillThunderbolt />
									) : (
										<AiOutlineThunderbolt />
									)}
								</div>
								<p
									className={cn(
										"text-sm font-medium",
										isActive && "font-bold",
									)}
								>
									{item.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</Card>
	);
}
const streak = [
	{
		id: 1,
		title: "T",
		icon: "filled",
	},
	{
		id: 1,
		title: "W",
		icon: "active",
	},
	{
		id: 1,
		title: "Th",
		icon: "pending",
	},
	{
		id: 1,
		title: "F",
		icon: "pending",
	},
	{
		id: 1,
		title: "S",
		icon: "pending",
	},
];
