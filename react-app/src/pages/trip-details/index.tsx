import {
	Calendar,
	Check,
	CircleCheck,
	CircleDashed,
	Link2,
	MapPin,
	Plus,
	Settings2,
	UserCog,
} from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";
import { CreateActivityModal } from "./create-new-activity-modal";
import { CreateNewLinkModal } from "./create-new-link-modal";
import { CheckInput } from "../../components/check";
import { TripActivity } from "./trip-activity";

export function TripDetails() {
	const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
		useState(false);

	const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

	function changeIsCreateActivityModalOpen() {
		setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
	}

	function changeIsCreateLinkModalOpen() {
		setIsCreateLinkModalOpen(!isCreateLinkModalOpen);
	}
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="max-w-6xl py-10 w-full h-screen space-y-8">
				<div className="w-full px-6 items-center flex justify-between rounded-xl shadow-shape bg-zinc-900 h-16">
					<div className="flex items-center gap-2 justify-start flex-1">
						<MapPin className="size-5 text-zinc-400" />
						<span className="text-zinc-100 text-lg">Florianópolis, Brasil</span>
					</div>
					<div className="flex items-center gap-5">
						<div className="flex items-center gap-2 justify-center">
							<Calendar className="size-5 text-zinc-400" />
							<span className="text-zinc-100 text-lg">17 a 23 de Agosto</span>
						</div>
						<div className="w-px h-6 bg-zinc-800"></div>
						<Button color="secondary" size="normal">
							Alterar Local/Data
							<Settings2 className="size-5 text-zinc-200" />
						</Button>
					</div>
				</div>
				<div className="flex justify-between gap-16 px-6">
					<div className="flex flex-col gap-6 flex-1">
						<div className="flex w-full justify-between">
							<h1 className="text-zinc-50 text-3xl font-medium">Atividades</h1>
							<Button
								onClick={changeIsCreateActivityModalOpen}
								color="primary"
								size="normal"
							>
								<Plus className="size-5 text-lime-950" />
								Cadastrar Atividade
							</Button>
						</div>
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-3 opacity-60">
								<div className="flex gap-2 items-end">
									<span className=" text-xl text-zinc-300">Dia 17</span>
									<span className="text-xs text-zinc-500">Sábado</span>
								</div>
								<span className="text-sm text-zinc-500">
									Nenhuma atividade cadastrada nessa data
								</span>
							</div>
							<div className="flex flex-col gap-3 opacity-60">
								<div className="flex gap-2 items-end">
									<span className=" text-xl text-zinc-300">Dia 18</span>
									<span className="text-xs text-zinc-500">Domingo</span>
								</div>
								<TripActivity
									isChecked={false}
									activityText="Passear com os cachorros"
									activityTime="15:00h"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<TripActivity
									isChecked={false}
									activityText="Passear com os cachorros"
									activityTime="15:00h"
								/>
								<TripActivity
									isChecked={false}
									activityText="Passear com os cachorros"
									activityTime="15:00h"
								/>
								<TripActivity
									isChecked={false}
									activityText="Passear com os cachorros"
									activityTime="15:00h"
								/>
								<TripActivity
									isChecked={false}
									activityText="Passear com os cachorros"
									activityTime="15:00h"
								/>
							</div>
						</div>
					</div>
					<div className="space-y-6 flex flex-col justify-start max-w-80">
						<div className="space-y-6">
							<h2 className="text-xl text-zinc-50 font-medium">
								Links importantes
							</h2>
							<div className="flex justify-between gap-4 items-center">
								<div className="space-y-1.5 truncate flex-1">
									<h3 className="text-base text-zinc-100">
										Reservas do AirBnB
									</h3>
									<a
										className="text-zinc-400 text-xs hover:text-zinc-300"
										href="https://www.airbnb.com.br/rooms/104700011cd .."
									>
										https://www.airbnb.com.br/rooms/104700011gdfsjhgdfasgasdfhjkgjasdfgjasdfgasdfhjg
									</a>
								</div>
								<Link2 className="size-5 text-zinc-400" />
							</div>
							<div className="flex justify-between gap-4 items-center">
								<div className="space-y-1.5 truncate flex-1">
									<h3 className="text-base text-zinc-100">
										Reservas do AirBnB
									</h3>
									<a
										className="text-zinc-400 text-xs hover:text-zinc-300"
										href="https://www.airbnb.com.br/rooms/104700011"
									>
										https://www.airbnb.com.br/rooms/104700011gdfsjhgdfasgasdfhjkgjasdfgjasdfgasdfhjg
									</a>
								</div>
								<Link2 className="size-5 text-zinc-400" />
							</div>
							<Button
								onClick={changeIsCreateLinkModalOpen}
								color="secondary"
								size="full"
							>
								<Plus className="size-5 text-zinc-200" />
								Cadastrar novo link
							</Button>
						</div>
						<div className="bg-zinc-800 w-full h-px"></div>
						<div className="space-y-6">
							<h2 className="text-xl text-zinc-50 font-medium">Convidados</h2>
							<div className="flex justify-between gap-4 items-center">
								<div className="space-y-1.5 truncate flex-1">
									<h3 className="text-base text-zinc-100">Jessica White</h3>
									<a
										className="text-zinc-400 text-xs hover:text-zinc-300"
										href="#"
									>
										jessica.white44@yahoo.com
									</a>
								</div>
								<CheckInput checked={false} />
							</div>
							<div className="flex justify-between gap-4 items-center">
								<div className="space-y-1.5 truncate flex-1">
									<h3 className="text-base text-zinc-100">Dr. Rita Pacocha</h3>
									<p className="text-zinc-400 text-xs hover:text-zinc-300">
										lacy.stiedemann@gmail.com
									</p>
								</div>
								<CheckInput checked={true} />
							</div>
							<Button color="secondary" size="full">
								<UserCog className="size-5 text-zinc-200" />
								Gerenciar convidados
							</Button>
						</div>
					</div>
				</div>
			</div>

			{isCreateActivityModalOpen && (
				<CreateActivityModal
					changeIsCreateActivityModalOpen={changeIsCreateActivityModalOpen}
				/>
			)}

			{isCreateLinkModalOpen && (
				<CreateNewLinkModal
					changeIsCreateLinkModalOpen={changeIsCreateLinkModalOpen}
				/>
			)}
		</div>
	);
}
