import { Box, Collapse, VStack, HStack, Text, IconButton, Alert, CloseIcon } from 'native-base';
import React from 'react'


export const ErrorBadge = () => {

  const [show, setShow] = React.useState(true);

  
  return <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert maxW="400" status="error">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">

                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  Please try again later!
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGray.600"
            }} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              Your coupon could not be processed at this time.
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>;
}
