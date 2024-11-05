import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function OngoingCourseCard() {
	return (
		<Card>
			{/* img */}
			<div></div>
			<div className="flex w-full flex-col p-4 items-center ">
				{" "}
				<h4 className="text-red-700 font-bold uppercase text-sm pb-2">
					Science - Level 1
				</h4>
				<h1 className="text-xl font-bold pb-4">Scientific Thinking</h1>
				<Button className="flex-grow w-full">Continue Path</Button>
			</div>
		</Card>
	);
}
