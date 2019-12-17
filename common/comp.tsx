import React from 'react'
import {View, Text} from 'react-native'

export const Comp = (props: { greeting: string }) =>
    <View>
        <Text>{props.greeting}, from Comp</Text>
    </View>
