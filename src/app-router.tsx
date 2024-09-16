import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

export default function AppRouter() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<h3> React Template</h3>} />,
		),
	);

	return <RouterProvider router={router} />;
}
