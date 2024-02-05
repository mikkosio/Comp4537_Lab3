exports.getDate = function() {
    const date = new Date();
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "long",
        hour12: false
    };
    return date.toLocaleDateString("en-US", options);
}
