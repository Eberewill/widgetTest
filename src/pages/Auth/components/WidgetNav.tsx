import { Box, Flex, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import NetworkIndicator from './NetworkIndicator'

const WidgetNav = () => {
    
  const mode = useColorModeValue("light", "dark");
  return (
   <>
   <Flex>
              <Text
                fontSize="20px"
                fontWeight={700}
                color={mode === "dark" ? "white" : "#000000"}
              >
                RigelProtocol P2P Widget
              </Text>

              <Box mx={4} mt={2}>
                <svg
                  width="1"
                  height="23"
                  viewBox="0 0 1 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0.5" y1="20" x2="0.5" stroke="#E7E9E8" />
                </svg>
              </Box>

              <NetworkIndicator />

              <Spacer />
              <Box cursor={"pointer"}>
                <svg
                  width="28"
                  height="34"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="34" rx="2.8156" fill="#F7F7F7" />
                  <path
                    d="M21.5142 10.5387H7.51424C7.19535 10.5387 6.93091 10.2743 6.93091 9.9554C6.93091 9.63651 7.19535 9.37207 7.51424 9.37207H21.5142C21.8331 9.37207 22.0976 9.63651 22.0976 9.9554C22.0976 10.2743 21.8331 10.5387 21.5142 10.5387Z"
                    fill="#333333"
                  />
                  <path
                    d="M21.5142 14.4274H7.51424C7.19535 14.4274 6.93091 14.163 6.93091 13.8441C6.93091 13.5252 7.19535 13.2607 7.51424 13.2607H21.5142C21.8331 13.2607 22.0976 13.5252 22.0976 13.8441C22.0976 14.163 21.8331 14.4274 21.5142 14.4274Z"
                    fill="#333333"
                  />
                  <path
                    d="M21.5142 18.3161H7.51424C7.19535 18.3161 6.93091 18.0516 6.93091 17.7327C6.93091 17.4139 7.19535 17.1494 7.51424 17.1494H21.5142C21.8331 17.1494 22.0976 17.4139 22.0976 17.7327C22.0976 18.0516 21.8331 18.3161 21.5142 18.3161Z"
                    fill="#333333"
                  />
                </svg>
              </Box>
            </Flex>
   </>
  )
}

export default WidgetNav