import fs from "fs";

export function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
}

export function renderPage(pageHTML, config = {}) {
    const footerHTML = readPage("./public/components/footer/footer.html");
    const navbarHTML = readPage("./public/components/navbar/navbar.html")
        .replace("$TAB_TITLE", config.tabTitle || "Pokemon")
        .replace("$CSS_LINKS", config.cssLinks || "");
    return navbarHTML + pageHTML + footerHTML;
}