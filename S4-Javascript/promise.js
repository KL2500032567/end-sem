// promise example

let promise = new promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("promise Resolved Successfully")
    }else{
        reject("Promise is Rejected")
    }
})
//Handling the promise
promise
.then((message) => {
    console.log(message)
})
.catch((message) => {
    console.log(message)
})

function getVerify(name){
    let promise = new Promise((resolve, reject) =>{
        if(name != ""){
            resolve("Name of a person is: " + name)
        }else{
            reject("Name should not be empty")
        }
    });
    return promise;
}
getVerify("prakash")
.then((message) => {
    console.log(message);
}).catch((message) => {
    console.error(message);
})
.catch(message => {
    console.log(message)
})

getEvent(number){
    return new Promise((resolve, reject) => {
        if(number % 2 === 0){
            resolve("Number is Even");
        }else{
            resolve("Number is odd")
        }
    });
}

async function checkEvenNumber(num){
    try{
        let result = await getEven(num);
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
checkEvenNumber(14)
checkEvenNumber(25)
