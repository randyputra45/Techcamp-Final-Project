import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function useLogout() {
    let history = useHistory();

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
    };

    const logoutUser = async () => {
        try {
           await axios.get("/logout", { withCredentials: true, config }
            ).then(res => { 
                console.log(res); 
                history.push('/');
            })
        } catch(err) {
            console.log(err);
        } 
    }

    return {
        logoutUser
    }
}