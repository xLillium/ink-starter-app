// Terminal escape sequences for entering and exiting the alternate screen buffer
const enterAltScreenCommand = "\x1b[?1049h";
const leaveAltScreenCommand = "\x1b[?1049l";
const clearScreenCommand = "\x1b[2J";
const cursorHomeCommand = "\x1b[H";

// Function to enter the alternate screen
export function enterAltScreenBuffer() {
	process.stdout.write(enterAltScreenCommand);
	process.stdout.write(clearScreenCommand); // Clear screen upon entering
	process.stdout.write(cursorHomeCommand);  // Reset cursor position
}

// Function to clean up and leave the alternate screen buffer
export function leaveAltScreenBuffer() {
	process.stdout.write(leaveAltScreenCommand);
	process.stdout.write("\n"); // Ensure the cursor is released
}
