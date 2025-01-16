import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Image, TouchableOpacity } from "react-native";
import { ThemeProps } from "../../../theme";
import { Header } from "../../../components/Header"

export function SignInScreen() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return (
        <Box flex={1} bg="white">
            <Header/>
        </Box>
    )
}