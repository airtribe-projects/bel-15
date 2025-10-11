function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function a (count) {
    count = count - 1;
    console.log(`Before : ${count}`);
     setTimeout((c) => {
         console.log(c);
     }, 3000, `${count}`);
    await wait(2000); 
    console.log(`AFTER : ${count}`);
    if(count > 0){
        a(count);
    }
}
a(5)