import { MapPin, Calendar, ArrowRight, Settings2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { InviteGuestsModal } from "./invite-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { AddPeopleInput } from "./add-people-input";
import { Button } from "../../components/button";

export function CreatetTrip() {
	const [isAddPeopleOpen, setIsAddPeopleOpen] = useState(false);
	const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
	const [guestsEmailList, setGuestsEmailList] = useState<string[]>([]);
	const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
	function changeIsAddPeopleOpen() {
		setIsAddPeopleOpen(!isAddPeopleOpen);
	}

	function openGuestModal() {
		setIsGuestModalOpen(true);
	}

	function closeGuestModal() {
		setIsGuestModalOpen(false);
	}

	function addGuestEmailToInvite(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		if (!email) {
			return;
		}

		const emailString = String(email);

		if (guestsEmailList.includes(emailString)) {
			return;
		}

		setGuestsEmailList([...guestsEmailList, emailString]);
		event.currentTarget.reset();
	}

	function deleteGuestEmailToInvite(emailToDelete: string) {
		const newEmailsList = guestsEmailList.filter(
			(email) => email !== emailToDelete
		);
		setGuestsEmailList(newEmailsList);
	}

	function changeIsConfirmTripModalOpen() {
		setIsConfirmTripModalOpen(!isConfirmTripModalOpen);
	}

	return (
		<div className="h-screen flex items-center justify-center bg-hero-pattern bg-center bg-no-repeat">
			<div className="space-y-10 w-full max-w-3xl px-6 text-center ">
				<div className="flex flex-col items-center justify-center gap-2">
					<img src="../public/planner.svg" alt="" />
					<p className="text-zinc-300 text-lg">
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className="space-y-4">
					<div className="bg-zinc-900 gap-4 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
						<div className="flex gap-2 items-center flex-1">
							<MapPin className="size-5 text-zinc-400" />
							<input
								type="text"
								placeholder="Para onde você vai?"
								className="bg-transparent outline-none text-lg flex-1 placeholder-zinc-400 "
								disabled={isAddPeopleOpen}
							/>
						</div>
						<div className="flex gap-2 items-center ">
							<Calendar className="size-5 text-zinc-400" />
							<input
								type="text"
								placeholder="Quando?"
								className="bg-transparent outline-none text-lg w-40 placeholder-zinc-400 "
								disabled={isAddPeopleOpen}
							/>
						</div>

						<div className="w-px h-6 bg-zinc-800"></div>

						{isAddPeopleOpen ? (
							<Button
								color="secondary"
								size="normal"
								onClick={changeIsAddPeopleOpen}
							>
								Alterar Local/Data
								<Settings2 className="size-5 text-zinc-200" />
							</Button>
						) : (
							<Button
								color="primary"
								size="normal"
								onClick={changeIsAddPeopleOpen}
							>
								Continuar
								<ArrowRight className="size-5 text-lime-950" />
							</Button>
						)}
					</div>

					{isAddPeopleOpen && (
						<AddPeopleInput
							openGuestModal={openGuestModal}
							guestsEmailList={guestsEmailList}
							changeIsConfirmTripModalOpen={changeIsConfirmTripModalOpen}
						></AddPeopleInput>
					)}
				</div>

				<p className="text-zinc-500 text-sm">
					Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
					<br /> com nossos{" "}
					<a className="text-zinc-300 underline" href="#">
						termos de uso
					</a>{" "}
					e{" "}
					<a className="text-zinc-300 underline" href="#">
						políticas de privacidade
					</a>
					.
				</p>
			</div>

			{isGuestModalOpen && (
				<InviteGuestsModal
					closeGuestModal={closeGuestModal}
					guestsEmailList={guestsEmailList}
					addGuestEmailToInvite={addGuestEmailToInvite}
					deleteGuestEmailToInvite={deleteGuestEmailToInvite}
				/>
			)}

			{isConfirmTripModalOpen && (
				<ConfirmTripModal
					changeIsConfirmTripModalOpen={changeIsConfirmTripModalOpen}
				/>
			)}
		</div>
	);
}
