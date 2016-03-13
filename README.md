# Eight-Quarters

An logic exercise to find the least amount of times you can split 8 quarters and find the odd-one-out.

### Installation

Use `npm install` to install the dependencies. Then run `nodemon server.js`.

### How to use

You'll be using Postman to make a `GET` request at `localhost:8080/quarters` using two parameters `first` and `second`. Each take in numbers seperated by commas, for ex. `1,2,3`.

Your goal is to find which index in the quarter array is the odd-one-out. You have 3 tries, but if you can do it in 2, you've solved the logic problem!

After 3 tries, the quarter array will reset and randomize itself.