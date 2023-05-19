import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Home( {children}) {
    // const [count, setName] = useState(1);
    // var icount = 0;
    // useEffect(() => {
    //     // let i = 0
    //     document.title = count
       
    // }, [count]);
    // useEffect(() => {
    //     // let i = 0
    //     console.log("ddd")
       
    // });

    return ( 
        <h2>
            Home
            {/* <Link to="/">Home page</Link>
            <Link to="/upload">Upload</Link> */}
            {/* <input 
                type='text'
                placeholder="Tung"
                onChange={(e) => {
                    setName(e.target.value)
                }}
            /> */}
        </h2>
     );
}

export default Home;