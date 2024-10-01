const express = require('express');
const { stringArrToNumsArr, calculateMean, calculateMedian, calculateMode } = require('./calculate');
const ExpressError = require('./expressError');

const app = express();

// Home Route
app.get('/', (req, res) => {
    return res.send("Welcome to Express Calculator")
})

// Mean Route
app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Should be a query key of nums with a comma-separated list of numbers.', 400);
    }

    let numsToStr = req.query.nums.split(',');
    let nums = stringArrToNumsArr(numsToStr);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        value: calculateMean(nums)
    }
    return res.send(result);
});


// Median Route
app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Should be a query key of nums with a comma-separated list of numbers.', 400);
    }

    let numsToStr = req.query.nums.split(',');
    let nums = stringArrToNumsArr(numsToStr);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'median',
        value: calculateMedian(nums),
    };

    return res.send(result);
});


// Mode Route
app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Should be a query key of nums with a comma-separated list of numbers.', 400);
    }

    let numsToStr = req.query.nums.split(',');
    let nums = stringArrToNumsArr(numsToStr);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mode',
        value: calculateMode(nums),
    };

    return res.send(result);
});


// All Route
app.get('/all', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('Should be a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsToStr = req.query.nums.split(',');
    let nums = stringArrToNumsArr(numsToStr);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let result = {
        operation: "all",
        mean: calculateMean(nums),
        median: calculateMedian(nums),
        mode: calculateMode(nums)
    }

    return res.send(result);
});

/////////////////////////////////////  Error Handler  //////////////////////////////////////

// 404 handler is no other next matches
app.use((req, res, next) => {
    const err = new ExpressError('Page Not Found', 404);
    next(err);
});

// General Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        Error: err.message,
    });
});



app.listen(3000, function () {
    console.log('Server running on port 3000');
})