import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function ContactScreen() {

    const nav = useNavigation();

    return(
        <View>
            <Text>Contact Screen!</Text>
            <Button title="Go to Contact" onPress={ () => nav.navigate('Contact') } />
            <Button title="Go Back" onPress={ () => nav.goBack() } />
            <Button title="Go Home" onPress={ () => nav.popToTop() } />
            <Button title="Go Home" onPress={ () => nav.popTo('Home') } />
        </View>
    )
}