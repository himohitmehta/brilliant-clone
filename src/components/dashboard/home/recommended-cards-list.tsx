import RecommendedCard from "./recommended-card";

export default function RecommendedCardsList() {
	return (
		<div>
			<h3 className="font-bold ">Recommended for you</h3>
			<div className="flex gap-4">
				{cards.map((item) => {
					return <RecommendedCard data={item} />;
				})}
			</div>
		</div>
	);
}

const cards: RecommendedCourseType[] = [
	{
		title: "Logic",
		img: "",
		chapter: "",
	},
	{
		title: "Computer Science Fundamentals",
		img: "",
		chapter: "CS & Programming - LEVEL 2",
	},
	{
		title: "Solving Equations",
		img: "",
		chapter: "Foundational Math - level 1",
	},
];

export type RecommendedCourseType = {
	title: string;
	img?: string;
	chapter: string;
};
