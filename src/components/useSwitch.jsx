import { useState } from "react";

export default function useSwitch(valoreIniziale = false) {
    const [isOn, setIsOn] = useState(valoreIniziale);

    const toggle = () => {
        setIsOn(curr => !curr);
    }

    return [isOn, toggle];
}