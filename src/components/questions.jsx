
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Delete from "../../assets/svg/delete.svg";
import Add from "../../assets/svg/add3.svg";
import Cross from "../../assets/svg/cross2.svg";

const QuestionComponent = ({ questions, setQuestions, isAddNewQuestionDisabled }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the active question
    
    const addNewQuestion = () => {
        if (questions.length < 5) { // Allow adding only if there are fewer than 5 questions
            const updatedQuestions = [...questions, { question: "", options: ["", ""] }];
            setQuestions(updatedQuestions);
            setCurrentQuestionIndex(questions.length); // Set new question as the current active one
        }
    };
  
    const updateQuestion = (text, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = text;
        setQuestions(updatedQuestions);
    };
  
    const addOption = (qIndex) => {
        if (questions[qIndex].options.length < 5) {
            const updatedQuestions = [...questions];
            updatedQuestions[qIndex].options.push("");
            setQuestions(updatedQuestions);
        }
    };
  
    const updateOption = (text, qIndex, optIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[optIndex] = text;
        setQuestions(updatedQuestions);
    };
  
    const deleteOption = (qIndex, optIndex) => {
        if (questions[qIndex].options.length > 2) {
            const updatedQuestions = [...questions];
            updatedQuestions[qIndex].options.splice(optIndex, 1);
            setQuestions(updatedQuestions);
        }
    };
  
    const deleteQuestion = (index) => {
        if (questions.length > 1) {
            const updatedQuestions = questions.filter((_, i) => i !== index);
            setQuestions(updatedQuestions);
            setCurrentQuestionIndex(Math.max(index - 1, 0)); // Update current question index
        }
    };
  
    return (
        <View style={styles.container}>
            {/* Render only the active question */}
            <View key={currentQuestionIndex} style={styles.questionContainer}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity 
                        onPress={() => deleteQuestion(currentQuestionIndex)} 
                        disabled={questions.length === 1}
                        style={{ opacity: questions.length === 1 ? 0.5 : 1 }}
                    >
                        <Cross width={moderateScale(24)} height={moderateScale(24)} />
                    </TouchableOpacity>
  
                    <TextInput
                        style={styles.headerText}
                        placeholder="What’s your question?"
                        placeholderTextColor="#AAAAAA"
                        value={questions[currentQuestionIndex].question}
                        onChangeText={(text) => updateQuestion(text, currentQuestionIndex)}
                        multiline={true}
                    />
                    
                    <TouchableOpacity 
                        onPress={addNewQuestion} // Add a new question only if less than 5 questions
                        style={styles.iconContainer}
                        disabled={isAddNewQuestionDisabled}  // Disable the button if there are 5 questions
                    >
                        <Add width={moderateScale(20)} height={moderateScale(20)} />
                    </TouchableOpacity>
                </View>
  
                <View style={styles.optionsWrapper}>
                    {questions[currentQuestionIndex].options.map((option, optIndex) => (
                        <View key={optIndex} style={styles.optionContainer}>
                            <TextInput
                                style={styles.optionInput}
                                placeholder="Option"
                                placeholderTextColor="#AAAAAA"
                                value={option}
                                onChangeText={(text) => updateOption(text, currentQuestionIndex, optIndex)}
                            />
                            {questions[currentQuestionIndex].options.length > 2 && (
                                <TouchableOpacity onPress={() => deleteOption(currentQuestionIndex, optIndex)} style={styles.deleteIconContainer}>
                                    <Delete width={moderateScale(15)} height={moderateScale(18)} />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                </View>
  
                {questions[currentQuestionIndex].options.length < 5 && (
                    <TouchableOpacity style={styles.addButton} onPress={() => addOption(currentQuestionIndex)}>
                        <Text style={styles.addButtonText}>Add Option</Text>
                        <Add width={moderateScale(15)} height={moderateScale(15)} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: { backgroundColor: "#000" },
    questionContainer: { marginBottom: verticalScale(20) },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: moderateScale(15),
        marginBottom: verticalScale(10),
    },
    headerText: {
        color: "#FFF",
        fontSize: 20,
        flex: 1,
        textAlign: "center",
        marginRight: scale(10),
    },
    iconContainer: { padding: 5, borderWidth: 1.12, borderRadius: 10 },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#222",
        borderRadius: moderateScale(43),
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(5),
        justifyContent: "space-around",
        marginBottom: moderateVerticalScale(10),
        marginHorizontal: moderateScale(35)
    },
    optionInput: {
        color: "#FFF",
        fontSize: 16,
        flex: 1,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: scale(2),
        borderColor: "#FFF",
        borderRadius: moderateScale(43),
        paddingVertical: verticalScale(12),
        marginHorizontal: moderateScale(40),
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 14,
        marginRight: 8,
        textAlign: "center",
    },
});

export default QuestionComponent;
