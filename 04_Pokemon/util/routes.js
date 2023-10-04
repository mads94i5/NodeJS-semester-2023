import { readPage, renderPage } from "./templateEngine.js";

const home = readPage("./public/pages/frontpage/home.html");
export const homePage = renderPage(home, {
    tabTitle: "Pokemon | Home"
});

const battle = readPage("./public/pages/battle/battle.html");
export const battlePage = renderPage(battle, {
    tabTitle: "Pokemon | Battle",
    cssLinks: `<link rel="stylesheet" href="/assets/pages/battle/battle.css">`
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact, {
    tabTitle: "Pokemon | Contact"
});