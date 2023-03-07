import axios from "axios";
import { useAuthHeader, useSignIn } from "react-auth-kit";
import { useSettings } from "../components/SettingsProvider";

export const updateUser = () => {

	const settings = useSettings();
    const signIn = useSignIn();
    const authHeader = useAuthHeader();

    const [tokenType, token] = authHeader().split(" ");

    if (!tokenType || !token) {
        return () => {};
    }

    return async () => {
		await axios.get(`${settings.URL_EMPRESA}/auth/userinfo`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(response => {
			if (signIn({
				token,
				tokenType,
				expiresIn: 1440,
				authState: response.data,
			})) {
				console.log("Se hizo el cambio")
			} else {
				alert("Ha ocurrido un error, intentelo de nuevo");
			}
		})
		.catch(error => {
			console.error('Error:', error);
		});
    };
};