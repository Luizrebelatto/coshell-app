import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { TouchableOpacity, Image } from "react-native";

interface IButton {
    title: string;
    onPress: () => void;
    type: 'apple' | 'google';
}

export function ButtonWithIcon(data: IButton){
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return(
        <TouchableOpacity onPress={data.onPress}>
            <Box
                height={48}
                width="100%"
                bg="lightGray"
                borderRadius={12}
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
            >
                {data.type === "apple" ? 
                    <Image
                        source={require("../../assets/png/google-icon.png")}
                        resizeMode="cover"
                        style={{ width: 24, height: 24, marginRight: 20  }}
                    />                
                :
                    <Image
                        source={require("../../assets/png/apple-filled.png")}
                        resizeMode="cover"
                        style={{ width: 24, height: 24, marginRight: 20  }}
                    />
                }
                <Text color="black" variant="regular" fontSize={14}>{data.title}</Text>
            </Box>
        </TouchableOpacity>
    )
}