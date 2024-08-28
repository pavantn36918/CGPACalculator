function calculate() {


    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);
    let s5 = parseFloat(document.getElementById("s5").value);
    let s6 = parseFloat(document.getElementById("s6").value);

    let a = [];
    let b = [s1, s2, s3, s4, s5, s6];
    let c = [20, 20, 18, 22, 18, 22];
    let sum = 0;

    let result = document.getElementById("result");
    for (let j = 0; j < 6; j++) {

        a[j] = b[j] * c[j];
    }
    for (let i = 0; i < 6; i++) {
        sum = sum + a[i];

    }
    let res = sum / 120;
    result.innerHTML = res.toFixed(2);

    document.getElementById('download-btn').style.display = 'block';

    //PDF CONTENT
    let cn = res.toFixed(2);
    let cg = 'Your CGPA is :' + cn;
    let heading = 'CGPA REPORT';
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
        const textWidth1 = doc.getTextWidth(cg);
        const xPosition1 = (pagewidth - textWidth1) / 2;

        const textWidth2 = doc.getTextWidth(heading);
        const xPosition2 = (pagewidth - textWidth2) / 2;

        const textWidth3 = doc.getTextWidth(web);
        const xPosition3 = (pagewidth - textWidth3) / 2;
        doc.autoTable({
            startY: 65,
            head: [['Semester', 'Credits of Semester', 'SGPA', 'Credit points']],
            body: [
                ['1', c[0], b[0], a[0].toFixed(0)],
                ['2', c[1], b[1], a[1].toFixed(0)],
                ['3', c[2], b[2], a[2].toFixed(0)],
                ['4', c[3], b[3], a[3].toFixed(0)],
                ['5', c[4], b[4], a[4].toFixed(0)],
                ['6', c[5], b[5], a[5].toFixed(0)],

            ],
            theme: 'plain',
            styles: {
                halign: 'center',
                lineWidth: 0.5,  // Set border width (adjust as needed)
                lineColor: [0, 0, 0],
                fontSize: 14,
            },
            headStyle: {
                halign: 'center',
                fontSize: 16,
            },
        })

        const finalY = doc.lastAutoTable.finalY || 40;

        doc.autoTable({
            head: [['Total Credit points', 'Total Credits', 'CGPA']],
            body: [[sum.toFixed(0), '120', cn]],
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
        doc.text(heading, xPosition2 + 30, 45);



        doc.setTextColor(255, 165, 0,);
        doc.setFontSize(20)
        doc.text(cg, xPosition1 + 47, 60);

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
        const y1 = 170;  // Y-position for the text
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
        doc.text("To visit Website", 86, 170);

        doc.save("CGPA report.pdf");



    });
}
