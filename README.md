# Eight-Quarters

An logic exercise to find the least amount of times you can split 8 quarters and find the odd-one-out.

### Installation

`npm install` for dependencies

### How to use

```
node index.js
```

These are your quarters:

```
[1,2,3,4,5,6,7,8]
```

You will receive two prompts: *Left Scale* and *Right Scale* in which you will "digitally" input your quarters numbered from 1 to 8 on top to check which is heavier. 

For example [INPUT NUMBERS] no spaces or commas: 

```
leftScale: 1234
rightScale: 5678

// Returns
[1234, 5678]
[true, false]
```

Find the quarter that is the odd one out! You have 3 tries. Try to do it in 2!

If you think you know which quarter it is. Input the quarter's number in both scales to check. If you're wrong, it'll move on costing you one try. 

```
leftScale: 1
rightScale: 1

// Returns
Congratualations! You did it!
```

If you haven't solved it by the third try, the quarters will mix itself up forcing you to start again! 
