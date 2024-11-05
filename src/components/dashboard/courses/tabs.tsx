import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";
import CoursesList from "./courses-list";

export default function CoursesTabs() {
	const [tab, setTab] = useQueryState("tab");
	return (
		<div>
			<Tabs defaultValue={tab ?? tabsList[0].key} className="w-full">
				<TabsList className="">
					{tabsList.map((item) => (
						<TabsTrigger
							value={item.key}
							key={item.key}
							onClick={() => setTab(item.key)}
						>
							{item.title}
						</TabsTrigger>
					))}
				</TabsList>
				{tabsList.map((item) => (
					<TabsContent value={item.key} key={item.key}>
						<CoursesList
							key={tab! ?? tabsList[0].key}
							isNew={tab === "new-courses" || tab === null}
						/>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}

const tabsList = [
	{
		title: "New Courses",
		key: "new-courses",
	},
	{
		title: "Math",
		key: "math",
	},
	{
		title: "Data",
		key: "data",
	},
	{
		title: "Computer Science",
		key: "computer science",
	},
	{
		title: "Science",
		key: "science",
	},
];
