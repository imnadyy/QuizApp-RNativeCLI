import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Platform, StatusBar, StyleSheet } from 'react-native';
import quizService from './quizService/index';
import QuestionBox from './screens/questionBox';
import Result from './screens/result';
import H1 from './components/appText';

const App = () => {
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

  const getQuestions = () => {
    quizService().then(question => {
      setQuestionBank(question);
    })
  }

  useEffect(() => {
    getQuestions();
  }, [])

  const computeAnswer = (answer, correctAnswer) => {
    if (answer == correctAnswer) {
      setScore(score + 1);
    }

    setResponses(responses < 5 ? responses + 1 : 5);
  }

  const playAgain =_=> {
    getQuestions();
    setScore(0);
    setResponses(0);
  }

  return ( 
    <SafeAreaView style={styles.container}>
         <H1>Quiz App</H1>
        {responses < 5 ? (<FlatList 
          data={questionBank}
          keyExtractor={item => item.questionId}
          renderItem={({ item }) => (
            <QuestionBox question={item.question} 
            key={item.questionId}
            options={item.answers}
            selected={answer => computeAnswer(answer, item.correct)} /> 
            )}/>) : <Result score={score} playAgain={playAgain} />
          }
     </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
 
export default App;