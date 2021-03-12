function sendMail(contactForm){
    emailjs.send("service_k4z9uio","template_mi5gdsq",{
        "from_name" : contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.message.value
    })
 .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}