import { Text, StyleSheet, View } from "react-native";

function Title({text}){
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 12,
    }
});
export default Title;