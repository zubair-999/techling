(function () {
    window.watermarklyFrame = null;

    window.addEventListener("message", function (e) {
        var origin = "" + e.origin; // e.origin is not a string in some browsers

        if (!origin.includes("watermarkly.com")
            && !origin.includes("visualwatermark.com")
            && !origin.includes("makewatermark.com")
            && !origin.includes("dgihk9kioq2vc.cloudfront.net")
            && !origin.includes("localhost")
            && !origin.includes("192.168.1")
            && !origin.includes("192.168.68")
            && !origin.includes("10.0.2.2:8080"))
            return;

        var message = e.data;
        if (!message.watermarkly)
            return;

        switch (message.command) {
            case "getLocation":
                window.watermarklyFrame = e.source;
                e.source.postMessage({
                    watermarkly: true,
                    location: {
                        hostname: location.hostname,
                        href: location.href
                    }
                }, "*");
                break;
            case "redirectTo":
                location.href = message.url;
                break;
            case "trackEvent":
                if (window.ga) {
                    try {
                        window.ga("send", "event", message.category, message.action, message.label, message.value);
                    } catch (ignored) {
                    }
                }
                break;
            case "activationComplete":
                if (window["activate-watermarkly-on-complete"]) {
                    window["activate-watermarkly-on-complete"](message.success);
                }
                break;
            case "closeApp":
                window["close-watermarkly-app"] && window["close-watermarkly-app"]();
                break;
        }
    }, false);

    function waitFor(predicate) {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (predicate()) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 100);
        });
    }

    window["activate-watermarkly"] = function (e) {
        return waitFor(() => !!window.watermarklyFrame)
            .then(() => new Promise((resolve, reject) => {
                window["activate-watermarkly-on-complete"] = function (success) {
                    if (success)
                        resolve();
                    else
                        reject();
                };
                window.watermarklyFrame.postMessage({
                    watermarkly: true,
                    activate: e
                }, "*");
            }));
    };

})();