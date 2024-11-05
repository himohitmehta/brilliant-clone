import { Button } from "@/components/ui/button";

export default function SocialAuthButtons() {
	return (
		<div className="flex gap-4 flex-grow">
			<Button variant={"outline"} className="w-full">
				Google
			</Button>
			<Button variant={"outline"} className="w-full">
				Facebook
			</Button>
		</div>
	);
}
