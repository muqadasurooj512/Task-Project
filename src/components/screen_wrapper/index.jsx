import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
const Counter = (count) => {
   return (
        <View>
           <Button
             onPress={() => {(count + 1)}} title="Click Me"
           />
           <Text>You clicked me {count} times</Text>
       </View>
   );
}
export default Counter;