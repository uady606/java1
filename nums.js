console.time('sequential');
const n=100000;
let times = 0;
for(let i=5;i<=n;i++){
    console.log(`times: ${times++}`);
    if(i%5==0){
        console.log(i);
    }
}
console.timeEnd('sequential');