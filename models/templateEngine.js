module.exports = function (templateString, title, content) {
    return templateString.replace(':)TITLE:)', title).replace(':)CONTENT:)', content);
}