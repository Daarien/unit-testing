import chalk from "chalk";

export const sum = (a, b) => a + b;

function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log(chalk.green("Success"));
      } else {
        console.log(chalk.red(`Value is ${value}, but expactation is ${exp}`));
      }
    }
  };
}

// expect(sum(2, 3)).toBe(4);
