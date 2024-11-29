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

// const firebaseConfig = {
//   apiKey: "AIzaSyD86qLpKNQ2fonM4UkG2ckjaD4gF0hcR3k",
//   appId: "1080664393402",
//   projectId: "expense-tracker-32cee",
// };

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
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
