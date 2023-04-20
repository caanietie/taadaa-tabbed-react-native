import { Image, StyleSheet, Text, View } from 'react-native';
import infoIcon from '../images/info-grey@32.png';

export default function EmptyContainer() {
    return (
        <View style={styles.emptyContainer}>
            <Image source={infoIcon}
                style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>
                Collection is empty
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        borderWidth: 1,
        borderRadius: 6,
        marginVertical: 20,
        paddingVertical: 40,
        borderColor: 'lightgrey',
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginVertical: 30,
        marginHorizontal: 'auto',
    },
    textStyle: {
        fontSize: 25,
        color: 'lightgrey',
        userSelect: 'none',
        textAlign: 'center',
    },
});
