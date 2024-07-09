import { MapPin, Calendar, ArrowRight } from "lucide-react";

export function App() {
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="space-y-10 w-full max-w-3xl px-6 text-center">
				<p className="text-zinc-300 text-lg">
					Convide seus amigos e planeje sua próxima viagem!
				</p>

				<div className="bg-zinc-900 px-4 h-16  w-full rounded-xl flex justify-between shadow-shape items-center">
					<div className="flex gap-2 items-center flex-1">
						<MapPin className="size-5 text-zinc-400" />
						<input
							type="text"
							placeholder="Para onde você vai?"
							className="bg-transparent text-lg placeholder-zinc-400 "
						/>
					</div>
					<div className="flex gap-2 items-center">
						<Calendar className="size-5 text-zinc-400" />
						<input
							type="text"
							placeholder="Quando?"
							className="bg-transparent text-lg placeholder-zinc-400 "
						/>
					</div>

					<button className="bg-lime-300 h-fit py-2 text-lime-950 px-5 font-medium rounded-lg flex hover:bg-lime-400 items-center gap-2">
						Continuar
						<ArrowRight className="size-5 text-lime-950" />
					</button>
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
