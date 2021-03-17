function sendMail(contactForm){
    emailjs.send("service_k4z9uio","template_mi5gdsq",{
        "from_name" : contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
 .then(
        function(response) {
            console.log("SUCCESS", response);
            $('#contactForm').find("input[type=text]").val("");
            $('#contactForm').find("input[type=email]").val("");
            /*alert("Message Sent. Thank You!");*/
            $(".modal").show();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
   return false;  // To block from loading a new page
}
