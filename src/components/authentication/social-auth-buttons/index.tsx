import { Button } from "@/components/ui/button";
import {} from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

export default function SocialAuthButtons() {
	return (
		<div className="flex gap-4 flex-grow">
			<Button variant={"outline"} className="w-full">
				<FcGoogle />
			</Button>
			<Button variant={"outline"} className="w-full">
				<MdFacebook />
			</Button>
		</div>
	);
}
