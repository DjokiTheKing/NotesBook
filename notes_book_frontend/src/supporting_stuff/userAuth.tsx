import { Cookies } from "react-cookie";

let cookie = new Cookies();

function useAuth(){
    let session_token = cookie.get('session_token');
    let refresh_token = cookie.get('refresh_token');
    if(session_token){
    }else{
        return false;
    }
}

export default useAuth;