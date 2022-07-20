import { Button, Text,useBreakpointValue } from "@chakra-ui/react";
import i18next from "i18next";
import { useState } from "react";


export function TranslateButton(){
    const isWideVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    const [language, setLanguage] = useState("en-us")

    function handleChangeLanguage(){
        if(language === 'en-us'){
            setLanguage('pt-BR')
        }else{
            setLanguage('en-us')
        }

        i18next.changeLanguage(language)
    }
    
 
    if(!isWideVersion){
return(

    <Button 
    onClick={() => handleChangeLanguage()}
    >
    <Text mt={1}>{language.toUpperCase()}</Text>
</Button>
)

    }
    
        return(
            <Button 
            onClick={() => handleChangeLanguage()}
            >
            <Text mt={1} fontSize="0.9rem">{language.substring(0,2).toUpperCase()}</Text>
        </Button>
        )
  
    
}