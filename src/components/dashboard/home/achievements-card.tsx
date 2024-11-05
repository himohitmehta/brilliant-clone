import { Card } from "@/components/ui/card";

export default function AchievementsCard() {
	return (
		<Card>
			<div className="flex items-center gap-4 p-2">
				{/* icon */}
				<div></div>
				<div>
					<h3 className="text-sm uppercase font-bold">
						Unlock leagues
					</h3>
					<p className="text-muted-foreground font-medium">
						70 of 175 XP
					</p>
				</div>
			</div>
		</Card>
	);
}
