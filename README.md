# Express.js Unhandled Asynchronous Error

This repository demonstrates a common issue in Express.js applications: unhandled errors in asynchronous operations leading to server crashes.

## Bug Description

The `bug.js` file contains an Express.js server with an asynchronous operation (`someAsyncOperation`). This operation randomly fails, simulating a real-world scenario where unexpected errors can occur.  The current error handling only logs the error to the console, resulting in the server crashing when the asynchronous operation fails.

## Solution

The `bugSolution.js` file provides a solution by using a more robust error handling mechanism.  It uses a `try...catch` block within the asynchronous operation's `.then()` and handles exceptions explicitly.