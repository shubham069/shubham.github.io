document.getElementById("resumeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of following the link

    // URL of the PDF file
    var pdfURL = "https://shubham069.github.io/resume/ShubhamShukla_Resume_Feb13.pdf";

    // Open the PDF file in a new window
    window.open(pdfURL, "_blank", "width=800,height=600");
});
