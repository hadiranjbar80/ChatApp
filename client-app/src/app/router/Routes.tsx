import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import RoomDashboard from "../../features/rooms/dashboard/RoomDashboard";
import HomePage from "../../features/home/HomePage";
import RoomDetails from "../../features/rooms/details/RoomDetails";
import RoomForm from "../../features/rooms/form/RoomForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'rooms', element: <RoomDashboard />},
            {path: 'rooms/:id', element: <RoomDetails />},
            {path: 'createRoom', element: <RoomForm />},
        ]
    }
]

export const router = createBrowserRouter(routes)