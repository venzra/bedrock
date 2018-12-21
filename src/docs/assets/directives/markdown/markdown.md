# Heading One

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Heading Two

Links to other pages or websites such as [Google](https://www.google.com)

### Heading Three

- List item one
- List item two
- List item three  
  Content within a list item
- List item four  
  Content within a list item
  
#### Heading Four

```
/**
 * Reduce will loop the array and multiply each value in it
 */
const multiply = (values: Array<number>): number =>
    values.reduce((current: number, next: number) =>
        current * next,
        1
    );
    
console.log('Run some simple calculations');

const first = [3, 5];
console.log(first.join(' * '), multiply(first));
// 3 * 5 - 15

const second = [3, 5, 2];
console.log(second.join(' * '), multiply(second));
// 3 * 5 * 2 - 30

const third = [3, 5, 2, 5];
console.log(third.join(' * '), multiply(third));
// 3 * 5 * 2 * 5 - 150
```
