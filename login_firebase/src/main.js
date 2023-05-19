import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useState } from "react";
function AuthenGG() {
    const [state, setstate] = useState('');
    const logingg = () => {
        signInWithPopup(auth, provider).then(
            (data) => {
                console.log(data)
                setstate(data.user.uid)
            }
        )
    }
    return (

        <>
            {state}
            <button onClick={logingg}>Login</button>
        </>
    );
}

export default AuthenGG;