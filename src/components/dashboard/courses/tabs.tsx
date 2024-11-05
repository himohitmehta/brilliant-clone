import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CoursesList from "./courses-list";
import useSearchQuery from "@/lib/hooks/use-search-query";
import { useState } from "react";

export default function CoursesTabs() {
	// const [tab, setTab] = useQueryState("tab");
	const { query: tab, setQuery: setTab } = useSearchQuery({ title: "tab" });

	const [isLoading, setIsLoading] = useState(false);
	const handleSelectTab = (value: string) => {
		setIsLoading(true);
		setTab(value);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};
	if (isLoading)
		return (
			<div className="py-4">
				<Tabs defaultValue={tab ?? tabsList[0].key} className="w-full">
					<TabsList>
						{tabsList.map((item) => (
							<TabsTrigger
								value={item.key}
								key={item.key}
								onClick={() => handleSelectTab(item.key)}
							>
								{item.title}
							</TabsTrigger>
						))}
					</TabsList>
					<div>Loading...</div>
				</Tabs>
			</div>
		);

	return (
		<div className="py-4">
			<Tabs defaultValue={tab ?? tabsList[0].key} className="w-full">
				<TabsList>
					{tabsList.map((item) => (
						<TabsTrigger
							value={item.key}
							key={item.key}
							onClick={() => handleSelectTab(item.key)}
						>
							{item.title}
						</TabsTrigger>
					))}
				</TabsList>
				{tabsList.map((item) => {
					const isNew =
						tab === "new-courses" || tab === null || tab === "";
					return (
						<TabsContent value={item.key} key={item.key}>
							<CoursesList isNew={isNew} />
						</TabsContent>
					);
				})}
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
