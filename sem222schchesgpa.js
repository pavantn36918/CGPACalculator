function calculate() {
    let s1 = parseInt(document.getElementById("s1").value);
    let s2 = parseInt(document.getElementById("s2").value);
    let s3 = parseInt(document.getElementById("s3").value);
    let s4 = parseInt(document.getElementById("s4").value);
    let s5 = parseInt(document.getElementById("s5").value);
    let s6 = parseInt(document.getElementById("s6").value);
    let s7 = parseInt(document.getElementById("s7").value);
    let s8 = parseInt(document.getElementById("s8").value);


    let result = document.getElementById("result");

    let a = [s1, s2, s3, s4, s5, s6, s7, s8];
    let b = [4, 4, 3, 3, 3, 1, 1, 1];
    let crp, gp;
    let sum = 0;

    for (let i = 0; i < 8; i++) {
        gp = 0;
        gp = check(a[i]);
        sum = sum + (gp * b[i]);
    }
    let res = sum / 20;
    result.innerHTML = res.toFixed(2);

    function check(n) {
        if (n >= 90) {
            return 10;
        }
        else if (n >= 80 && n < 90) {
            return 9;
        }
        else if (n >= 70 && n < 80) {
            return 8;
        }
        else if (n >= 60 && n < 70) {
            return 7;
        }
        else if (n >= 55 && n < 60) {
            return 6;
        }
        else if (n >= 50 && n < 55) {
            return 5;
        }
        else if (n >= 40 && n < 50) {
            return 4;
        }
        else {
            return 0;
        }
    }


}
