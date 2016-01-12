
function Timer(callback, delay) {
    var timerInit, start, remaining = delay;

    this.start = start;
    this.delay = delay;
    this.remaining = remaining;

    this.pause = function() {
        window.clearTimeout(timerInit);
        remaining -= new Date() - start;
    	this.remaining = remaining;
    };

    this.resume = function() {
        start = new Date();
        window.clearTimeout(timerInit);
        timerInit = window.setTimeout(callback, remaining);
    };

    this.resume();

    return this;
}

module.exports = Timer;