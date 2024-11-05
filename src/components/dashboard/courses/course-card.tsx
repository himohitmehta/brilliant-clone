import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Course } from "@/lib/types";

export default function CourseCard({ data }: { data: Course }) {
	return (
		<div className="flex flex-col items-center">
			<Card className="border-b-2 shadow-none p-4 relative">
				<div className="h-50 w-50 p-8">
					<img
						src={data.image}
						alt={`${data.title}-image`}
						// className="w-40 h-40 object-fit"
					/>
				</div>
				{data.isNew && (
					<Badge className="rounded-md uppercase bg-red-800 top-2 right-2 absolute">
						New
					</Badge>
				)}
			</Card>
			<h1 className="font-medium text-lg text-center text-muted-foreground">
				{data.title}
			</h1>
		</div>
	);
}
