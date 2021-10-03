import React from 'react';
import { View } from 'react-native';
import MajorButton from '../components/appButton';
import { H5 } from '../components/appText';

const Result = ({ score, playAgain }) => {
    return ( 
        <View>
            <H5>You scored { score }/ 5 correct answers!</H5>
            <MajorButton title='Play Again' onPress={playAgain}/>
        </View>
     );
}
 
export default Result;