function extractEmails(text) {
    const regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([a-zA-Z0-9]+)(@)([a-zA-Z0-9]+([\.\-][a-zA-Z0-9]+)+))(\b|(?=\s))/g;
    const emails = text.match(regex);
 
    for (const email of emails) {
        console.log(email);
    }
}