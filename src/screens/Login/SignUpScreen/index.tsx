import React, { useState } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon";
import { Separator } from "../../../components/Separator";

export function SignUpScreen() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)

    return (
        <Box flex={1} bg="white" paddingHorizontal="m">
            <Header/>
            <Box>
                <Text variant="medium" fontSize={20} color="black">SIGN UP</Text>
                <Text variant="regular" fontSize={14} color="darkGray" lineHeight={18} marginTop="s">
                    Looks like you don’t have an account. Let’s create a new account for you.
                </Text>
            </Box>
            <Box height={176} justifyContent="space-between" marginTop="l">
            <Input keyboardType="default" placeholder="Name" value={name} setValue={setName}/>
                <Input keyboardType="email-address" placeholder="Email" value={email} setValue={setEmail}/>
                <Input keyboardType="default" placeholder="password" value={password} setValue={setPassword}/>
            </Box>
            <Box marginTop="l">
                <Text variant="regular" fontSize={14} color="darkGray" lineHeight={18} marginTop="s" marginBottom="l">
                    By selecting Create Account below, I agree to Terms of Service & Privacy Policy
                </Text>
                <Button title="Login" onPress={() => console.log('press')} bg="lightGreen"/>
            </Box>
            <Box alignItems="center" marginTop="l">
                <Separator/>
            </Box>
            
            <Box marginTop="l" height={128} justifyContent="space-between">
                <ButtonWithIcon title="Sign Up with Google" onPress={() => console.log('press')} type="google"/>
                <ButtonWithIcon title="Sign Up with Apple" onPress={() => console.log('press')} type="apple"/>
            </Box>
            <Box marginTop="l">
                <Button title="CONTINUE AS A GUEST" onPress={() => console.log('press')} bg="transparent"/>
            </Box>
        </Box>
    )
}