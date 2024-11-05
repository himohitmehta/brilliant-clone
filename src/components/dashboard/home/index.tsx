import { auth } from "@/lib/firebase/config";
import AchievementsCard from "./achievements-card";
import OngoingCourseCard from "./ongoing-course-card";
import RecommendedCardsList from "./recommended-cards-list";
import StreakCard from "./streak-card";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";

export default function DashboardHome() {
	const [currentUser, setCurrentUser] = useState<User>();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setCurrentUser(user);
		}
	});
	return (
		<div className="mx-auto max-w-4xl ">
			<div className="grid grid-cols-12 gap-4 mt-4">
				<div className="col-span-5 gap-4 flex flex-col">
					{/* Welcome */}
					<h1 className="text-xl font-bold">
						{" "}
						Welcome, {currentUser?.displayName}
					</h1>
					<StreakCard />
					<AchievementsCard />
				</div>
				<div className="col-span-7 gap-4 flex flex-col">
					<h1 className="text-xl font-bold">Jump back in</h1>
					<OngoingCourseCard />
					<RecommendedCardsList />
				</div>
			</div>
		</div>
	);
}
