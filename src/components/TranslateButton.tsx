import { Button, Text,useBreakpointValue } from "@chakra-ui/react";

export function TranslateButton(){
    const isWideVersion = useBreakpointValue({
        base: true,
        lg: false,
    })
    
 
    if(!isWideVersion){
return(

    <Button >
    <Text mt={1}>PT-BR</Text>
</Button>
)

    }
    
        return(
            <Button >
            <Text mt={1}>PT</Text>
        </Button>
        )
  
    
}