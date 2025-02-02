import React, { useState } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

export function ChangePassword() {
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    const [password, setPassword] = useState<string>(null);
    const [confirmPassword, setConfirmPassword] = useState<string>(null);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Box flex={1} bg="white" paddingHorizontal="m" justifyContent="space-between">
                <Box>
                    <Header/>
                    <Box>
                        <Text variant="medium" fontSize={20} color="black">CHANGE PASSWORD</Text>
                        <Text variant="regular" fontSize={14} color="darkGray" lineHeight={18} marginTop="s">
                        Create a new, strong password that you don’t use before
                        </Text>
                        <Box marginTop="l" height={120} justifyContent="space-between">
                            <Input keyboardType="default" placeholder="Create Password" value={password} setValue={setPassword}/>
                            <Input keyboardType="default" placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword}/>
                        </Box>
                        <Box flexDirection="row" alignItems="center" justifyContent="flex-start" marginTop="m">
                        <Text variant="medium" fontSize={12} color="darkBlue">At least 8 characters</Text>
                    </Box>
                    </Box>
                </Box>
                
                <Box marginTop="l" marginBottom="xl">
                    <Button title="CHANGE PASSWORD" onPress={() => console.log('press')} bg="lightGreen"/>
                </Box>
            </Box>
        </KeyboardAvoidingView>
    )
}