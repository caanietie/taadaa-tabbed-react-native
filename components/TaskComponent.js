import { StyleSheet } from 'react-native';
import { constants } from '../data/constants';
import TaskItemComponent from './TaskItemComponent';
import TaskInputElement from '../elements/TaskInputElement';

export default function TaskComponent(props) {
    const { cardId, setAction, tasks, visible } = props;
    let tasksComponent;
    if (visible)
        tasksComponent = tasks.map((task, k) => (
            <TaskItemComponent key={k}
                setAction={setAction}
                cardId={cardId} taskId={task.id}
                done={task.done} name={task.name}
            />
        )).concat(
            <TaskInputElement createTask={name =>
                setAction({
                    payload: { cardId, name },
                    type: constants.CREATE_TASK
                })}
            />
        );
    return (<>{tasksComponent}</>);
}

const styles = StyleSheet.create({
});
