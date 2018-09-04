import Moment from "moment";

export const convertTimestamp = time => {
    return Moment.unix(time).fromNow();
};

Moment.locale("en", {
    relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "seconds",
        ss: "%ss",
        m: "a minute",
        mm: "%dm",
        h: "an hour",
        hh: "%dh",
        d: "a day",
        dd: "%dd",
        M: "a month",
        MM: "%dM",
        y: "a year",
        yy: "%dY"
    }
});

export const extractHostname = url => {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split("/")[2];
    } else {
        hostname = url.split("/")[0];
    }

    //find & remove port number
    hostname = hostname.split(":")[0];
    //find & remove "?"
    hostname = hostname.split("?")[0];

    return hostname;
};

export const extractRootDomain = url => {
    var domain = extractHostname(url),
        splitArr = domain.split("."),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (
            splitArr[arrLen - 2].length == 2 &&
            splitArr[arrLen - 1].length == 2
        ) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + "." + domain;
        }
    }
    return domain;
};
