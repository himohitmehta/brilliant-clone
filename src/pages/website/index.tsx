import WebsiteLayout from "@/components/shared/layouts/website-layout";
import Categories from "@/components/website/categories";
import Customers from "@/components/website/customers";
import LandingPageHeader from "@/components/website/header";
import Hero from "@/components/website/hero";

export default function WebsiteLandingPage() {
	return (
		<WebsiteLayout>
			<LandingPageHeader />
			<Hero />
			<Categories />
			<Customers />
		</WebsiteLayout>
	);
}
