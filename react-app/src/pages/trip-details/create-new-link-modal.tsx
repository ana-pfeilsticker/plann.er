import { Link, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal-components/modal";
import { HeaderModal } from "../../components/modal-components/modal-header";

interface CreateNewLinkModalProps {
	changeIsCreateLinkModalOpen: () => void;
}

export function CreateNewLinkModal({
	changeIsCreateLinkModalOpen,
}: Readonly<CreateNewLinkModalProps>) {
	return (
		<Modal>
			<HeaderModal
				closeModal={changeIsCreateLinkModalOpen}
				title="Confirmar criação da viagem"
			>
				Todos convidados podem visualizar os links importantes.
			</HeaderModal>

			<form className="flex flex-col gap-2">
				<Input
					name="link"
					type="text"
					placeholder="Título do link"
					icon={<Tag className="size-5 text-zinc-400" />}
				/>

				<Input
					name="url"
					type="url"
					placeholder="URL"
					icon={<Link className="size-5 text-zinc-400" />}
				/>
				<Button color="primary" size="full" type="submit">
					<span className="mx-auto">Salvar link</span>
				</Button>
			</form>
		</Modal>
	);
}
