import { Card } from "@/components/ui/card";
import { RecommendedCourseType } from "./recommended-cards-list";

export default function RecommendedCard({
	data,
}: {
	data: RecommendedCourseType;
}) {
	return (
		<Card className="flex flex-col p-2 items-center">
			<img src={data.img} />
			<div className="flex flex-col items-center">
				<h4 className=" text-center uppercase font-semibold text-xs text-violet-700">
					{data?.chapter}
				</h4>
				<h1 className="text-sm text-center font-bold">{data?.title}</h1>
			</div>
		</Card>
	);
}
