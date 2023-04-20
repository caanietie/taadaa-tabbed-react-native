import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
    createCard, deleteCard, getCards, updateCard,
    toggleTask, createTask, deleteTask, getCardById,
    updateCardStatus
} from '../data/cards';
import iconHeader from '../images/icon-blue@64.png';
import { constants } from '../data/constants';
import CardContainer from './CardContainer';
import TabContainer from './TabContainer';
import PlusElement from '../elements/PlusElement';
import DeleteContainer from './DeleteContainer';
import ForwardContainer from './ForwardContainer';

export default function AppContainer() {
    const [action, setAction] = useState({});
    let modalContainer;
    if (action.type === constants.NEW_CARD) {
        let cardInfo = {
            color: 'coral', description: '',
            status: constants.CARD_TODO, title: ''
        };
        if (action.payload) { // card update
            const { id, status, description, title,
                color } = getCardById(action.payload.cardId);
            cardInfo = { id, status, color, description, title };
        }
        modalContainer = (
            <CardContainer cardInfo={cardInfo}
                setAction={setAction}
            />
        );
    }
    else if (action.type === constants.CREATE_CARD)
        createCard(action.payload.card);
    else if (action.type === constants.UPDATE_CARD)
        updateCard(action.payload.cardId, action.payload.card);
    else if (action.type === constants.UPDATE_STATUS)
        if (action.payload.askUpdate) modalContainer = (
            <ForwardContainer setAction={setAction}
                cardId={action.payload.cardId}
                currentStatus={getCardById(action.payload.cardId).status}
            />
        );
        else updateCardStatus(action.payload.cardId, action.payload.status);
    else if (action.type === constants.DELETE_CARD)
        if (action.payload.askDelete) modalContainer = (
            <DeleteContainer setAction={setAction}
                cardId={action.payload.cardId}
            />
        );
        else deleteCard(action.payload.cardId);
    else if (action.type === constants.TOGGLE_TASK)
        toggleTask(action.payload.cardId, action.payload.taskId);
    else if (action.type === constants.CREATE_TASK)
        createTask(action.payload.cardId, action.payload.name);
    else if (action.type === constants.DELETE_TASK)
        deleteTask(action.payload.cardId, action.payload.taskId);

    const cards = getCards();
    return (
        <View style={styles.appContainer}>
            <View style={styles.appIcon}>
                <View style={styles.appImageText}>
                    <Image source={iconHeader}
                        style={styles.appImage}
                    />
                    <Text style={styles.appText}>TaaDaa</Text>
                </View>
                <PlusElement setAction={setAction} />
            </View>
            <TabContainer cards={cards}
                setAction={setAction}
            />
            {modalContainer}
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        width: '98%',
        height: '98%',
    },
    appIcon: {
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appImageText: {
        flexDirection: 'row',
    },
    appImage: {
        width: 32,
        height: 32,
        marginLeft: 10,
    },
    appText: {
        fontSize: 30,
        marginLeft: 5,
        userSelect: 'none',
        fontWeight: 'bolder',
        fontFamily: 'Ubuntu, Dyuthi'
    },
});
