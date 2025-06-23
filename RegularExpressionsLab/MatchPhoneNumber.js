function matchPhoneNumber (text) {
    const regExp = /[+]359([ -])2\1(\d{3})\1(\d{4})/g;
    const validNames = [];
    let validName = null; 
    while ((validName = regExp.exec(text)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(', '));
}