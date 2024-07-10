import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

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
}: InviteGuestsModalProps) {
	return (
		<div className="fixed flex justify-center items-center inset-0 bg-black/60 w-full h-full">
			<div className="w-[640px] flex flex-col gap-5 rounded-xl px-6 py-5 bg-zinc-900">
				<div className="flex justify-between">
					<div className="space-y-2">
						<h2 className="heading-sm">Selecionar convidados</h2>
						<p className="text-sm text-zinc-400">
							Os convidados irão receber e-mails para confirmar a participação
							na viagem.
						</p>
					</div>
					<X onClick={closeGuestModal} className="text-zinc-400 size-5" />
				</div>
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
				<div className="bg-zinc-950 gap-4 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
					<form
						onSubmit={addGuestEmailToInvite}
						className="flex gap-2 items-center flex-1"
					>
						<AtSign className="size-5 text-zinc-400" />
						<input
							focus:outline-none
							focus:ring-0
							name="email"
							type="email"
							placeholder="Digite o e-mail do convidado"
							className="bg-transparent outline-none text-lg flex-1 placeholder-zinc-400 "
							required
						/>

						<Button color="primary" size="normal" type="submit">
							Convidar
							<Plus className="size-5 text-lime-950" />
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
