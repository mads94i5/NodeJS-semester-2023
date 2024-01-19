/*
    JS is single-threaded (runs on a main thread)
    Thats why we want to avoid blocking code

    Asynchronous code is needed:
    over a network 
    fetch/API
    buffers; ex.: email/SMTP
    database
    CRON jobs
    file system
    user input (mouse, keyboard, event handlers)

    Asynchronous code:
    Solution 1: Callback
    Cons: Callback hell

    Solution 2: Promises
    States: 
    - Pending
    - Fulfilled
        - Resolved
        - Rejected
    Cons: More chars, difficult to read, nesting leads to pyramid of doom

    Solution 3: Async/Await

*/

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Promise resolved");
        } catch {
            reject("Promise rejected");
        }
    }, 3000);
})
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage));
*/

/* Task: Created a promisified function
that is, a function that returns a promise
it should be called myPromise 
and it should either resolve as "Something Good" or reject as "Something Bad" 
create a 2 second timeout to simulate asynchronous behavior */

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something Good");
            } catch {
                reject("Something Bad");
            }
        }, 2000);
    });
}
/*
myPromise()
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage))
*/

/* task: create a fetch function that takes a certain amount of time 
it should return some response */


function myFetch(URL, options = {}) {
    return new Promise((resolve, reject) => {
        console.log("Attempting to fetch from external API..");
        setTimeout(() => {
            resolve({ data: "Response" });
        }, 2500);
    });
}

/*
myFetch("URL")
.then((response) => response.json())
.catch((result) => console.log(result));
*/


async function main() {
    const response = await myFetch();
    const result = await response.json();
    console.log(result.data);
}
// main();

async function callMyPromise() {
    try {
        const result = await myPromise();
        console.log(result);
    } catch (error) {
        Error(error);
    }
}
// callMyPromise();

async function handleAllPromises() {
    try {
        const results = await Promise.all([myFetch(), myPromise()]);
        console.log(results);
    } catch (error) {
        console.error(error);
    }
}
handleAllPromises();