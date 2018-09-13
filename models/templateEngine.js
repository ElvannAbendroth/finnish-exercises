String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

module.exports = function (templateString, title, content) {
    return templateString.replaceAll('[[TITLE]]', title).replaceAll('[[CONTENT]]', content);
}