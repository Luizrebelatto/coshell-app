import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Image, View } from "react-native";
import { ThemeProps } from "../../../theme";

export function Onboarding() {
    const Box = createBox<ThemeProps>();

    return (
        <Box flex={1} bg="white">
            <Image
                style={{ width: "100%" }}
                source={require("../../../assets/png/imageBackground.png")}
            />
            <View
                style={{ 
                    width: 80, 
                    height: 80, 
                    backgroundColor: '#34E0A1', 
                    borderRadius: 15,
                    position: "absolute",
                    alignSelf: "flex-end",
                    justifyContent: "flex-start"
                }}
            >
            </View>
        </Box>
    )
}