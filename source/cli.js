#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';
import { enterAltScreenBuffer, leaveAltScreenBuffer } from './utils/terminalUtils.js';

const cli = meow(
	`
		Usage
		  $ ink-starter-app

		Options
			--name  Your name

		Examples
		  $ ink-starter-app --name=Jane
		  Hello, Jane
	`,
	{
		importMeta: import.meta,
	},
);

// Enter the alternate screen buffer when the app starts
enterAltScreenBuffer();

// Set up cleanup handlers for various scenarios (exit, interrupt, uncaughtException)
process.on('exit', leaveAltScreenBuffer);
process.on('SIGINT', () => {
	leaveAltScreenBuffer();
	process.exit();
});
process.on('uncaughtException', (err) => {
	console.error('Unhandled exception:', err);
	leaveAltScreenBuffer();
	process.exit(1);
});

render(<App name={cli.flags.name} />);
