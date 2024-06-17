contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_wkgfga4", "template_4vhwepn", {
        name: name,
        email: email,
        // phone: phone,
        message: message
    })
    .then(function(response) {
        console.log("Email sent:", response);
        alert("Email sent successfully!");
        contactForm.reset();
    }, function(error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the email. Please try again later.");
    });
});

