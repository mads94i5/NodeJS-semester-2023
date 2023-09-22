const welcomeMessageJson = require("./welcomeMessage.json");

function getWelcomeMessage(name) {
    if (!name) {
        return welcomeMessageJson.noNameWelcomeMessage;
    } else {
        return welcomeMessageJson.nameWelcomeMessage.replace("$name", name);
    }
}

module.exports = { 
    getWelcomeMessage
};