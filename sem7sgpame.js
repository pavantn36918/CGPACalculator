function calculate() {
    let s1 = parseInt(document.getElementById("s1").value);
    let s2 = parseInt(document.getElementById("s2").value);
    let s3 = parseInt(document.getElementById("s3").value);
    let s4 = parseInt(document.getElementById("s4").value);
    let s5 = parseInt(document.getElementById("s5").value);


    let result = document.getElementById("result");

    let a = [s1, s2, s3, s4, s5];
    let b = [3, 2, 3, 3, 3];
    let crp, gp;
    let sum = 0;
    let gpl = [];
    let lg = '';
    let lgl = [];

    for (let i = 0; i < 5; i++) {
        gp = 0;
        gp = check(a[i]);
        lg = grade(a[i]);
        gpl[i] = gp;
        lgl[i] = lg;
        sum = sum + (gp * b[i]);
    }
    let res = sum / 14;
    result.innerHTML = res.toFixed(2);


    function grade(n) {
        if (n >= 90) {
            return 'O';
        }
        else if (n >= 80 && n < 90) {
            return 'A+';
        }
        else if (n >= 70 && n < 80) {
            return 'A';
        }
        else if (n >= 60 && n < 70) {
            return 'B+';
        }
        else if (n >= 55 && n < 60) {
            return 'B';
        }
        else if (n >= 50 && n < 55) {
            return 'C';
        }
        else if (n >= 40 && n < 50) {
            return 'P';
        }
        else {
            return 'F';
        }
    }


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

    document.getElementById('download-btn').style.display = 'block';

    //PDF CONTENT

    let cn = res.toFixed(2);
    let sg = 'Your SGPA is :' + cn;
    let heading = '7th SEM GRADE REPORT';
    let web = "VTU CGPA & SGPA CALCULATOR";


    document.getElementById('download-btn').addEventListener('click', function () {

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont("times", "normal");


        //Water mark
        const watermarkText = "PTN WebCreations";
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();


        // Set the font, size, color, and opacity for the watermark
        doc.setFontSize(55);
        doc.setTextColor(150, 150, 150);  // Light gray color
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0, 0.1);  // Set the opacity (using RGBA)

        // Rotate and add the watermark text in the center
        doc.saveGraphicsState(); // Save the current graphics state
        doc.setTextColor(0, 0, 0, 0.1); // Light gray with opacity
        doc.text(watermarkText, (pageWidth / 2) + 10, (pageHeight / 2) + 25, {
            angle: 40,
            align: "center"
        });
        doc.restoreGraphicsState(); // Restore the previous graphics state



        //Bordrs 

        // Set border properties
        const borderWidth = 1;  // Border width
        const borderColor = [0, 0, 0];  // Border color (black)
        doc.setLineWidth(borderWidth);
        doc.setDrawColor(0, 0, 0, 0.5);
        doc.rect(5, 5, pageWidth - 10, pageHeight - 10);




        const pagewidth = doc.internal.pageSize.getWidth();
        const textWidth1 = doc.getTextWidth(sg);
        const xPosition1 = (pagewidth - textWidth1) / 2;

        const textWidth2 = doc.getTextWidth(heading);
        const xPosition2 = (pagewidth - textWidth2) / 2;

        const textWidth3 = doc.getTextWidth(web);
        const xPosition3 = (pagewidth - textWidth3) / 2;
        doc.autoTable({
            startY: 65,
            head: [['SI No.', 'Course Code', 'Course Title', 'Marks', 'Credits(C)', 'Grade points(G)', 'Letter Grade', '(C*G)']],
            body: [
                ['1', '21ME71', 'Automation and Robotics', a[0], b[0], gpl[0], lgl[0], b[0] * gpl[0]],
                ['2', '21ME72', 'Control Engg', a[1], b[1], gpl[1], lgl[1], b[1] * gpl[1]],
                ['3', '21ME73X', 'Professional Elective Course-II', a[2], b[2], gpl[2], lgl[2], b[2] * gpl[2]],
                ['4', '21ME74x', 'Professional Elective Course-III', a[3], b[3], gpl[3], lgl[3], b[3] * gpl[3]],
                ['5', '21XX75x', 'Open Elective Course-II', a[4], b[4], gpl[4], lgl[4], b[4] * gpl[4]],

            ],
            theme: 'plain',
            styles: {
                halign: 'center',
                lineWidth: 0.5,  // Set border width (adjust as needed)
                lineColor: [0, 0, 0],
            },
            headStyle: {
                halign: 'center',
                fontSize: 14,
            },
        })

        const finalY = doc.lastAutoTable.finalY || 40;

        doc.autoTable({
            head: [['Credits', 'Sum (C*G)', 'SGPA']],
            body: [['14', sum, cn]],
            theme: 'plain',
            styles: {
                halign: 'center',
                lineWidth: 0.5,  // Set border width (adjust as needed)
                lineColor: [0, 0, 0],
                fontSize: 14,
            },
            headStyle: {
                halign: 'center',
                fontSize: 12,
            },
        })

        const fnt2 = 'bold';
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(30)
        doc.setFont("helvetica", fnt2)
        doc.text(web, xPosition3 + 70, 20);

        doc.setFontSize(15);
        const fnt3 = 'normal';
        doc.setFont("helvetica", fnt3);
        doc.text("Developed By ", 70, 26);

        // Add Link Address
        const linkText = "Pavan T N";
        const x = 104.5;  // X-position for the text
        const y = 26;  // Y-position for the text
        const linkWidth = 100;  // Width of the link area
        const linkHeight = 10;  // Height of the link area

        // Add the text to the PDF
        doc.text(linkText, x, y);

        // Add a link to the text
        doc.setTextColor(0, 0, 255);  // Set link color (blue)
        doc.text(linkText, x, y);
        doc.link(x, y - 10, linkWidth, linkHeight, { url: 'https://www.linkedin.com/in/pavan-tn-a6b184267/' });




        // Draw a horizontal line
        const lineY = 30;  // Y-position for the line
        doc.setDrawColor(0, 0, 0, 0.7);  // Line color (black)
        doc.setLineWidth(0.5);  // Line width
        doc.line(7, lineY, pageWidth - 7, lineY);  // Draw the line from x=10 to x=pageWidth-10



        const fnt = 'bold';
        doc.setTextColor(255, 0, 0);
        doc.setFontSize(26)
        doc.setFont("helvetica", fnt)
        doc.text(heading, xPosition2 + 60, 45);



        doc.setTextColor(255, 165, 0,);
        doc.setFontSize(20)
        doc.text(sg, xPosition1 + 55, 60);

        // doc.setTextColor(0, 0, 0);
        // doc.setFontSize(10)
        // doc.text("Credits=18", 67, 137);

        // doc.setTextColor(0, 0, 0);
        // doc.setFontSize(10)
        // doc.text("SUM=" + sum, 157, 137);

        // doc.setTextColor(0, 0, 0);
        // doc.setFontSize(10)
        // doc.text("SGPA=SUM/Credits", 50, 155);

        // doc.setTextColor(0, 0, 0);
        // doc.setFontSize(10)
        // doc.text("SGPA=" + cn, 50, 160);

        const fnt1 = 'normal';
        doc.setFont("helvetica", fnt1)
        // Add Link Address
        const linkText1 = "Click here";
        const x1 = 53;  // X-position for the text
        const y1 = 200;  // Y-position for the text
        const linkWidth1 = 100;  // Width of the link area
        const linkHeight1 = 5;  // Height of the link area

        // Add the text to the PDF
        doc.text(linkText1, x1, y1);

        // Add a link to the text
        doc.setTextColor(0, 0, 255);  // Set link color (blue)
        doc.text(linkText1, x1, y1);
        doc.link(x1, y1 - 10, linkWidth1, linkHeight1, { url: 'https://pavantn36918.github.io/CGPACalculator/' });


        doc.setTextColor(0, 0, 0);
        doc.setFontSize(19)
        doc.text("To visit Website", 86, 200);

        doc.save("7th sem grade report.pdf");



    });
}