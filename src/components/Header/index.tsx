import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Image, TouchableOpacity } from "react-native";
import { ThemeProps } from "../../theme";

export function Header() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return (
        <Box 
            width={"100%"} 
            height={100} 
            bg="white"
            marginTop={"xl"} 
            flexDirection="row"
            alignItems="center"
        >
            <TouchableOpacity>
                <Box
                    width={40}
                    height={40}
                    bg="lightGreen"
                    borderRadius={9}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        source={require("../../assets/png/coshell_icon.png")}
                        resizeMode="cover"
                    />
                </Box>
            </TouchableOpacity>
            <Text color="black" fontSize={34} variant="medium" paddingLeft="l">CoShell</Text>
        </Box>
    )
}