const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that's not enough to prevent crashes
    console.error(err);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a failure condition
    const shouldFail = Math.random() < 0.5;
    if (shouldFail) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
}