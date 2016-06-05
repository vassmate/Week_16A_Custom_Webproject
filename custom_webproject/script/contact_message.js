(function (contactMessage) {
    var nameDiv = document.getElementById("contact_name");
    var emailDiv = document.getElementById("contact_email");
    var messageDiv = document.getElementById("contact_msg");

    contactMessage.nameInput = function () {
        return document.getElementById("userName");
    };

    contactMessage.emailInput = function () {
        return document.getElementById("emailAddress");
    };

    contactMessage.messageInput = function () {
        return document.getElementById("message");
    };

    contactMessage.ContactMessage = function (userName, email, message) {
        this.userName = userName;
        this.email = email;
        this.message = message;
    };

    var showWarning = function (divName) {
        var span = document.createElement("span");
        span.setAttribute("id", "span_" + divName.id);
        var warningMsg;

        if (divName.id == "contact_name") {
            warningMsg = document.createTextNode("*Name should be at least 3 characters long but not longer than 30!");
        }
        if (divName.id == "contact_email") {
            warningMsg = document.createTextNode("*Email should end with either '.hu' or '.com'!");
        }
        if (divName.id == "contact_msg") {
            warningMsg = document.createTextNode("*Message should be at least 20 characters long but not longer than 500!");
        }

        span.appendChild(warningMsg);
        divName.appendChild(span);
    };

    var removeWarning = function (divName) {
        var span = document.getElementById("span_" + divName.id);
        if (span != null) {
            divName.removeChild(span);
        }
    };

    contactMessage.validateContactData = function () {
        var emailLength = contactMessage.emailInput().value.length;
        var emailEndingHu = contactMessage.emailInput().value.substring((emailLength - 3), emailLength);
        var emailEndingCom = contactMessage.emailInput().value.substring((emailLength - 4), emailLength);
        var isValidInputs = true;

        removeWarning(nameDiv);
        removeWarning(emailDiv);
        removeWarning(messageDiv);

        if (contactMessage.nameInput().value.trim() === "" || contactMessage.nameInput().value.length < 3
            || contactMessage.nameInput().value.length > 30) {
            showWarning(nameDiv);
            isValidInputs = false;
        }
        if (contactMessage.emailInput().value.trim() === "" || emailEndingHu != ".hu" && emailEndingCom != ".com") {
            showWarning(emailDiv);
            isValidInputs = false;
        }
        if (contactMessage.messageInput().value.trim() === "" || contactMessage.messageInput().value.length < 20
            || contactMessage.messageInput().value.length > 500) {
            showWarning(messageDiv);
            isValidInputs = false;
        }
        return isValidInputs;
    };

})(window.contactMessage = window.contactMessage || {});
