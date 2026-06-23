import { View } from "react-native";
import MainHeader from "@/app/components/layouts/main/MainHeader";
import MainFooter from "@/app/components/layouts/main/MainFooter";
import { Slot } from "expo-router";

function MainLayout() {
    return (
        <View className={"flex-1"}>
            <MainHeader />
            <View className={"flex-1"}>
                <Slot />
            </View>
            <MainFooter />
        </View>
    );
}

export default MainLayout;