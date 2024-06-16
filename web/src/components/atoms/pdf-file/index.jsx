import React from "react";
import {
  Page,
  View,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const PDFFile = ({ result, description, warning }) => {
  Font.register({
    family: "Roboto",
    src: "assets/img/Roboto-Black.ttf",
  });
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#0079CC",
      alignItems: "flex-start",
      justifyContent: "center",
      height: 40,
      top: 0,
      left: 0,
    },
    headerText: {
      color: "#ffffff",
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: "20px",
    },
    imageView: {
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
      width: "200px",
      height: "200px",
    },
    percent: {
      marginTop: 20,
      marginBottom: 20,
      display: "flex",
      justifyСontent: "center",
      alignItems: "center",
    },
    percentText: {
      fontFamily: "Roboto",
      color: "#2A4964",
      fontSize: 32,
      marginBottom: 10,
    },
    percentGray: {
      backgroundColor: "#D9D9D9",
      position: "relative",
      width: 200,
      height: 2,
    },
    percentBlue: {
      backgroundColor: "#0079CC",
      position: "absolute",
      width: 100,
      height: 4,
      left: 50,
      top: -1,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      color: "#2A4964",
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "40px",
      marginBottom: "40px",
      fontFamily: "Roboto",
    },
    danger: {
      height: "100px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0079CC",
      paddingLeft: "20px",
      paddingRight: "20px",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
    },
    dangerImage: {
      width: "70px",
      height: "70px",
      marginRight: 10,
    },
    dangetText: {
      textAlign: "justify",
      color: "#FFFFFF",
      fontWeight: "light",
      fontSize: 10,
      flex: 1,
      fontFamily: "Roboto",
    },
  });
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MoleSpector</Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.image} src={result.url} />
        </View>
        <View style={styles.percent}>
          <Text style={styles.percentText}>{`${result.percent}%`}</Text>
          <View style={styles.percentGray}>
            <View style={styles.percentBlue} />
          </View>
        </View>
        <Text style={styles.text}>{description}</Text>
        <View style={styles.danger}>
          <Image style={styles.dangerImage} src="assets/img/danger.png" />
          <Text style={styles.dangetText}>{warning}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
