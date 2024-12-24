console.time('jumping');
const n=100000;
let times = 0;
for (let i=5;i<=n;i+=5){
    console.log(`times: ${times++}`);
    console.log(i);
        
}
console.timeEnd('jumping');