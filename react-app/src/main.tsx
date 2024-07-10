import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreatetTrip } from "./pages/create-trip/index.tsx";
import "./index.css";
import { TripDetails } from "./pages/trip-details/index.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CreatetTrip />,
	},
	{
		path: "/trip-details/:id",
		element: <TripDetails />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
