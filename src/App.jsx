import useSwitch from "./components/useSwitch";
import useDate from "./components/useDate";

export default function App() {
  // const [isOn, toggle] = useSwitch();

  // return (
  //   <div className="container">
  //     <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
  //     <button onClick={toggle}>Cambia Stato</button>
  //   </div>
  // );

  const currentDate = useDate();

  return (
    <div className="container">
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}