function check() {

    let sum = 60;
    //physics cycle
    let s11 = document.getElementById("s11");
    let s12 = document.getElementById("s12");
    let s13 = document.getElementById("s13");
    let s14 = document.getElementById("s14");
    let s15 = document.getElementById("s15");
    let s16 = document.getElementById("s16");
    let s17 = document.getElementById("s17");
    let s18 = document.getElementById("s18");


    //chemistry cycle
    let s21 = document.getElementById("s21");
    let s22 = document.getElementById("s22");
    let s23 = document.getElementById("s23");
    let s24 = document.getElementById("s24");
    let s25 = document.getElementById("s25");
    let s26 = document.getElementById("s26");
    let s27 = document.getElementById("s27");
    let s28 = document.getElementById("s28");

    //3RD SEMESTER CSE
    let s31 = document.getElementById("s31");
    let s32 = document.getElementById("s32");
    let s33 = document.getElementById("s33");
    let s34 = document.getElementById("s34");
    let s35 = document.getElementById("s35");
    let s36 = document.getElementById("s36");
    let s37 = document.getElementById("s37");
    let s38 = document.getElementById("s38");


    //physics cycle
    if (s11.checked) {
        sum = sum - 4;
    }
    if (s12.checked) {
        sum = sum - 4;
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
        sum = sum - 1;
    }

    //chemistry cycle
    if (s21.checked) {
        sum = sum - 4;
    }
    if (s22.checked) {
        sum = sum - 4;
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
        sum = sum - 1;
    }


    //3rd Semester
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
        sum = sum - 3;
    }
    if (s37.checked) {
        sum = sum - 1;
    }
    if (s38.checked) {
        sum = sum - 1;
    }

    let s1 = parseFloat(document.getElementById("a").value);
    let s2 = parseFloat(document.getElementById("b").value);
    let s3 = parseFloat(document.getElementById("c").value);

    let a = [];
    let b = [s1, s2, s3];
    let c = [20, 20, 20];
    let sum1 = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 3; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 3; i++) {
        sum1 = sum1 + a[i];

    }
    let res = sum1 / (sum);
    result.innerHTML = res.toFixed(2);



}