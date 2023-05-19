import { useState } from "react";

function App() {
  const [tung, setTung] = useState(0);

  const test = () => {
      try {
        // eslint-disable-next-lineno-undef
        const number = parseFloat("899999999999999999999")
        return <h1>sadas{number+899999999999999999999}</h1>
      }catch(e) {
        console.log(e)
        return <h1>looix</h1>
      }
  }

  return (
    <div>
      <h1>Tung</h1>
      <input type="range" min="1" max="10"
        value={tung}
        onChange={ (e) => {
          setTung(e.target.value)
        }}
      />
      {test()}
    </div>
  );
}

export default App;
