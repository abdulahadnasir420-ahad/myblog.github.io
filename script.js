const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value;

        const phone = contactForm.querySelector(
            'input[type="tel"]'
        ).value;

        const service = contactForm.querySelector(
            "select"
        ).value;

        const message = contactForm.querySelector(
            "textarea"
        ).value;

        // Ladies Choices WhatsApp number
        const whatsappNumber = "923004508849";

        const whatsappMessage =
            `Hello Ladies Choices Tailors & Boutique!%0A%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Message: ${message}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");
    });
}