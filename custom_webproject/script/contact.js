(function (contact) {
    var contactMsg;
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;

    contact.sendMessage = function () {
        var siteMsg = "Your message has been sent successfully!" + "\n";
        var inputMsg = "\t" + "Name: " + contactMsg.userName +
            "\n" + "\t" + "Email: " + contactMsg.email +
            "\n" + "\t" + "Message: " + contactMsg.message;

        alert(siteMsg + inputMsg);

        contactMessage.nameInput().value = "";
        contactMessage.emailInput().value = "";
        contactMessage.messageInput().value = "";

        submitButton.disabled = true;
    };

    var checkInputs = function () {
        if (contactMessage.validateContactData() != false) {
            submitButton.disabled = false;

            contactMsg = new contactMessage.ContactMessage(
                contactMessage.nameInput().value,
                contactMessage.emailInput().value,
                contactMessage.messageInput().value
            );

            submitButton.addEventListener("click", contact.sendMessage);
        }
        else {
            submitButton.disabled = true;
        }
    };

    contactMessage.nameInput().addEventListener("input", checkInputs);
    contactMessage.emailInput().addEventListener("input", checkInputs);
    contactMessage.messageInput().addEventListener("input", checkInputs);
})(window.contact = window.contact || {});
