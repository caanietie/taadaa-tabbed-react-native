import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../data/constants';
import ExpandElement from './ExpandElement';
import PenElement from './PenElement';
import DeleteElement from './DeleteElement';
import ForwardElement from './ForwardElement';

export default function TitleElement(props) {
    const { cardId, title, setAction, setExpand, visible } = props;
    return (
        <View>
            <View style={{
                flexDirection: 'row', justifyContent: 'flex-end',
            }}>
                <ExpandElement visible={visible}
                    setVisible={() => setExpand(!visible)}
                />
                <PenElement updateCard={() =>
                    setAction({
                        payload: { cardId },
                        type: constants.NEW_CARD
                    })}
                />
                <DeleteElement deleteCard={() =>
                    setAction({
                        type: constants.DELETE_CARD,
                        payload: { cardId, askDelete: true }
                    })}
                />
                <ForwardElement updateCardStatus={() =>
                    setAction({
                        type: constants.UPDATE_STATUS,
                        payload: { cardId, askUpdate: true }
                    })}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        padding: 4,
        fontSize: 20,
        userSelect: 'none',
    },
});
