function solution(rsp) {
    if (rsp === "2") {
        return "0";
    } else if (rsp === "0") {
        return "5";
    } else {
        var result = "";
        for (var i = 0; i < rsp.length; i++) {
            if (rsp[i] === "2") {
                result += "0";
            } else if (rsp[i] === "0") {
                result += "5";
            } else {
                result += "2";
            }
        }
        return result;
    }
}
