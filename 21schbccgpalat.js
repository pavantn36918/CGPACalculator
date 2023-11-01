function check() {

    let sum = 40;

    //3rd semester
    let s31 = document.getElementById("s31");
    let s32 = document.getElementById("s32");
    let s33 = document.getElementById("s33");
    let s34 = document.getElementById("s34");
    let s35 = document.getElementById("s35");
    let s36 = document.getElementById("s36");
    let s37 = document.getElementById("s37");
    let s38 = document.getElementById("s38");

    //4th semester
    let s41 = document.getElementById("s41");
    let s42 = document.getElementById("s42");
    let s43 = document.getElementById("s43");
    let s44 = document.getElementById("s44");
    let s45 = document.getElementById("s45");
    let s46 = document.getElementById("s46");
    let s47 = document.getElementById("s47");
    let s48 = document.getElementById("s48");
    let s49 = document.getElementById("s49");
    let s410 = document.getElementById("s410");

    //3rd semester

    if (s31.checked) {
        sum = sum - 3;
    }
    if (s32.checked) {
        sum = sum - 4;
    }
    if (s33.checked) {
        sum = sum - 4;
    }
    if (s34.checked) {
        sum = sum - 3;
    }
    if (s35.checked) {
        sum = sum - 1;
    }
    if (s36.checked) {
        sum = sum - 1;
    }
    if (s37.checked) {
        sum = sum - 1;
    }
    if (s38.checked) {
        sum = sum - 1;
    }

    //4th semester

    if (s41.checked) {
        sum = sum - 3;
    }
    if (s42.checked) {
        sum = sum - 4;
    }
    if (s43.checked) {
        sum = sum - 4;
    }
    if (s44.checked) {
        sum = sum - 3;
    }
    if (s45.checked) {
        sum = sum - 2;
    }
    if (s46.checked) {
        sum = sum - 1;
    }
    if (s47.checked) {
        sum = sum - 1;
    }
    if (s48.checked) {
        sum = sum - 1;
    }
    if (s49.checked) {
        sum = sum - 1;
    }
    if (s410.checked) {
        sum = sum - 2;
    }



    let s3 = parseFloat(document.getElementById("c").value);
    let s4 = parseFloat(document.getElementById("d").value);

    let a = [];
    let b = [s3, s4];
    let c = [18, 22];
    let sum1 = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 2; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 2; i++) {
        sum1 = sum1 + a[i];

    }
    let res = sum1 / (sum);
    result.innerHTML = res.toFixed(2);





}

