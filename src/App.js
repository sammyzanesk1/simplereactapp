import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  const [count, setCount] = useState(0);
  //fetching data
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    //convert d fetched data to a json string
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((currentcount) => currentcount + 1);
  }

  //we use d useeffect to run a function after d doom renders d component specified in d dependency array
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>Hello Sammy, learn React with JONAS</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get some advice?</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
