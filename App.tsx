import { StatusBar } from "expo-status-bar";
import {
  useFonts as useOpenSans,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
} from "@expo-google-fonts/open-sans";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components";
import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [fontsLoaded] = useOpenSans({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
