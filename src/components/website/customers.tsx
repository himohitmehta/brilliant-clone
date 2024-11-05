import { Star } from "lucide-react";

export default function Customers() {
	return (
		<div className="bg-muted">
			<div className="max-w-7xl mx-auto py-8">
				<h1 className="text-center text-2xl font-bold">
					Join over 10 million people learning on Brilliant
				</h1>

				<div className="flex justify-between items-center py-8">
					<div className="flex gap-8">
						<img src="/new-york-times.png" className="h-16 w-60" />

						<img
							src="/the-atlantic-long.png"
							className="h-10 w-40"
						/>
					</div>
					<div>
						<div className="flex items-center gap-2">
							{[1, 2, 3, 4, 5].map((item) => (
								<Star
									key={item}
									className="fill-yellow-300  [&>path]:text-transparent"
								/>
							))}
						</div>

						<div className="font-medium text-sm text-muted-foreground">
							Over 50,000 5-star reviews
						</div>
					</div>

					<div>
						<img src="/app-of-the-day.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
