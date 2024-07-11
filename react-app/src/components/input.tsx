interface InputProps {
	name: string;
	type: string;
	placeholder: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

export function Input({ name, type, placeholder, icon, children }: InputProps) {
	return (
		<div className="bg-zinc-950 gap-4 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
			<div className="flex gap-2 items-center flex-1">
				{icon}
				<input
					focus:outline-none
					focus:ring-0
					name={name}
					type={type}
					placeholder={placeholder}
					className="bg-transparent outline-none text-lg flex-1 placeholder-zinc-400 "
					required
				/>
				{children}
			</div>
		</div>
	);
}
