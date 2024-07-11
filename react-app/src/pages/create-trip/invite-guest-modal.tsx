import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal-components/modal";
import { HeaderModal } from "../../components/modal-components/modal-header";
import { Input } from "../../components/input";

interface InviteGuestsModalProps {
	closeGuestModal: () => void;
	guestsEmailList: string[];
	deleteGuestEmailToInvite: (email: string) => void;
	addGuestEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestsModal({
	closeGuestModal,
	guestsEmailList,
	deleteGuestEmailToInvite,
	addGuestEmailToInvite,
}: Readonly<InviteGuestsModalProps>) {
	return (
		<Modal>
			<HeaderModal closeModal={closeGuestModal} title="Selecionar convidados">
				Os convidados irão receber e-mails para confirmar a participação na
				viagem.
			</HeaderModal>
			<div className="flex flex-wrap gap-2">
				{guestsEmailList.map((email) => {
					return (
						<div
							key={email}
							className="bg-zinc-800 rounded-md px-3 py-2 w-fit flex items-center gap-3"
						>
							{email}
							<X
								onClick={() => deleteGuestEmailToInvite(email)}
								className="text-zinc-400 size-5"
							/>
						</div>
					);
				})}
			</div>
			<div className="bg-zinc-800 w-full h-px"></div>
			<form onSubmit={addGuestEmailToInvite}>
				<Input
					name="email"
					type="email"
					placeholder="Digite o e-mail do convidado"
					icon={<AtSign className="size-5 text-zinc-400" />}
				>
					<Button color="primary" size="normal" type="submit">
						Convidar
						<Plus className="size-5 text-lime-950" />
					</Button>
				</Input>
			</form>
		</Modal>
	);
}
