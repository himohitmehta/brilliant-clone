import { Button } from "../ui/button";

export default function Hero() {
	return (
		<div className="flex max-w-7xl mx-auto p-6 items-center">
			<div className="flex flex-col ">
				<h1 className="text-5xl pb-8 font-medium ">
					Learn by <span className="text-blue-800">doing</span>
				</h1>
				<p className="font-medium pb-8">
					Guided interactive problem solving that's effective and fun.
					Master concepts in 15 minutes a day.
				</p>
				<Button className="max-w-[400px] bg-green-600">
					Get Started
				</Button>
			</div>
			<div>
				<img src="/hero-image.png" />
			</div>
		</div>
	);
}
