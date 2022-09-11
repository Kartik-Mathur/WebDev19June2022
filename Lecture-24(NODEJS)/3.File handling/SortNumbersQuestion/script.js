const fs = require('fs');

let ans;
fs.readFile(
    'input1.txt',
    (err,data)=>{
        ans = data.toString();
        fs.readFile(
            'input2.txt',
            (err,d)=>{
                ans += d.toString();
                console.log(ans);
                let arr = ans.split('\n');
                // console.log(arr);
                arr.sort((a,b)=>a-b);
                console.log(arr);

                fs.writeFile('out.txt',arr.toString(),(err)=>{
                    console.log('Done');
                })
            }   
        )
    }
)

