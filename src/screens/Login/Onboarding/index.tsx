import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Image, TouchableOpacity } from "react-native";
import { ThemeProps } from "../../../theme";

export function Onboarding() {
    const Box = createBox<ThemeProps>();

    return (
        <Box flex={1} bg="white">
            <Image
                style={{ width: "100%", backgroundColor: 'yellow' }}
                source={require("../../../assets/png/imageBackground.png")}
            />
            <TouchableOpacity
                style={{ width: 80, height: 80, backgroundColor: '#34E0A1', borderRadius: 15 }}
            >
            </TouchableOpacity>
        </Box>
    )
}