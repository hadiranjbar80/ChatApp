import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import RoomDashboard from "../../features/rooms/dashboard/RoomDashboard";
import HomePage from "../../features/home/HomePage";
import RoomDetails from "../../features/rooms/details/RoomDetails";
import RoomForm from "../../features/rooms/form/RoomForm";
import NotFound from "../../features/errros/NotFound";
import ServerError from "../../features/errros/ServerError";
import RequireAuth from "./RequireAuth";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                {path: 'rooms', element: <RoomDashboard />},
                {path: 'rooms/:id', element: <RoomDetails />},
                {path: 'createRoom', element: <RoomForm />},
            ]},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found'/>}
        ]
    }
]

export const router = createBrowserRouter(routes)