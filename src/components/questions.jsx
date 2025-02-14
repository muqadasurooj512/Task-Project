
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Delete from "../../assets/svg/delete.svg"; 
import Add from "../../assets/svg/add3.svg"
import Cross from "../../assets/svg/cross2.svg"
const QuestionComponent = () => {

    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([""]);
    const [isAddingSecondQuestion, setIsAddingSecondQuestion] = useState(false); 
    const addNewQuestion = () => {
        setQuestion("");
        setOptions([""]);
        setIsAddingSecondQuestion(true); 
    };
    const addOption = () => {
        setOptions([...options, ""]);
    };

    const updateOption = (text, index) => {
        const newOptions = [...options];
        newOptions[index] = text;
        setOptions(newOptions);
    };

    const deleteOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    const deleteQuestion = () => {
        if (isAddingSecondQuestion) {
            setQuestion("");
            setOptions([""]);
            setIsAddingSecondQuestion(false); 
        }
    }
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                {/* Cancel new question */}
                <TouchableOpacity onPress={deleteQuestion} disabled={!isAddingSecondQuestion}
                    style={[, { opacity: isAddingSecondQuestion ? 1 : 0.5 }]}
                >
                   <Cross width={moderateScale(24)} height={moderateScale(24)} />
                </TouchableOpacity>
                <TextInput
                    style={styles.headerText}
                    placeholder="What’s your question?"
                    placeholderTextColor="#AAAAAA"
                    value={question}
                    onChangeText={setQuestion}
                    multiline={true}
                />
                <TouchableOpacity onPress={addNewQuestion} style={styles.iconContainer}>
                    <Add width={moderateScale(20)} height={moderateScale(20)} />
                </TouchableOpacity>
            </View>

            {/* Options Section */}
            <View style={styles.optionsWrapper}>
                {options.map((option, index) => (
                    <View key={index} style={styles.optionContainer}>
                        <TextInput
                            style={styles.optionInput}
                            placeholder="Option"
                            placeholderTextColor="#AAAAAA"
                            value={option}
                            onChangeText={(text) => updateOption(text, index)}
                        />
                        <TouchableOpacity onPress={() => deleteOption(index)} style={styles.deleteIconContainer}>
                            <Delete width={moderateScale(15)} height={moderateScale(18)} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <View style={styles.addoptionsWrapper}>

                <TouchableOpacity style={styles.addButton} onPress={addOption}>
                    <Text style={styles.addButtonText}>Add Option</Text>
                    <Add width={moderateScale(15)} height={moderateScale(15)} />
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: moderateScale(15),
        marginBottom: verticalScale(20), 
        marginTop: verticalScale(10),
    },
    headerText: {
        color: "#FFF",
        fontSize: 20, 
        fontFamily: "Avenir-LT-Std-85-Heavy",
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
        marginBottom: moderateVerticalScale(15),
        marginHorizontal: moderateScale(35)
    },
    optionInput: {
        color: "#FFF",
        fontSize: 16,
        lineHeight: moderateScale(20),
        fontFamily: "Avenir-LT-Std-35-Light",
        letterSpacing: 0,
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
        marginBottom: moderateVerticalScale(20),
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 14, 
        marginRight: 8, 
        fontFamily: "Avenir-LT-Std-35-Light",
        textAlign: "center",
    },

    maxOptionsText: {
        color: "#FF4444",
        fontSize: moderateScale(14), 
        textAlign: "center",
        marginTop: verticalScale(5), 
    },
});


export default QuestionComponent;