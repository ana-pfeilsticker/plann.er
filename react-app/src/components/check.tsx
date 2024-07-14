import { CircleCheck, CircleDashed } from "lucide-react";
import { useState } from "react";

interface CheckInputProps {
	checked: boolean;
}

export function CheckInput({ checked }: Readonly<CheckInputProps>) {
	const [isChecked, setIsChecked] = useState(checked);

	function changeIsChecked() {
		setIsChecked(!isChecked);
	}

	return (
		<>
			{isChecked ? (
				<CircleCheck
					className="text-lime-300 size-5"
					onClick={changeIsChecked}
				/>
			) : (
				<CircleDashed className="size-5" onClick={changeIsChecked} />
			)}
		</>
	);
}
