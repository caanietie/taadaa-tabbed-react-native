import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CheckBoxElement(props) {
    const { check, toggleTask } = props;
    const [backgroundColor, color, borderWidth] = check ?
        ['dodgerblue', 'white', 0] : ['initial', 'initial', 2];
    return (
        <TouchableOpacity onPress={() => toggleTask()}
            style={[styles.checkBoxElement, {
                backgroundColor, borderWidth
            }]}
        >
            <Text style={[styles.checkmark, { color }]}>
                {check ? '✓' : ''}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkBoxElement: {
        width: 18,
        height: 18,
        borderRadius: 4,
        cursor: 'pointer',
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmark: {
        fontSize: 16,
        userSelect: 'none',
        fontWeight: 'bolder',
    },
});
