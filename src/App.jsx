import useSwitch from "./components/useSwitch";
import useDate from "./components/useDate";
import useCustomPointer from "./components/useCustomPointer";

export default function App() {
  // SNACK 1
  // const [isOn, toggle] = useSwitch();

  // return (
  //   <div className="container">
  //     <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
  //     <button onClick={toggle}>Cambia Stato</button>
  //   </div>
  // );

  // SNACK 2
  // const currentDate = useDate();

  // return (
  //   <div className="container">
  //     <h1>Data e ora attuali:</h1>
  //     <p>{currentDate.toLocaleString()}</p>
  //   </div>
  // );

  // SNACK 3
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}