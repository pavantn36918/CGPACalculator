function check() {

    let sum = 104;

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

    //5th semester
    let s51 = document.getElementById("s51");
    let s52 = document.getElementById("s52");
    let s53 = document.getElementById("s53");
    let s54 = document.getElementById("s54");
    let s55 = document.getElementById("s55");
    let s56 = document.getElementById("s56");
    let s57 = document.getElementById("s57");
    let s58 = document.getElementById("s58");

    //6th semester
    let s61 = document.getElementById("s61");
    let s62 = document.getElementById("s62");
    let s63 = document.getElementById("s63");
    let s64 = document.getElementById("s64");
    let s65 = document.getElementById("s65");
    let s66 = document.getElementById("s66");
    let s67 = document.getElementById("s67");
    let s68 = document.getElementById("s68");

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

    //5th semester

    if (s51.checked) {
        sum = sum - 3;
    }
    if (s52.checked) {
        sum = sum - 4;
    }
    if (s53.checked) {
        sum = sum - 3;
    }
    if (s54.checked) {
        sum = sum - 3;
    }
    if (s55.checked) {
        sum = sum - 1;
    }
    if (s56.checked) {
        sum = sum - 2;
    }
    if (s57.checked) {
        sum = sum - 1;
    }
    if (s58.checked) {
        sum = sum - 1;
    }

    //6th semester

    if (s61.checked) {
        sum = sum - 3;
    }
    if (s62.checked) {
        sum = sum - 4;
    }
    if (s63.checked) {
        sum = sum - 3;
    }
    if (s64.checked) {
        sum = sum - 3;
    }
    if (s65.checked) {
        sum = sum - 3;
    }
    if (s66.checked) {
        sum = sum - 1;
    }
    if (s67.checked) {
        sum = sum - 2;
    }
    if (s68.checked) {
        sum = sum - 3;
    }

    let s3 = parseFloat(document.getElementById("c").value);
    let s4 = parseFloat(document.getElementById("d").value);
    let s5 = parseFloat(document.getElementById("e").value);
    let s6 = parseFloat(document.getElementById("f").value);
    let s7 = parseFloat(document.getElementById("g").value);


    let a = [];
    let b = [s3, s4, s5, s6, s7];
    let c = [18, 22, 18, 22, 24];
    let sum1 = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 5; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 5; i++) {
        sum1 = sum1 + a[i];

    }
    let res = sum1 / (sum);
    result.innerHTML = res.toFixed(2);

}

