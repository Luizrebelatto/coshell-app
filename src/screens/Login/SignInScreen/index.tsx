import React, { useState } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

export function SignInScreen() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    const [email, setEmail] = useState(null)

    return (
        <Box flex={1} bg="white">
            <Header/>
            <Box paddingHorizontal="m">
                <Text variant="medium" fontSize={20} color="black">SIGN IN</Text>
                <Text variant="regular" fontSize={14} color="darkGray" lineHeight={18} marginTop="s">
                    Looks like you don’t have an account. Let’s create a new account for you.
                </Text>
            </Box>
            <Box paddingHorizontal="m" height={112} justifyContent="space-between" marginTop="l">
                <Input keyboardType="email-address" placeholder="Email"/>
                <Input keyboardType="default" placeholder="password"/>
            </Box>
        </Box>
    )
}