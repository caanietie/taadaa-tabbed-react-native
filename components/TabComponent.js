import { ScrollView, StyleSheet } from 'react-native';
import CardComponent from './CardComponent';
import EmptyContainer from '../containers/EmptyContainer';

export default function TabComponent(props) {
    const { cards, setAction } = props;
    let cardComponent = cards.length === 0 ?
        <EmptyContainer /> :
        cards.map((card, k) => (
            <CardComponent key={k}
                setAction={setAction}
                description={card.description}
                tasks={card.tasks} cardId={card.id}
                title={card.title} color={card.color}
            />
        ));
    return (
        <ScrollView style={styles.tabComponent}>
            {cardComponent}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tabComponent: {
        width: '96%',
        marginHorizontal: 'auto',
    },
});
