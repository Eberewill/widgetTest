import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BinanceIcon } from "../../../assets/Icons";

const NetworkIndicator = () => {
  const buttonBgColor = useColorModeValue("#EBF6FE", "");
  const textColor = useColorModeValue("#333333", "#4CAFFF");

  return (
    <>
      <Button
        _hover={{ bgColor: buttonBgColor }}
        _active={{ bgColor: buttonBgColor }}
        bgColor={buttonBgColor}
      >
        <Flex alignItems="center">
          <Box mr={2}>
            <BinanceIcon />
          </Box>
          <Text textColor={textColor} fontSize="14px">
            BSC
          </Text>
        </Flex>
      </Button>
    </>
  );
};

export default NetworkIndicator;
