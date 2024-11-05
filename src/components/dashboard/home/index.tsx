import AchievementsCard from "./achievements-card";
import OngoingCourseCard from "./ongoing-course-card";
import RecommendedCardsList from "./recommended-cards-list";
import StreakCard from "./streak-card";

export default function DashboardHome() {
	return (
		<div className="mx-auto max-w-4xl ">
			<div className="grid grid-cols-12 ">
				<div className="col-span-5">
					{/* Welcome */}
					<h1> Welcome Alex</h1>
					{/* card to dispaly weeklyu growth */}
					<StreakCard />
					{/* card for achievements */}
					<AchievementsCard />
				</div>
				<div className="col-span-7">
					<h1>Jump back in</h1>
					{/* card for last viewed course */}
					<OngoingCourseCard />
					{/* Recommended cards list */}
					<RecommendedCardsList />
				</div>
			</div>
		</div>
	);
}
