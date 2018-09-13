String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

module.exports = function (templateString, pageUrl, title, meta, content) {
    return templateString
        .replaceAll('[[PAGE_URL]]', pageUrl)
        .replaceAll('[[TITLE]]', title)
        .replaceAll('[[META]]', meta)
        .replaceAll('[[CONTENT]]', content);
}