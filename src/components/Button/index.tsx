import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { TouchableOpacity } from "react-native";

interface IButton {
    title: string;
    onPress: () => void;
    bg: 'lightGreen' | 'transparent'
}

export function Button(data: IButton){
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return(
        <TouchableOpacity onPress={data.onPress}>
            <Box
                height={48}
                width="100%"
                bg={data.bg}
                borderRadius={12}
                justifyContent="center"
                alignItems="center"
            >
                <Text color="black" variant="medium" fontSize={14}>{data.title}</Text>
            </Box>
        </TouchableOpacity>
    )
}