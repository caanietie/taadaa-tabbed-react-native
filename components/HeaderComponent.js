import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { constants } from '../data/constants';

export default function HeaderComponent(props) {
    const { status: currentStatus, setStatus } = props;
    const headerComponent = constants.HEADING.map((heading, k) => {
        const status = heading === constants.TODO ? constants.CARD_TODO :
            heading === constants.COMPLETED ? constants.CARD_COMPLETED :
                constants.CARD_IN_PROGRESS;
        // dodgerblue is rgb(30, 144, 255)
        const backgroundColor = status === currentStatus ?
            'rgba(30,144,255,0.5)' : 'dodgerblue';
        return (
            <TouchableOpacity key={k}
                onPress={() => setStatus(status)}
                style={[styles.tabHeader, { backgroundColor }]}
            >
                <Text style={styles.header}>{heading}</Text>
            </TouchableOpacity >
        )
    });
    return (
        <View style={styles.headerComponent}>
            {headerComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    headerComponent: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabHeader: {
        width: '30%',
        borderRadius: 4,
        paddingVertical: 8,
        marginHorizontal: 3,
        paddingHorizontal: 5,
        // backgroundColor: 'dodgerblue',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        userSelect: 'none',
        textAlign: 'center',
    },
});
