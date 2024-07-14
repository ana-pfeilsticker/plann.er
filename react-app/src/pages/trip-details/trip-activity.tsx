import { CheckInput } from "../../components/check";

interface TripActivityProps {
	isChecked: boolean;
	activityText: string;
	activityTime: string;
}

export function TripActivity({
	isChecked,
	activityText,
	activityTime,
}: Readonly<TripActivityProps>) {
	return (
		<div className="bg-zinc-900 shadow-shape px-4 h-10 rounded-xl flex items-center gap-3 ">
			<CheckInput checked={isChecked} />
			<span className="flex flex-1">{activityText}</span>
			<span className="m-auto text-zinc-400">{activityTime}</span>
		</div>
	);
}
