interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
	return (
		<div className="fixed flex justify-center items-center inset-0 bg-black/60 w-full h-full">
			<div className="w-[640px] flex flex-col gap-5 rounded-xl px-6 py-5 bg-zinc-900">
				{children}
			</div>
		</div>
	);
}
