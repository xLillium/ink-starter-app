import React from 'react';
import { Text, useInput } from 'ink';

export default function App({ name = 'Stranger' }) {
	useInput((input, key) => {
		if (input === 'q') {
			setMessage("You pressed 'q'. Exiting...");
			process.exit();
		} else {
			console.log(key.return ? "Enter pressed" : "Key pressed : " + input);
		}
	});

	return (
		<Text>
			Hello, <Text color="green">{name}</Text>
		</Text>
	);
}
