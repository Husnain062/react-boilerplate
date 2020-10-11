import cp from 'child_process';
import execa from 'execa';

export const spawn = (command, args, options) =>
  execa(command, args, {
    stdio: ['ignore', 'inherit', 'inherit'],
    ...options,
  });

export const exec = (command, options) =>
  new Promise((resolve, reject) => {
    cp.exec(
      command,
      {
        stdio: ['ignore', 'inherit', 'inherit'],
        ...options,
      },
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
          return;
        }

        resolve({ stdout, stderr });
      },
    );
  });

export default { spawn, exec };
