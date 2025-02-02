import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { TextInput, KeyboardType } from "react-native";
import { ThemeProps } from "../../theme";

interface IInput {
    placeholder: string;
    keyboardType: KeyboardType;
    value: string;
    setValue: (value: string) => void;
}

export function Input(data: IInput) {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return (
        <Box 
            width="100%"
            height={48} 
            bg="lightGray"
            borderRadius={8}
            justifyContent="center" 
        >
            <TextInput
                placeholder={data.placeholder}
                placeholderTextColor={"#4A4863"}
                style={{ height: 30, width: "100%", paddingHorizontal: 16 }}
                keyboardType={data.keyboardType}
                value={data.value}
                onChangeText={(value: string) => data.setValue(value)}
            />
        </Box>
    )
}