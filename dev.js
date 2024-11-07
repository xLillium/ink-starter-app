import { exec } from 'child_process';

// Start the Babel process in watch mode
const babelProcess = exec('babel --out-dir=dist --watch source');

// Listen to the standard output of Babel and trigger `chmod` after recompilation
babelProcess.stdout.on('data', (data) => {
  const output = data.toString();

  // Check if Babel has completed a recompilation
  if (output.includes('Successfully compiled')) {
    console.log('Babel finished recompiling. Executing chmod...');

    // Run chmod on dist/cli.js
    exec('chmod +x dist/cli.js', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
      } else {
        console.log(`chmod executed successfully: ${stdout}`);
      }
    });
  }
});

// Pipe Babel's stdout and stderr to the console for visibility
babelProcess.stdout.pipe(process.stdout);
babelProcess.stderr.pipe(process.stderr);

