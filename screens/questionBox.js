import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native'; 
import { MinorButton } from '../components/appButton';
import { H5 } from '../components/appText';

const QuestionBox = ({ options, question, selected }) => {
    const [answer, setAnswer] = useState(options);

    return(
        <View style={styles.question}>
            <H5>{question}</H5>
            <FlatList 
                style={{ paddingBottom: 30 }}
                keyExtractor={item => item}
                data={answer}
                renderItem={({ item }) => (
                    <MinorButton title={item} onPress={() => {
                        setAnswer([item]);
                        selected(item);
                    }}/>
                )} />

        </View>
    );
}

const styles = StyleSheet.create({
    question: {
        alignItems: 'center'
    }
});

export default QuestionBox;