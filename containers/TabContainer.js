import { useState } from 'react';
import { PanResponder, StyleSheet, View } from 'react-native';
import { constants } from '../data/constants';
import HeaderComponent from '../components/HeaderComponent';
import TabComponent from '../components/TabComponent';

export default function TabContainer(props) {
    const { cards, setAction } = props;
    const [status, setStatus] = useState(constants.CARD_TODO);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (evt, gestureState) => {
            if (Math.abs(gestureState.dx) >= 100 && Math.abs(gestureState.dy) <= 50) {
                if (gestureState.dx > 0 && status !== constants.CARD_COMPLETED) {
                    // Swipe right action
                    if (status === constants.CARD_TODO)
                        setStatus(constants.CARD_IN_PROGRESS)
                    else if (status === constants.CARD_IN_PROGRESS)
                        setStatus(constants.CARD_COMPLETED)
                }
                else if (gestureState.dx < 0 && status !== constants.CARD_TODO) {
                    // Swipe left action
                    if (status === constants.CARD_COMPLETED)
                        setStatus(constants.CARD_IN_PROGRESS)
                    else if (status === constants.CARD_IN_PROGRESS)
                        setStatus(constants.CARD_TODO)
                }
            }
        },
    });

    const tabComponent = (
        <TabComponent setAction={setAction}
            cards={cards.filter(card => card.status === status)}
        />
    );
    return (
        <View {...panResponder.panHandlers}
            style={styles.tabContainer}
        >
            <HeaderComponent status={status}
                setStatus={setStatus}
            />
            {tabComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        height: '90%',
        marginHorizontal: 'auto',
    },
});
