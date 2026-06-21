import { User } from "@/types/user";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";


type AuthState = {
    isLoggedIn: boolean;
    token: string | null;
    user: User | null;

    login: (user: User, token: string) => void;
    logout: VoidFunction;
};

const storage =
    Platform.OS === "web"
        ? createJSONStorage(() => localStorage)
        : createJSONStorage(() => AsyncStorage);

export const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            isLoggedIn: false,
            token: null,
            user: null,
            login: (user: User, token: string) => set({ isLoggedIn: true, token, user }),
            logout: () => set({ isLoggedIn: false, token: null, user: null }),
        }),
        { name: "auth-storage", storage },
    ),
);
