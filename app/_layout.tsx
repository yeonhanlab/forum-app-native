import { Slot } from "expo-router";
import "../styles/global.css";
import { useThemeStore } from "@/stores/theme/useThemeStore";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { View } from "react-native";

export default function RootLayout() {
    const { theme } = useThemeStore();

    const { setColorScheme } = useColorScheme();

    useEffect(() => {
        setColorScheme(theme);
    }, [theme, setColorScheme]);

    return (
        <View className={theme}>
            <Slot />
        </View>
    );
}
