import { Calendar, Clock, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal-components/modal";
import { HeaderModal } from "../../components/modal-components/modal-header";
import { Input } from "../../components/input";

interface CreateActivityModalProps {
	changeIsCreateActivityModalOpen: () => void;
}

export function CreateActivityModal({
	changeIsCreateActivityModalOpen,
}: Readonly<CreateActivityModalProps>) {
	return (
		<Modal>
			<HeaderModal
				closeModal={changeIsCreateActivityModalOpen}
				title="Cadastrar Atividade"
			>
				Todos convidados podem visualizar as atividades.
			</HeaderModal>

			<form className="flex flex-col gap-2">
				<Input
					name="nome"
					type="text"
					placeholder="Qual a atividade?"
					icon={<Tag className="size-5 text-zinc-400" />}
				/>
				<div className="flex gap-2">
					<Input
						name="email"
						type="email"
						placeholder="20 de agosto"
						icon={<Calendar className="size-5 text-zinc-400" />}
					/>
					<div className="max-w-36">
						<Input
							name="email"
							type="email"
							placeholder="Horário"
							icon={<Clock className="size-5 text-zinc-400" />}
						/>
					</div>
				</div>
				<Button color="primary" size="full" type="submit">
					Salvar atividade
				</Button>
			</form>
		</Modal>
	);
}
