import { X } from "lucide-react";

interface HeaderModalProps {
	closeModal: () => void;
	children?: React.ReactNode;
	title: string;
}

export function HeaderModal({
	closeModal,
	children,
	title,
}: Readonly<HeaderModalProps>) {
	return (
		<div className="flex justify-between">
			<div className="space-y-2">
				<h2 className="heading-sm">{title}</h2>
				<p className="text-sm text-zinc-400">{children}</p>
			</div>
			<X onClick={closeModal} className="text-zinc-400 size-5" />
		</div>
	);
}
