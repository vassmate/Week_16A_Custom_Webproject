(function () {
    var name = document.getElementById("userName");
    var email = document.getElementById("emailAddress");
    var message = document.getElementById("message");
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;

    var nameDiv = document.getElementById("contact_name");
    var emailDiv = document.getElementById("contact_email");
    var messageDiv = document.getElementById("contact_msg");

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

    var validateContactData = function () {
        var emailLength = email.value.length;
        var emailEndingHu = email.value.substring((emailLength - 3), emailLength);
        var emailEndingCom = email.value.substring((emailLength - 4), emailLength);
        var isValidInputs = true;

        removeWarning(nameDiv);
        removeWarning(emailDiv);
        removeWarning(messageDiv);

        if (name.value.trim() === "" || name.value.length < 3 || name.value.length > 30) {
            showWarning(nameDiv);
            isValidInputs = false;
        }
        if (email.value.trim() === "" || emailEndingHu != ".hu" && emailEndingCom != ".com") {
            showWarning(emailDiv);
            isValidInputs = false;
        }
        if (email.value.trim() === "" || message.value.length < 20 || message.value.length > 500) {
            showWarning(messageDiv);
            isValidInputs = false;
        }
        return isValidInputs;
    };

    var showMessage = function () {
        var siteMsg = "Your message has been sent successfully!" + "\n";
        var inputMsg = "\t" + "Name: " + name.value +
            "\n" + "\t" + "Email: " + email.value +
            "\n" + "\t" + "Message: " + message.value;

        alert(siteMsg + inputMsg);

        name.value = "";
        email.value = "";
        message.value = "";

        submitButton.disabled = true;
    };

    var checkInputs = function () {
        if (validateContactData() != false) {
            submitButton.disabled = false;
            submitButton.addEventListener("click", showMessage);
        }
        else {
            submitButton.disabled = true;
        }
    };

    name.addEventListener("change", checkInputs);
    email.addEventListener("change", checkInputs);
    message.addEventListener("change", checkInputs);
}());
