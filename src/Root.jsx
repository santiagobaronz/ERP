import { useEffect } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { Outlet } from "react-router-dom";
import { updateUser } from "./hooks/UpdateUser";
import { Sidebar } from "./routes/templates/Sidebar";

export const Root = () => {

	const auth = useIsAuthenticated()
	const updateAuthUser = updateUser();

	useEffect(() => {
		const handleUserUpdate = () => {
			if(auth){
				updateAuthUser();
			}
		}
		handleUserUpdate();
	}, []);

	return (
		<>
			<Sidebar/>
			
			<div id="content">
				<Outlet/>
			</div>
		</>
	  );
}
