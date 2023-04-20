import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ExpandElement(props) {
	const { visible, setVisible } = props;
	let transform = visible ? 'rotate(90deg)' : 'none';
	return (
		<TouchableOpacity onPress={() => setVisible()}
			style={[styles.expandElement, { transform }]}
		>
			<Text style={styles.expandText}>{'  》'}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	expandElement: {
		width: 30,
		height: 30,
		marginRight: 'auto',
		borderRadius: '50%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'lightgrey',
	},
	expandText: {
		fontSize: 18,
		userSelect: 'none',
		fontWeight: 'bolder',
	},
});
