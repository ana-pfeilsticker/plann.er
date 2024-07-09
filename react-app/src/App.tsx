import {
	MapPin,
	Calendar,
	ArrowRight,
	UserRoundPlus,
	Settings2,
	X,
	Plus,
	AtSign,
	User,
	Mail,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
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
							<button
								onClick={changeIsAddPeopleOpen}
								className="bg-zinc-800 h-fit py-2 text-zinc-200 px-5 font-medium rounded-lg flex hover:bg-zinc-700 items-center gap-2"
							>
								Alterar Local/Data
								<Settings2 className="size-5 text-zinc-200" />
							</button>
						) : (
							<button
								onClick={changeIsAddPeopleOpen}
								className="bg-lime-300 h-fit py-2 text-lime-950 px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2"
							>
								Continuar
								<ArrowRight className="size-5 text-lime-950" />
							</button>
						)}
					</div>

					{isAddPeopleOpen && (
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
									<span className="text-lg text-zinc-400">
										Quem estará na viagem?
									</span>
								)}
							</button>

							<button
								onClick={changeIsConfirmTripModalOpen}
								className="bg-lime-300 h-fit py-2 text-lime-950 px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2"
							>
								Confirmar Viagem
								<ArrowRight className="size-5 text-lime-950" />
							</button>
						</div>
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
				<div className="fixed flex justify-center items-center inset-0 bg-black/60 w-full h-full">
					<div className="w-[640px] flex flex-col gap-5 rounded-xl px-6 py-5 bg-zinc-900">
						<div className="flex justify-between">
							<div className="space-y-2">
								<h2 className="heading-sm">Selecionar convidados</h2>
								<p className="text-sm text-zinc-400">
									Os convidados irão receber e-mails para confirmar a
									participação na viagem.
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
								<button
									type="submit"
									className="bg-lime-300 h-fit py-2 text-lime-950 px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2"
								>
									Convidar
									<Plus className="size-5 text-lime-950" />
								</button>
							</form>
						</div>
					</div>
				</div>
			)}

			{isConfirmTripModalOpen && (
				<div className="fixed flex justify-center items-center inset-0 bg-black/60 w-full h-full">
					<div className="w-[640px] flex flex-col gap-5 rounded-xl px-6 py-5 bg-zinc-900">
						<div className="flex justify-between">
							<div className="space-y-2">
								<h2 className="heading-sm">Confirmar criação da viagem</h2>
								<p className="text-sm text-zinc-400">
									Para concluir a criação da viagem para{" "}
									<span className="text-zinc-100">Florianópolis, Brasil</span>{" "}
									nas datas de{" "}
									<span className="text-zinc-100">
										{" "}
										16 a 27 de Agosto de 2024{" "}
									</span>
									preencha seus dados abaixo:
								</p>
							</div>
							<X
								onClick={changeIsConfirmTripModalOpen}
								className="text-zinc-400 size-5"
							/>
						</div>
						<form className="flex flex-col gap-2">
							<div className="bg-zinc-950 gap-4 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
								<div className="flex gap-2 items-center flex-1">
									<User className="size-5 text-zinc-400" />
									<input
										focus:outline-none
										focus:ring-0
										name="email"
										type="email"
										placeholder="Seu nome completo"
										className="bg-transparent outline-none text-lg flex-1 placeholder-zinc-400 "
										required
									/>
								</div>
							</div>
							<div className="bg-zinc-950 gap-4 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
								<div className="flex gap-2 items-center flex-1">
									<Mail className="size-5 text-zinc-400" />
									<input
										focus:outline-none
										focus:ring-0
										name="email"
										type="email"
										placeholder="Seu e-mail pessoal"
										className="bg-transparent outline-none text-lg flex-1 placeholder-zinc-400 "
										required
									/>
								</div>
							</div>
							<button
								type="submit"
								className="bg-lime-300 h-fit py-2 my-1 text-lime-950 text-center px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2"
							>
								<span className="mx-auto">Confirmar criação da viagem</span>
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
