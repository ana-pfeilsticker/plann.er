import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal-components/modal";
import { HeaderModal } from "../../components/modal-components/modal-header";
import { Input } from "../../components/input";

interface ConfirmTripModalProps {
	changeIsConfirmTripModalOpen: () => void;
}

export function ConfirmTripModal({
	changeIsConfirmTripModalOpen,
}: Readonly<ConfirmTripModalProps>) {
	const navigate = useNavigate();

	function createTrip() {
		navigate("/trip-details/123");
	}
	return (
		<Modal>
			<HeaderModal
				closeModal={changeIsConfirmTripModalOpen}
				title="Confirmar criação da viagem"
			>
				Para concluir a criação da viagem para{" "}
				<span className="text-zinc-100">Florianópolis, Brasil</span> nas datas
				de <span className="text-zinc-100"> 16 a 27 de Agosto de 2024 </span>
				preencha seus dados abaixo:
			</HeaderModal>

			<form className="flex flex-col gap-2">
				<Input
					name="nome"
					type="text"
					placeholder="Seu nome completo"
					icon={<User className="size-5 text-zinc-400" />}
				/>

				<Input
					name="email"
					type="email"
					placeholder="Seu e-mail pessoal"
					icon={<Mail className="size-5 text-zinc-400" />}
				/>
				<Button color="primary" size="full" type="submit" onClick={createTrip}>
					<span className="mx-auto">Confirmar criação da viagem</span>
				</Button>
			</form>
		</Modal>
	);
}
