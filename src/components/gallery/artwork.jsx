import { Image, Text, View } from "react-native";

export default function ArtworkComp({artworkObj}) {
  const {
    primaryImageSmall,
    title,
    artistDisplayName,
    artistDisplayBio,
    objectDate
  } = artworkObj;

  return(
    <View>
      <Text style={{fontSize: 20}}>{title}</Text>
      <Image 
      source={{uri: primaryImageSmall}} 
      style={{aspectRatio: 16/9}}
      resizeMode="contain"
      />
      <Text>Artitst: {artistDisplayName}</Text>
      <Text>Artist Bio: {artistDisplayBio}</Text>
      <Text>Date: {objectDate}</Text>
    </View>
  );
}