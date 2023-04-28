function telephoneCheck(str) {
    const validNumber=/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?(\d{3})[\s\-]?(\d{4})$/;
    return validNumber.test(str);
}
console.log(telephoneCheck("555-555-5555"));