import { Text, View, Button } from "react-native";
import CounterDisplayComp from "../components/counter-display";
import { useState } from "react";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count -1);
  }

  return (
    <View>
      <CounterDisplayComp counterInt={count} />
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
}