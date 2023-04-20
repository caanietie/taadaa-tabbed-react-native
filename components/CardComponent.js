import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleElement from '../elements/TitleElement';
import TaskComponent from './TaskComponent';

export default function CardComponent(props) {
    const { title, description, tasks, cardId,
        setAction, color: borderLeftColor } = props;
    const [visible, setVisible] = useState(false);
    useEffect(() => setVisible(false), [cardId]);
    return (
        <View style={[styles.cardComponent, { borderLeftColor }]}>
            <View style={styles.titleDesc}>
                <TitleElement title={title}
                    cardId={cardId} setAction={setAction}
                    setExpand={setVisible} visible={visible}
                />
                <Text style={styles.desc}>{description}</Text>
            </View>
            <TaskComponent cardId={cardId}
                tasks={tasks} visible={visible}
                setAction={setAction}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardComponent: {
        padding: 8,
        borderRadius: 5,
        marginVertical: 3,
        borderLeftWidth: 4,
        borderLeftStyle: 'solid',
        backgroundColor: 'ghostwhite',
    },
    titleDesc: {
        marginBottom: 8,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomStyle: 'dashed',
        borderBottomColor: 'lightgrey',
    },
    desc: {
        fontSize: 18,
        userSelect: 'none',
    },
});
