import "./contact.css";

function showMessage(){
    alert("Thank you for the message.");

}

export function generateContact(){
    const container = document.getElementById("container");

    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container");
    container.appendChild(contactContainer);

    const formTitle = document.createElement("h1");
    formTitle.setAttribute("id", "form-title");
    formTitle.innerHTML = "Get in touch!";
    contactContainer.appendChild(formTitle);

    const contactForm = document.createElement("form");
    contactForm.setAttribute("id", "contact-form");
    contactContainer.appendChild(contactForm);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("placeholder", "Your Name");
    contactForm.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("placeholder", "Email");
    emailInput.setAttribute('type', "email");
    emailInput.setAttribute('required', "true");
    contactForm.appendChild(emailInput);

    const messageInput = document.createElement("textArea");
    messageInput.setAttribute("placeholder", "Message");
    contactForm.appendChild(messageInput);

    const submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Send";
    submitBtn.setAttribute("id", "form-btn");
    submitBtn.setAttribute("type", "submit");
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showMessage();
     });
    contactForm.appendChild(submitBtn);
 }

