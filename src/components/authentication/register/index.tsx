import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthButtons from "../social-auth-buttons";
import AuthSeparator from "@/components/shared/auth-separator";
import { FirebaseError } from "firebase/app";
import { toast } from "sonner";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
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

const signUpSchema = z.object({
	email: z.string().email(),
	firstName: z.string().trim().min(3, "Name must be at least 3 characters"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	lastName: z.string().optional(),
});

export default function Register() {
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof signUpSchema>>({
		defaultValues: {
			email: "",
			firstName: "",
			password: "",

			lastName: "",
		},
		resolver: zodResolver(signUpSchema),
	});

	const handleRegister = async (values: z.infer<typeof signUpSchema>) => {
		try {
			await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password,
			);
			await updateProfile(auth.currentUser!, {
				displayName: `${values.firstName} ${values.lastName}`,
			});
			toast.success("User has been registered");
			navigate("/home");
		} catch (error) {
			if (error instanceof FirebaseError) {
				toast.error(error.message);
			}
		}
	};
	const handleGoogleRegister = async () => {
		try {
			await signInWithPopup(auth, provider);
			toast.success("User has been registered");
			navigate("/home");
		} catch (error) {
			if (error instanceof FirebaseError) {
				toast.error(error.message);
			}
		}
	};
	return (
		<div>
			<div className="flex flex-col gap-4 flex-grow">
				<h1 className="text-3xl font-bold text-center max-w-[400px]">
					Create a free account to discover your personalized learning
					path
				</h1>
				<div className="flex-grow flex-1">
					{/* Social login with google and facebook buttons */}
					<SocialAuthButtons
						handleClickGoogleButton={handleGoogleRegister}
					/>
				</div>
				<div>
					<AuthSeparator />
				</div>
				<div>
					<Form {...form}>
						<form
							className="flex flex-col gap-4"
							onSubmit={form.handleSubmit(handleRegister)}
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
							<div className="flex gap-4">
								<FormField
									name="firstName"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													{...field}
													placeholder="First name"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="lastName"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													{...field}
													placeholder="Last name"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<Button type="submit">Sign up</Button>
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
					Existing User?{" "}
					<Link
						to="/login"
						className="font-semibold text-foreground underline-offset-8 underline"
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
}
