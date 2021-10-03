import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MajorButton = ({ title, onPress }) => {
    return ( 
        <TouchableOpacity style={styles.majorButton} onPress={onPress}>
            <Text style={styles.majorText} >{title}</Text>
        </TouchableOpacity>
     );
}

const MinorButton = ({ title, onPress }) => {
    return ( 
        <TouchableOpacity style={styles.minorButton} onPress={onPress}>
            <Text style={styles.minorText} >{title}</Text>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    majorButton: {
        backgroundColor: 'tomato',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 20,
        minWidth: 40
    },
    majorText: {
        color: 'white', 
        fontSize: 18,
        textTransform: 'uppercase'
    },

    minorButton: {
        backgroundColor: 'tomato',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 10,
        minWidth: 30
    },
    minorText: {
        color: 'white', 
        fontSize: 15,
        textTransform: 'uppercase'
    }
})
 
export default MajorButton;
export { MinorButton }; 