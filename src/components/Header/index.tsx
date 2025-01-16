import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Image, TouchableOpacity } from "react-native";
import { ThemeProps } from "../../theme";
import CoshellSVG from "../../assets/svg/coshell_icon.svg"

export function Header() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return (
        <Box 
            width={"100%"} 
            height={100} 
            bg="white"
            marginTop={"xl"} 
            paddingHorizontal="m"
            flexDirection="row"
            alignItems="center"
        >
            <TouchableOpacity
                style={{ width: 80, height: 80, backgroundColor: '#34E0A1', borderRadius: 15 }}
                
            >

            </TouchableOpacity>
            <Text color="black" fontSize={34} variant="medium" paddingLeft="l">CoShell</Text>
        </Box>
    )
}