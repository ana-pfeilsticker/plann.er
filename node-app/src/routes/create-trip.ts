import type { FastifyInstance } from "fastify";

export async function createTrip(app: FastifyInstance) {
	app.post("/trips", async () => {});
}
