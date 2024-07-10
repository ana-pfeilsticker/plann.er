import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

interface ConfirmTripModalProps {
	changeIsConfirmTripModalOpen: () => void;
}

export function ConfirmTripModal({
	changeIsConfirmTripModalOpen,
}: ConfirmTripModalProps) {
	const navigate = useNavigate();

	function createTrip() {
		navigate("/trip-details/123");
	}
	return (
		<div className="fixed flex justify-center items-center inset-0 bg-black/60 w-full h-full">
			<div className="w-[640px] flex flex-col gap-5 rounded-xl px-6 py-5 bg-zinc-900">
				<div className="flex justify-between">
					<div className="space-y-2">
						<h2 className="heading-sm">Confirmar criação da viagem</h2>
						<p className="text-sm text-zinc-400">
							Para concluir a criação da viagem para{" "}
							<span className="text-zinc-100">Florianópolis, Brasil</span> nas
							datas de{" "}
							<span className="text-zinc-100"> 16 a 27 de Agosto de 2024 </span>
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
					<Button
						color="primary"
						size="full"
						type="submit"
						onClick={createTrip}
					>
						<span className="mx-auto">Confirmar criação da viagem</span>
					</Button>
				</form>
			</div>
		</div>
	);
}
