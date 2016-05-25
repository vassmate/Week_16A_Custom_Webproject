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
        span.setAttribute("id", "span" + divName.id);
        var node = document.createTextNode("Not valid input!");
        span.appendChild(node);
        divName.appendChild(span);
    };

    var removeWarning = function (divName) {
        var span = document.getElementById("span" + divName.id);
        if (span != null) {
            divName.removeChild(span);
        }
    };

    var validateContactData = function () {
        var emailLength = email.value.length;
        var emailHu = email.value.substring((emailLength - 3), emailLength);
        var emailCom = email.value.substring((emailLength - 4), emailLength);
        var isValidInputs = true;

        removeWarning(nameDiv);
        removeWarning(emailDiv);
        removeWarning(messageDiv);

        if (name.value.trim() === "" || name.value.length < 3 || name.value.length > 30) {
            showWarning(nameDiv);
            isValidInputs = false;
        }
        if (email.value.trim() === "" || emailHu != ".hu" && emailCom != ".com") {
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