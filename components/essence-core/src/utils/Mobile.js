
    export isMobile() {
        if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        } else {
            return false;
        }
    };

    export screenSize() {
        var screenWidth = screen.width;

        if (screenWidth <= 360) {
            return 1; // "small";
        } else if (screenWidth > 360 && screenWidth <= 800) {
            return 2; // "medium";
        } else {
            return 3; // "large";
        }
    };

    export documentSize() {
        var documentSize = document.querySelector("body").offsetWidth;

        if (documentSize <= 360) {
            return 1; // "small";
        } else if (documentSize > 360 && documentSize <= 800) {
            return 2; // "medium";
        } else {
            return 3; // "large";
        }
    };
