import React, { useState } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon";
import { Separator } from "../../../components/Separator";

export function RecoverPassword() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    const [email, setEmail] = useState(null);

    return (
        <Box flex={1} bg="white" paddingHorizontal="m">
            <Header/>
            <Box>
                <Text variant="medium" fontSize={20} color="black">RECOVER PASSWORD</Text>
                <Text variant="regular" fontSize={14} color="darkGray" lineHeight={18} marginTop="s">
                Forgot your password? Don’t worry, enter your email to reset your current password.
                </Text>
                <Box justifyContent="space-between" marginTop="l">
                    <Input keyboardType="email-address" placeholder="Email" value={email} setValue={setEmail}/>
                </Box>
            </Box>
            
            <Box marginTop="l">
                <Button title="SUBMIT" onPress={() => console.log('press')} bg="lightGreen"/>
                <Box flexDirection="row" alignItems="center" justifyContent="center" marginTop="xl">
                    <Text variant="medium" fontSize={14} color="black">DON’T HAVE AN ACCOUNT?</Text>
                    <Text variant="regular" fontSize={14} color="lightGreen" lineHeight={18} marginLeft="s">
                    SIGN UP
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}