var folder = 0;
var subFolder = 1;
var subSubFolder
var image = 1;
var max = null;

function back() {
    if (folder===0 && image===1) {
    document.getElementById("1").innerHTML = "BACK";
    document.getElementById("2").innerHTML = "EXIT";
    document.getElementById("3").innerHTML = "NEXT";
    folder = 1;
    max = 52;
    } else if (image !== 1) {
        image -= 1;
    }
    r();
}
function exit() {
    if (folder===0 && image===1) {
    document.getElementById("1").innerHTML = "BACK";
    document.getElementById("2").innerHTML = "EXIT";
    document.getElementById("3").innerHTML = "NEXT";
    folder = 2;
    max = 26;
    } else {
        folder = 0;
        image = 1;
        max = 1;
        document.getElementById("1").innerHTML = "Unit 1";
        document.getElementById("2").innerHTML = "Unit 2 Prepping";
        document.getElementById("3").innerHTML = "Unit 2";
    }
    r();
}
function next() {
    if (folder===0 && image===1) {
    document.getElementById("1").innerHTML = "BACK";
    document.getElementById("2").innerHTML = "EXIT";
    document.getElementById("3").innerHTML = "NEXT";
    folder = 3;
    max = 90;
    } else if (image !== max) {
        image += 1;
    }
    r();
}

function r() {
    document.getElementById("current").innerHTML = image;
    document.getElementById("max").innerHTML = max;
    if (folder===0) {
        document.getElementById("selected").innerHTML = "None";
        document.getElementById("change").src = "images/Waiting.jpg";
    }
    if (folder===1) {
        document.getElementById("selected").innerHTML = "Unit 1";
        if (image===1) {
            document.getElementById("change").src = "images/unit_1/0.png";
        } else if (image===2) {
            document.getElementById("change").src = "images/unit_1/1.png";
        } else if (image===3) {
            document.getElementById("change").src = "images/unit_1/2.png";
        } else if (image===4) {
            document.getElementById("change").src = "images/unit_1/3.png";
        } else if (image===5) {
            document.getElementById("change").src = "images/unit_1/4.png";
        } else if (image===6) {
            document.getElementById("change").src = "images/unit_1/5.png";
        } else if (image===7) {
            document.getElementById("change").src = "images/unit_1/6.png";
        } else if (image===8) {
            document.getElementById("change").src = "images/unit_1/7.png";
        } else if (image===9) {
            document.getElementById("change").src = "images/unit_1/8.png";
        } else if (image===10) {
            document.getElementById("change").src = "images/unit_1/9.png";
        } else if (image===11) {
            document.getElementById("change").src = "images/unit_1/10.png";
        } else if (image===12) {
            document.getElementById("change").src = "images/unit_1/11.png";
        } else if (image===13) {
            document.getElementById("change").src = "images/unit_1/12.png";
        } else if (image===14) {
            document.getElementById("change").src = "images/unit_1/13.png";
        } else if (image===15) {
            document.getElementById("change").src = "images/unit_1/14.png";
        } else if (image===16) {
            document.getElementById("change").src = "images/unit_1/15.png";
        } else if (image===17) {
            document.getElementById("change").src = "images/unit_1/16.png";
        } else if (image===18) {
            document.getElementById("change").src = "images/unit_1/17.png";
        } else if (image===19) {
            document.getElementById("change").src = "images/unit_1/18.png";
        } else if (image===20) {
            document.getElementById("change").src = "images/unit_1/19.png";
        } else if (image===21) {
            document.getElementById("change").src = "images/unit_1/20.png";
        } else if (image===22) {
            document.getElementById("change").src = "images/unit_1/21.png";
        } else if (image===23) {
            document.getElementById("change").src = "images/unit_1/22.png";
        } else if (image===24) {
            document.getElementById("change").src = "images/unit_1/23.png";
        } else if (image===25) {
            document.getElementById("change").src = "images/unit_1/24.png";
        } else if (image===26) {
            document.getElementById("change").src = "images/unit_1/25.png";
        } else if (image===27) {
            document.getElementById("change").src = "images/unit_1/26.png";
        } else if (image===28) {
            document.getElementById("change").src = "images/unit_1/27.png";
        } else if (image===29) {
            document.getElementById("change").src = "images/unit_1/28.png";
        } else if (image===30) {
            document.getElementById("change").src = "images/unit_1/29.png";
        } else if (image===31) {
            document.getElementById("change").src = "images/unit_1/30.png";
        } else if (image===32) {
            document.getElementById("change").src = "images/unit_1/31.png";
        } else if (image===33) {
            document.getElementById("change").src = "images/unit_1/32.png";
        } else if (image===34) {
            document.getElementById("change").src = "images/unit_1/33.png";
        } else if (image===35) {
            document.getElementById("change").src = "images/unit_1/34.png";
        } else if (image===36) {
            document.getElementById("change").src = "images/unit_1/35.png";
        } else if (image===37) {
            document.getElementById("change").src = "images/unit_1/36.png";
        } else if (image===38) {
            document.getElementById("change").src = "images/unit_1/37.png";
        } else if (image===39) {
            document.getElementById("change").src = "images/unit_1/38.png";
        } else if (image===40) {
            document.getElementById("change").src = "images/unit_1/39.png";
        } else if (image===41) {
            document.getElementById("change").src = "images/unit_1/40.png";
        } else if (image===42) {
            document.getElementById("change").src = "images/unit_1/41.png";
        } else if (image===43) {
            document.getElementById("change").src = "images/unit_1/42.png";
        } else if (image===44) {
            document.getElementById("change").src = "images/unit_1/43.png";
        } else if (image===45) {
            document.getElementById("change").src = "images/unit_1/44.png";
        } else if (image===46) {
            document.getElementById("change").src = "images/unit_1/45.png";
        } else if (image===47) {
            document.getElementById("change").src = "images/unit_1/46.png";
        } else if (image===48) {
            document.getElementById("change").src = "images/unit_1/47.png";
        } else if (image===49) {
            document.getElementById("change").src = "images/unit_1/48.png";
        } else if (image===50) {
            document.getElementById("change").src = "images/unit_1/49.png";
        } else if (image===51) {
            document.getElementById("change").src = "images/unit_1/50.png";
        } else if (image===52) {
            document.getElementById("change").src = "images/unit_1/51.png";
        }
    }
    if (folder===2) {
        document.getElementById("selected").innerHTML = "Prepping For Unit 2";
        if (image===1) {
            document.getElementById("change").src = "images/unit_1.5/0.png";
        } else if (image===2) {
            document.getElementById("change").src = "images/unit_1.5/1.png";
        } else if (image===3) {
            document.getElementById("change").src = "images/unit_1.5/2.png";
        } else if (image===4) {
            document.getElementById("change").src = "images/unit_1.5/3.png";
        } else if (image===5) {
            document.getElementById("change").src = "images/unit_1.5/4.png";
        } else if (image===6) {
            document.getElementById("change").src = "images/unit_1.5/5.png";
        } else if (image===7) {
            document.getElementById("change").src = "images/unit_1.5/6.png";
        } else if (image===8) {
            document.getElementById("change").src = "images/unit_1.5/7.png";
        } else if (image===9) {
            document.getElementById("change").src = "images/unit_1.5/8.png";
        } else if (image===10) {
            document.getElementById("change").src = "images/unit_1.5/9.png";
        } else if (image===11) {
            document.getElementById("change").src = "images/unit_1.5/10.png";
        } else if (image===12) {
            document.getElementById("change").src = "images/unit_1.5/11.png";
        } else if (image===13) {
            document.getElementById("change").src = "images/unit_1.5/12.png";
        } else if (image===14) {
            document.getElementById("change").src = "images/unit_1.5/13.png";
        } else if (image===15) {
            document.getElementById("change").src = "images/unit_1.5/14.png";
        } else if (image===16) {
            document.getElementById("change").src = "images/unit_1.5/15.png";
        } else if (image===17) {
            document.getElementById("change").src = "images/unit_1.5/16.png";
        } else if (image===18) {
            document.getElementById("change").src = "images/unit_1.5/17.png";
        } else if (image===19) {
            document.getElementById("change").src = "images/unit_1.5/18.png";
        } else if (image===20) {
            document.getElementById("change").src = "images/unit_1.5/19.png";
        } else if (image===21) {
            document.getElementById("change").src = "images/unit_1.5/20.png";
        } else if (image===22) {
            document.getElementById("change").src = "images/unit_1.5/21.png";
        } else if (image===23) {
            document.getElementById("change").src = "images/unit_1.5/22.png";
        } else if (image===24) {
            document.getElementById("change").src = "images/unit_1.5/23.png";
        } else if (image===25) {
            document.getElementById("change").src = "images/unit_1.5/24.png";
        } else if (image===26) {
            document.getElementById("change").src = "images/unit_1.5/25.png";
        }
    }
    if (folder===3) {
        if (image===1) {
            document.getElementById("change").src = "images/unit_2/1setup/0.png"; //1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Setup";
        } else if (image===2) {
            document.getElementById("change").src = "images/unit_2/1setup/1.png";
        } else if (image===3) {
            document.getElementById("change").src = "images/unit_2/1setup/2.png";
        } else if (image===4) {
            document.getElementById("change").src = "images/unit_2/1setup/3.png";
        } else if (image===5) {
            document.getElementById("change").src = "images/unit_2/1setup/4.png";
        } else if (image===6) {
            document.getElementById("change").src = "images/unit_2/1setup/5.png";
        } else if (image===7) {
            document.getElementById("change").src = "images/unit_2/1setup/6.png";
        } else if (image===8) {
            document.getElementById("change").src = "images/unit_2/1setup/7.png";
        } else if (image===9) {
            document.getElementById("change").src = "images/unit_2/1setup/8.png";
        } else if (image===10) {
            document.getElementById("change").src = "images/unit_2/1setup/9.png";
        } else if (image===11) {
            document.getElementById("change").src = "images/unit_2/1setup/10.png";
        } else if (image===12) {
            document.getElementById("change").src = "images/unit_2/1setup/11.png";
        } else if (image===13) {
            document.getElementById("change").src = "images/unit_2/1setup/12.png";
        } else if (image===14) {
            document.getElementById("change").src = "images/unit_2/1setup/13.png";
        } else if (image===15) {
            document.getElementById("change").src = "images/unit_2/1setup/14.png";
        } else if (image===16) {
            document.getElementById("change").src = "images/unit_2/1setup/15.png";
        } else if (image===17) {
            document.getElementById("change").src = "images/unit_2/1setup/16.png";
        } else if (image===18) {
            document.getElementById("change").src = "images/unit_2/1setup/17.png";
        } else if (image===19) {
            document.getElementById("change").src = "images/unit_2/1setup/18.png";
        } else if (image===20) {
            document.getElementById("change").src = "images/unit_2/1setup/19.png";
        } else if (image===21) {
            document.getElementById("change").src = "images/unit_2/1setup/20.png";
        } else if (image===22) {
            document.getElementById("change").src = "images/unit_2/1setup/21.png";
        } else if (image===23) {
            document.getElementById("change").src = "images/unit_2/1setup/22.png"; //1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Setup";
        } else if (image===24) {
            document.getElementById("change").src = "images/unit_2/2startup/0.png"; //2startup
            document.getElementById("selected").innerHTML = "Unit 2 | Startup";
        } else if (image===25) {
            document.getElementById("change").src = "images/unit_2/2startup/1.png";
        } else if (image===26) {
            document.getElementById("change").src = "images/unit_2/2startup/2.png";
        } else if (image===27) {
            document.getElementById("change").src = "images/unit_2/2startup/3.png";
        } else if (image===28) {
            document.getElementById("change").src = "images/unit_2/2startup/4.png";
        } else if (image===29) {
            document.getElementById("change").src = "images/unit_2/2startup/5.png";
        } else if (image===30) {
            document.getElementById("change").src = "images/unit_2/2startup/6.png";
        } else if (image===31) {
            document.getElementById("change").src = "images/unit_2/2startup/7.png";
        } else if (image===32) {
            document.getElementById("change").src = "images/unit_2/2startup/8.png";
        } else if (image===33) {
            document.getElementById("change").src = "images/unit_2/2startup/9.png";
        } else if (image===34) {
            document.getElementById("change").src = "images/unit_2/2startup/10.png";
        } else if (image===35) {
            document.getElementById("change").src = "images/unit_2/2startup/11.png";
        } else if (image===36) {
            document.getElementById("change").src = "images/unit_2/2startup/12.png";
        } else if (image===37) {
            document.getElementById("change").src = "images/unit_2/2startup/13.png";
        } else if (image===38) {
            document.getElementById("change").src = "images/unit_2/2startup/14.png";
        } else if (image===39) {
            document.getElementById("change").src = "images/unit_2/2startup/15.png";
        } else if (image===40) {
            document.getElementById("change").src = "images/unit_2/2startup/16.png";
        } else if (image===41) {
            document.getElementById("change").src = "images/unit_2/2startup/17.png";
        } else if (image===42) {
            document.getElementById("change").src = "images/unit_2/2startup/18.png";
        } else if (image===43) {
            document.getElementById("change").src = "images/unit_2/2startup/19.png";
        } else if (image===44) {
            document.getElementById("change").src = "images/unit_2/2startup/20.png";
        } else if (image===45) {
            document.getElementById("change").src = "images/unit_2/2startup/21.png";
        } else if (image===46) {
            document.getElementById("change").src = "images/unit_2/2startup/22.png";
        } else if (image===47) {
            document.getElementById("change").src = "images/unit_2/2startup/23.png";
        } else if (image===48) {
            document.getElementById("change").src = "images/unit_2/2startup/24.png";
        } else if (image===49) {
            document.getElementById("change").src = "images/unit_2/2startup/25.png";
        } else if (image===50) {
            document.getElementById("change").src = "images/unit_2/2startup/26.png";
        } else if (image===51) {
            document.getElementById("change").src = "images/unit_2/2startup/27.png";
        } else if (image===52) {
            document.getElementById("change").src = "images/unit_2/2startup/28.png"; //2startup
            document.getElementById("selected").innerHTML = "Unit 2 | Startup";
        } else if (image===53) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/0.png"; //3turbine 1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Turbine Setup";
        } else if (image===54) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/1.png";
        } else if (image===55) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/2.png";
        } else if (image===56) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/3.png";
        } else if (image===57) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/4.png";
        } else if (image===58) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/5.png";
        } else if (image===59) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/6.png";
        } else if (image===60) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/7.png";
        } else if (image===61) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/8.png";
        } else if (image===62) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/9.png"; //3turbine 1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Turbine Setup";
        } else if (image===63) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/0.png"; //3turbine 2runup
            document.getElementById("selected").innerHTML = "Unit 2 | Turbine Runup";
        } else if (image===64) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/1.png";
        } else if (image===65) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/2.png";
        } else if (image===66) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/3.png";
        } else if (image===67) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/4.png";
        } else if (image===68) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/5.png";
        } else if (image===69) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/6.png";
        } else if (image===70) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/7.png";
        } else if (image===71) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/8.png";
        } else if (image===72) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/9.png";
        } else if (image===73) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/10.png";
        } else if (image===74) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/11.png";
        } else if (image===75) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/12.png";
        } else if (image===76) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/13.png";
        } else if (image===77) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/14.png";
        } else if (image===78) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/15.png";
        } else if (image===79) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/16.png";
        } else if (image===80) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/17.png";
        } else if (image===81) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/18.png";
        } else if (image===82) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/19.png";
        } else if (image===83) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/20.png";
        } else if (image===84) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/21.png";
        } else if (image===85) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/22.png";
        } else if (image===86) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/23.png";
        } else if (image===87) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/24.png";
        } else if (image===88) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/25.png";
        } else if (image===89) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/26.png";
        } else if (image===90) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/27.png";
        }
    }
}