import React, { useState } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

export function VerifyCode() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    const [code, setCode] = useState<string>(null);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Box flex={1} bg="white" paddingHorizontal="m" justifyContent="space-between">
                <Box>
                    <Header/>
                    <Box>
                        <Text variant="medium" fontSize={20} color="black">VERIFY CODE</Text>
                        <Text variant="regular" fontSize={14} color="darkGray" lineHeight={18} marginTop="s">
                        An authentication code has been sent to your email
                        </Text>
                        <Box justifyContent="space-between" marginTop="l">
                            <Input keyboardType="numeric" placeholder="Enter Code" value={code} setValue={setCode}/>
                        </Box>
                        <Box flexDirection="row" alignItems="center" justifyContent="flex-start" marginTop="m">
                        <Text variant="medium" fontSize={14} color="darkBlue">Didn’t receive a code?</Text>
                        <TouchableOpacity>
                            <Text variant="regular" fontSize={14} color="darkBlue" lineHeight={18} marginLeft="s">
                            Resend
                            </Text>
                        </TouchableOpacity>
                    </Box>
                    </Box>
                </Box>
                
                <Box marginTop="l" marginBottom="xl">
                    <Button title="VERIFY" onPress={() => console.log('press')} bg="lightGreen"/>
                </Box>
            </Box>
        </KeyboardAvoidingView>
    )
}