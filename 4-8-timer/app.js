let num = 1;

const inertval = setInterval(() =>{
    console.log(num++);
},1000);

setTimeout(() => {
    console.log("Timeout!");
    clearInterval(inertval);
}, 6000);

