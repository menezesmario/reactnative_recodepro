
import React from 'react'
import { View } from 'react-native'

import TextCenter from '../components/TextCenter'
import BtnMenu from  '../components/BtnMenu'

const Home = (props) => {
    return (
        <View style={{flex: 1}}>
            <BtnMenu navigation={props.navigation}/>
            <TextCenter text="Home" />            
        </View>
    );
};

export default Home

