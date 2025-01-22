function mul(num, cb) {
    const res = num * 2; 
    cb(res); 
}

function sub(res, cb) {
    const res1 = res - 3; 
    cb(res1); 
}

function sum(res1, cb) {
    const res2 = res1 + 10; 
    cb(res2); 
}

function Demo(num) {
    mul(num, (res) => {
        sub(res, (res1) => {
            sum(res1, (finalres) => {
                console.log(`Result: ${finalres}`);
            });
        });
    });
}

Demo(10);