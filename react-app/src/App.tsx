import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from "lucide-react";
import { useState } from "react";

export function App() {
	const [isAddPeopleOpen, setIsAddPeopleOpen ] = useState(false);

	function continueTrip(){
		setIsAddPeopleOpen(!isAddPeopleOpen);
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
				<div className="bg-zinc-900 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
					<div className="flex gap-2 items-center flex-1">
						<MapPin className="size-5 text-zinc-400" />
						<input
							type="text"
							placeholder="Para onde você vai?"
							className="bg-transparent outline-none text-lg placeholder-zinc-400 "
							disabled={isAddPeopleOpen}
						/>
					</div>
					<div className="flex gap-2 items-center ">
						<Calendar className="size-5 text-zinc-400" />
						<input
							type="text"
							placeholder="Quando?"
							className="bg-transparent outline-none text-lg placeholder-zinc-400 "
							disabled={isAddPeopleOpen}
						/>
					</div>
					{isAddPeopleOpen?(
						<button onClick={continueTrip} className="bg-zinc-800 h-fit py-2 text-zinc-200 px-5 font-medium rounded-lg flex hover:bg-zinc-700 items-center gap-2">
						Alterar Local/Data
						<Settings2 className="size-5 text-zinc-200" />
						</button>
					) : (
						<button onClick={continueTrip} className="bg-lime-300 h-fit py-2 text-lime-950 px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2">
							Continuar
							<ArrowRight className="size-5 text-lime-950" />
						</button>
					)}

				</div>

				{isAddPeopleOpen &&
				
				
				<div className="bg-zinc-900 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
					<div className="flex gap-2 items-center flex-1">
						<UserRoundPlus className="size-5 text-zinc-400" />
						<input
							type="text"
							placeholder="Quem estará na viagem?"
							className="bg-transparent outline-none text-lg placeholder-zinc-400 "
						/>
					</div>

					<button className="bg-lime-300 h-fit py-2 text-lime-950 px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2">
						Confirmar Viagem
						<ArrowRight className="size-5 text-lime-950" />
					</button>
				</div>
				
				}
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
		</div>
	);
}
