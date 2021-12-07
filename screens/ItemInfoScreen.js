import React from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import RecommendationsCard from "../components/RecommendationsCard";



export default function ItemInfoScreen(props) {
  const handlePress = () => alert("Text pressed");

  const regulationsRaw = "Place in recycling. Empty and rinse. Leave cap on.";
  const regulationsArr = regulationsRaw.split(". ");

  return (
        <SafeAreaView style={styles.container}>  
        <Image style={styles.x} source={require('../assets/x.png')}/>
        <View style={styles.contentArea} >
            <View style={styles.imageContainer}>

            </View>
            <Text style={styles.itemName}>
                Item Name Place Holder
            </Text>

            <Text style={styles.h2}>
                Recommendations
            </Text>
            
            <RecommendationsCard>
                <View style={styles.recContainer}>
                  <Image style={styles.recIcon} source={require('../assets/barcode-scan.png')}/>
                  <Text style={styles.recText}>recommendation text</Text>
                </View>
                <View style={styles.recContainer}>
                  <Image style={styles.recIcon} source={require('../assets/barcode-scan.png')}/>
                  <Text style={styles.recText}>recommendation text</Text>
                </View>
            </RecommendationsCard>

            <Text style={styles.h2}>
                Local Regulations
            </Text>

            <RecommendationsCard>
                <Text>Solid Waste Management Administration, Mayor's List, Sec II, I, c</Text>
            </RecommendationsCard>


            {/*}
            <Image source={{
                width: 300,
                height: 200,
                uri: "link"}} />
            */}
        </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FA",
  },
  contentArea: {
    flex: 1,
    top: 50,
    left: 25,
    right: 25
  },
  imageContainer: {
    width: 325,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  itemName: {
    marginTop: 20,

    color: "#2F2F2F",
    fontSize: 24,
    fontFamily: "arial",
    fontWeight: "200",
  },
  x: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 10,
    top: 25,
  },
  h2: {
    marginTop: 20,

    fontSize: 18,
    color: "#2F2F2F",
    fontFamily: "arial",
    fontWeight: "500",
  },
  recContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  recIcon: {
    width: 30,
    height: 30,
  },
  recText: {
    marginTop: 5,
    marginLeft: 12,
    fontSize: 16,
  },
});
