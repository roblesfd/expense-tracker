import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts as useOpenSans,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
} from "@expo-google-fonts/open-sans";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useOpenSans({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import { initializeApp, credential, ServiceAccount } from "firebase-admin";
// import * as serviceAccount from "./expense-tracker-32cee-firebase-adminsdk-yya74-8ab9a97546.json";
// initializeApp({
//   credential: credential.cert(serviceAccount as ServiceAccount),
// });

// useEffect(() => {
//   async function prepare() {
//     try {
//       const [fontsLoaded] = useOpenSans({
//         OpenSans_300Light,
//         OpenSans_400Regular,
//         OpenSans_500Medium,
//       });
//       useMyFonts(fontsLoaded);
//     } catch (e) {
//       console.warn(e);
//     } finally {
//       setAppIsReady(true);
//     }
//   }
//   prepare();
// }, []);

// const onLayoutRootView = useCallback(() => {
//   if (appIsReady) {
//     SplashScreen.hide();
//   }
// }, [appIsReady]);

// if (!appIsReady) {
//   return null;
// }
