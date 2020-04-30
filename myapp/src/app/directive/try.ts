function find(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            str[i] = '20%'
        }
    }
    return str
}
this.find("we are")