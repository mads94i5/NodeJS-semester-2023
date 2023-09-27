function redirect(html) {
    window.location.href = html;
    // OR
    // window.location.replace(html);
}

setTimeout(redirect, 3000, "/secondpage");