import React, { PureComponent } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigationToStudyPage() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Welcome, {"\n"}
        <Text style={styles.titleBold}>What would you like ?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigationToStudyPage}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigationToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Give Classes</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total of 285 connections already made <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
