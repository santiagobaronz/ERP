import { Outlet } from "react-router-dom";
import { Sidebar } from "./routes/templates/Sidebar";

export const Root = () => {
	return (
		<>
			<Sidebar/>
			
			<div id="content">
				<Outlet/>
			</div>
		</>
	  );
}
