import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";

export function Separator(){
    const Box = createBox<ThemeProps>();
    const Text = createText<ThemeProps>();

    return(
        <Box flexDirection="row" alignItems="center">
            <Box
                bg="lightGreen"
                height={1}
                width={150}
            />
            <Text variant="regular" color="darkBlue" paddingHorizontal="s">OR</Text>
            <Box
                bg="lightGreen"
                height={1}
                width={150}
            />
        </Box>
    )
}