import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthButtons from "../social-auth-buttons";
import AuthSeparator from "@/components/shared/auth-separator";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "sonner";
import { FirebaseError } from "firebase/app";
import { auth, provider } from "@/lib/firebase/config";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function Login() {
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof loginSchema>>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(loginSchema),
	});

	const handleLogin = async (values: z.infer<typeof loginSchema>) => {
		try {
			await signInWithEmailAndPassword(
				auth,
				values.email,
				values.password,
			);
			navigate("/home");
			toast.success("User has been logged in");
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				toast.error(error.message);
			}
		}
	};
	const handleGoogleLogin = async () => {
		try {
			await signInWithPopup(auth, provider);

			toast.success("User have been Signed in");
			navigate("/home");
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				toast.error(error.message);
			}
		}
	};
	return (
		<div>
			<div className="flex flex-col  gap-4">
				<h1 className="text-3xl font-bold text-center">
					Login to your account
				</h1>
				<div>
					<SocialAuthButtons
						handleClickGoogleButton={handleGoogleLogin}
					/>
				</div>
				<div>
					<AuthSeparator />
				</div>
				<div>
					<Form {...form}>
						<form
							className="flex flex-col gap-4"
							onSubmit={form.handleSubmit(handleLogin)}
						>
							<FormField
								name="email"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												{...field}
												placeholder="Enter your email address"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>{" "}
							<FormField
								name="password"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												{...field}
												type="password"
												placeholder="Enter your password"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Login</Button>
						</form>
					</Form>
				</div>

				<div className="text-xs text-muted-foreground font-medium text-center  [&>span]:cursor-pointer [&>span]:underline">
					{/* by signing up message */}
					By clicking above, I agree to Brilliant's <span>Terms</span>
					, and <span>Privacy Policy</span>
				</div>
				<div className="text-center font-medium text-muted-foreground">
					{/* existing  user? */}
					Don't have an account?{" "}
					<Link
						to="/register"
						className="font-semibold text-foreground underline-offset-8 underline"
					>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
}
