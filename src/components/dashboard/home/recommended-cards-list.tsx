import RecommendedCard from "./recommended-card";

export default function RecommendedCardsList() {
	return (
		<div className="pt-8">
			<h3 className="font-bold pb-4">Recommended for you</h3>
			<div className="grid grid-cols-3 gap-4">
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
		img: "/logic.png",
		chapter: "",
	},
	{
		title: "Computer Science Fundamentals",
		img: "/cs-programming.png",
		chapter: "CS & Programming - LEVEL 2",
	},
	{
		title: "Solving Equations",
		img: "/foundational-math.png",
		chapter: "Foundational Math - level 1",
	},
];

export type RecommendedCourseType = {
	title: string;
	img?: string;
	chapter: string;
};
