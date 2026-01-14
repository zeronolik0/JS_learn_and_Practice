//callback hell
/* loadNewScript('1.js', function(error, script) {
    if (error) {
        handleError(error);
    } else {
            //...
            loadNewScript('2.js', function(error, script) {
                if (error) {
                    handleError(error);
                } else {
                        //...
                        loadNewScript('3.js', function(error, script) {
                            if (error) {
                                handleError(error);
                            } else {
                                    //... и т.д. 
                                }
                        });
                    }
                });
        }
});



*/


/* let promise = new Promise(function(resolve, reject) {
    //executor
}); */

//resolve(value)
//reject(error)


let promise = new Promise(function(resolve, reject) {
    setTimeout( function() {
        let mark = Math.floor(Math.random() * 4) + 2;
        if (mark > 3) {
            resolve(mark);
        }
        reject(mark); //reject(new Error("Whoops!"))
    }, 1000);
});

/* promise.then(
    result => console.log(`I,ve got ${result}! The surp is mine.`),
    error => console.log(`Oh, no! I,ve got ${error}!`)
) */

promise
.finally(()=>conaole.log(`Promise is Finished!`))
.then(result => console.log(`I,ve got ${result}! The surp is mine.`))
.catch(result => console.log(`Oh, no! I,ve got ${result}!`))