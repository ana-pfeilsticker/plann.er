import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../components/button";

interface AddPeopleInputProps {
	openGuestModal: () => void;
	guestsEmailList: string[];
	changeIsConfirmTripModalOpen: () => void;
}

export function AddPeopleInput({
	openGuestModal,
	guestsEmailList,
	changeIsConfirmTripModalOpen,
}: AddPeopleInputProps) {
	return (
		<div className="bg-zinc-900 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
			<button
				onClick={openGuestModal}
				type="button"
				className="flex gap-2 items-center flex-1"
			>
				<UserRoundPlus className="size-5 text-zinc-400" />
				{guestsEmailList.length > 0 ? (
					<span className="text-lg text-zinc-400">
						{guestsEmailList.length} pessoa(s) convidada(s)
					</span>
				) : (
					<span className="text-lg text-zinc-400">Quem estará na viagem?</span>
				)}
			</button>

			<Button
				color="primary"
				size="normal"
				onClick={changeIsConfirmTripModalOpen}
			>
				Confirmar Viagem
				<ArrowRight className="size-5 text-lime-950" />
			</Button>
		</div>
	);
}
