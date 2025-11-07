import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function DogFormComp( {addDogFunc} ) {
  const [inputDogName, setInputDogName] = useState("");
  const [inputDogAge, setInputDogAge] = useState("");
  const [inputDogBreed, setInputDogBreed] = useState("");

  function handelSubmit() {
    if(inputDogName == null || inputDogName == "") {
      alert('Please enter a dog name.');
      return;
    }
    //------------------------ Trust boundry
    alert(`Name: ${inputDogName} | Age: ${inputDogAge} | Breed: ${inputDogBreed}`);
    let newDogObj = {
      dogName: inputDogName,
      dogAge: inputDogAge,
      dogBreed: inputDogBreed
    }
    addDogFunc(newDogObj);
    setInputDogName("");
    setInputDogAge("");
    setInputDogBreed("");
  }

  return(
    <View style={formStyles.formContainer}>
      <Text style={{ fontSize:30,textAlign:'center'}}>Add a dog for adoption</Text>
      <View>
        <Text style={formStyles.label}>Dog name: </Text>
        <TextInput style={formStyles.input} onChangeText={setInputDogName} value={inputDogName}/>
        <Text style={formStyles.label}>Age: </Text>
        <TextInput style={formStyles.input} onChangetext={setInputDogAge} value={inputDogAge}/>
        <Text style={formStyles.label}>Breed: </Text>
        <TextInput style={formStyles.input} onChangeText={setInputDogBreed} value={inputDogBreed} />
        <Pressable style={formStyles.btn} onPress={handelSubmit}>
          <Text style={formStyles.btnText}>Add Dog</Text>
        </Pressable>
      </View>
  </View>
  );
}

const formStyles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    border: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn:{
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
})