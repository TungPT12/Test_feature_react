import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updateEmail, signOut} from "firebase/auth";
import { auth, provider } from "./firebase";
import { useState } from "react";
function LoginEmailPassword() {
    const [state, setstate] = useState('');

    const signup = () => {
        createUserWithEmailAndPassword(auth, 'mylifeundermycontrol@gmail.com', 'BoyPham1204')
        .then((data) => {
            data.user.displayName = 'tung'
                console.log(data)
                setstate(data.user)
            }
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
        }
        
    const update = () => {
            
    updateProfile(auth.currentUser, {
      displayName: "tung", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log(auth);
      // console.log(auth.currentUser)
      alert('ok')
    }).catch((error) => {
      alert(error)
    });
        }
    

    const login = () => {
        signInWithEmailAndPassword(auth, 'mylifeundermycontrol@gmail.com', 'BoyPham1204')
        .then((data) => {
                setstate(data.user.accessToken)
                console.log(data)
            }
        ).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
        }        
    const logout = () => {
        signOut(auth)
        .then((data) => {
                // setstate(data.user.accessToken)
                console.log(data)
            }
        ).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
        }        
    return (

        <>
            {state}
            <button onClick={update}>signup</button>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </>
    );
}

export default LoginEmailPassword ;