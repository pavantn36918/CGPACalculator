function check() {

    let sum = 80;
    //physics cycle
    let s11 = document.getElementById("s11");
    let s12 = document.getElementById("s12");
    let s13 = document.getElementById("s13");
    let s14 = document.getElementById("s14");
    let s15 = document.getElementById("s15");
    let s16 = document.getElementById("s16");
    let s17 = document.getElementById("s17");
    let s18 = document.getElementById("s18");
    let s19 = document.getElementById("s19");

    //chemistry cycle
    let s21 = document.getElementById("s21");
    let s22 = document.getElementById("s22");
    let s23 = document.getElementById("s23");
    let s24 = document.getElementById("s24");
    let s25 = document.getElementById("s25");
    let s26 = document.getElementById("s26");
    let s27 = document.getElementById("s27");
    let s28 = document.getElementById("s28");
    let s29 = document.getElementById("s29");

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


    //physics cycle
    if (s11.checked) {
        sum = sum - 3;
    }
    if (s12.checked) {
        sum = sum - 3;
    }
    if (s13.checked) {
        sum = sum - 3;
    }
    if (s14.checked) {
        sum = sum - 3;
    }
    if (s15.checked) {
        sum = sum - 3;
    }
    if (s16.checked) {
        sum = sum - 1;
    }
    if (s17.checked) {
        sum = sum - 1;
    }
    if (s18.checked) {
        sum = sum - 2;
    }
    if (s19.checked) {
        sum = sum - 1;
    }
    //chemistry cycle

    if (s21.checked) {
        sum = sum - 3;
    }
    if (s22.checked) {
        sum = sum - 3;
    }
    if (s23.checked) {
        sum = sum - 3;
    }
    if (s24.checked) {
        sum = sum - 3;
    }
    if (s25.checked) {
        sum = sum - 3;
    }
    if (s26.checked) {
        sum = sum - 1;
    }
    if (s27.checked) {
        sum = sum - 1;
    }
    if (s28.checked) {
        sum = sum - 2;
    }
    if (s29.checked) {
        sum = sum - 1;
    }

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


    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);

    let a = [];
    let b = [s1, s2, s3, s4];
    let c = [20, 20, 18, 22];
    let sum1 = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 4; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 4; i++) {
        sum1 = sum1 + a[i];

    }
    let res = sum1 / (sum);
    result.innerHTML = res.toFixed(2);





}

