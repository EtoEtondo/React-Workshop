// ! 1) Promise-based request function
// ! ------------------------------

const httpRequestWithPromise = (url) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!url) {
          reject({ status: 400 });
        } else {
          resolve({ data: [], status: 200, url });
        }
      }, 1000);
    });
  
  // ! Make request via Promise chain
  const makeRequestPromiseChain = (url) => {
    httpRequestWithPromise(url)
      .then(
        // handle resolved Promise
        (result) => {
          console.log(result.status);
        },
        // handle rejected Promise
        (rejectedResult) => {
          console.log(rejectedResult.status);
        }
      )
      .catch((errorOrRejectedPromise) => {
        // handle error or rejected Promise
        console.log(errorOrRejectedPromise.status);
      });
  };
  
  // no url -> Promise gets rejected
  makeRequestPromiseChain();
  
  // ? 🐆 [Task]: Currently the rejected promise is handled inside the
  // ?            second callback function of the `.then` call.
  // ?
  // ?            Your task: Change the `makeRequestPromiseChain` function above
  // ?            such that the `catch` block handles the rejected Promise instead
  // ?            of the second argument of the `.then` call.
  
  // ! 2) async/await based request function
  // ! ----------------------------------
  
  // ? 🐆 [Task]: Complete the async/await function `makeRequestAsyncAwait`
  // ?            which calls `httpRequestWithPromise` and `console.log`s
  // ?            the status of the response as above.
  
  const makeRequestAsyncAwait = async (url) => {
    try {
      // Add code here to log the status
    } catch (error) {
      // Add code here to log the status
    }
  };
  
  // passed url causes resolved Promise
  makeRequestAsyncAwait("http://localhost:3000");
  
  // no passed url causes rejected Promise
  makeRequestAsyncAwait();