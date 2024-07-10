import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	color?: "primary" | "secondary";
	size?: "normal" | "full";
}

export function Button({
	children,
	onClick,
	type,
	size = "normal",
	color = "primary",
}: Readonly<ButtonProps>) {
	const button = tv({
		variants: {
			color: {
				primary: "bg-lime-300 hover:bg-lime-400 text-lime-950",
				secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-900",
			},
			size: {
				normal: "w-fit",
				full: "w-full",
			},
		},

		defaultVariants: {
			color: "primary",
			size: "normal",
		},
	});
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${button({
				size,
				color,
			})} h-fit py-2 px-5 font-medium rounded-lg flex justify-center gap-2`}
		>
			{children}
		</button>
	);
}
