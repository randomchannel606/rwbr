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
            document.getElementById("instructions").innerHTML = "-Instructions Here-";
    }
    if (folder===1) {
        document.getElementById("selected").innerHTML = "Unit 1";
        if (image===1) {
            document.getElementById("change").src = "images/unit_1/0.png";
            document.getElementById("instructions").innerHTML = "You will start here.";
        } else if (image===2) {
            document.getElementById("change").src = "images/unit_1/1.png";
            document.getElementById("instructions").innerHTML = "Hold G then walk through.";
        } else if (image===3) {
            document.getElementById("change").src = "images/unit_1/2.png";
            document.getElementById("instructions").innerHTML = "Over there is a staircase.";
        } else if (image===4) {
            document.getElementById("change").src = "images/unit_1/3.png";
            document.getElementById("instructions").innerHTML = "Go Up.";
        } else if (image===5) {
            document.getElementById("change").src = "images/unit_1/4.png";
            document.getElementById("instructions").innerHTML = "There is Unit 1.";
        } else if (image===6) {
            document.getElementById("change").src = "images/unit_1/5.png";
            document.getElementById("instructions").innerHTML = "Hold keycard.";
        } else if (image===7) {
            document.getElementById("change").src = "images/unit_1/6.png";
            document.getElementById("instructions").innerHTML = "Either click the card reader or touch it with the card by walking into it.";
        } else if (image===8) {
            document.getElementById("change").src = "images/unit_1/7.png";
            document.getElementById("instructions").innerHTML = "These 2 computers show important info including your current demand, awaiting if the server just started.";
        } else if (image===9) {
            document.getElementById("change").src = "images/unit_1/8.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===10) {
            document.getElementById("change").src = "images/unit_1/9.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===11) {
            document.getElementById("change").src = "images/unit_1/10.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===12) {
            document.getElementById("change").src = "images/unit_1/11.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===13) {
            document.getElementById("change").src = "images/unit_1/12.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===14) {
            document.getElementById("change").src = "images/unit_1/13.png";
            document.getElementById("instructions").innerHTML = "Turn off the cooling pump.";
        } else if (image===15) {
            document.getElementById("change").src = "images/unit_1/14.png";
            document.getElementById("instructions").innerHTML = "Auto balancer speed to F.";
        } else if (image===16) {
            document.getElementById("change").src = "images/unit_1/15.png";
            document.getElementById("instructions").innerHTML = "5% and auto control. (make sure you're on rod mode)";
        } else if (image===17) {
            document.getElementById("change").src = "images/unit_1/16.png";
            document.getElementById("instructions").innerHTML = "Enable all of these main recirculation valves and put both as close to 25 as possible. (they will be raised later)";
        } else if (image===18) {
            document.getElementById("change").src = "images/unit_1/17.png";
            document.getElementById("instructions").innerHTML = "SRM will take a while to increase.";
        } else if (image===19) {
            document.getElementById("change").src = "images/unit_1/18.png";
            document.getElementById("instructions").innerHTML = "When at 5.00e+2, it will continue to increase as well as IPRM.";
        } else if (image===20) {
            document.getElementById("change").src = "images/unit_1/19.png";
            document.getElementById("instructions").innerHTML = "You need this to hit 70%.";
        } else if (image===21) {
            document.getElementById("change").src = "images/unit_1/20.png";
            document.getElementById("instructions").innerHTML = "Increase IPR level by 1 everytime it hits 70% until it's at 6.";
        } else if (image===22) {
            document.getElementById("change").src = "images/unit_1/21.png";
            document.getElementById("instructions").innerHTML = "Everytime you increase IPR it will lower and continue increasing.";
        } else if (image===23) {
            document.getElementById("change").src = "images/unit_1/22.png";
            document.getElementById("instructions").innerHTML = "when at 6 and at around 50% you can continue, this will continue to increase to 100%.";
        } else if (image===24) {
            document.getElementById("change").src = "images/unit_1/23.png";
            document.getElementById("instructions").innerHTML = "Turn on feedwater pump 1 and COND. pump 1.";
        } else if (image===25) {
            document.getElementById("change").src = "images/unit_1/24.png";
            document.getElementById("instructions").innerHTML = "Turn on auto control, COND. polisher 1, and preheaters 1-3.";
        } else if (image===26) {
            document.getElementById("change").src = "images/unit_1/25.png";
            document.getElementById("instructions").innerHTML = "Set turbine bypass to 40%.";
        } else if (image===27) {
            document.getElementById("change").src = "images/unit_1/26.png";
            document.getElementById("instructions").innerHTML = "Turn on both C.A.R N1 and 2. (they will auto turn off during later step or soon)";
        } else if (image===28) {
            document.getElementById("change").src = "images/unit_1/27.png";
            document.getElementById("instructions").innerHTML = "Turn on S.J.A.C N1 at 100%.";
        } else if (image===29) {
            document.getElementById("change").src = "images/unit_1/28.png";
            document.getElementById("instructions").innerHTML = "Turn on COND. REC. pump 1 and auto control.";
        } else if (image===30) {
            document.getElementById("change").src = "images/unit_1/29.png";
            document.getElementById("instructions").innerHTML = "Condenser pressure in 'mbar' will start to decrease.";
        } else if (image===31) {
            document.getElementById("change").src = "images/unit_1/30.png";
            document.getElementById("instructions").innerHTML = "When it's at 40-70mbar turn on auto deaerator.";
        } else if (image===32) {
            document.getElementById("change").src = "images/unit_1/31.png";
            document.getElementById("instructions").innerHTML = "The auto deaerator.";
        } else if (image===33) {
            document.getElementById("change").src = "images/unit_1/32.png";
            document.getElementById("instructions").innerHTML = "Increase to 10% reactor power.";
        } else if (image===34) {
            document.getElementById("change").src = "images/unit_1/33.png";
            document.getElementById("instructions").innerHTML = "Turn on turbine main valve and put bypass to 0 as well as SLOWLY increasing inlet to 20% as to not vibrate the turbine and trip.";
        } else if (image===35) {
            document.getElementById("change").src = "images/unit_1/34.png";
            document.getElementById("instructions").innerHTML = "You will need the turbine to reach close to 3500RPM.";
        } else if (image===36) {
            document.getElementById("change").src = "images/unit_1/35.png";
            document.getElementById("instructions").innerHTML = "The board on the wall near the door can we helpful especially when in Unit 2.";
        } else if (image===37) {
            document.getElementById("change").src = "images/unit_1/36.png";
            document.getElementById("instructions").innerHTML = "Still increasing...";
        } else if (image===38) {
            document.getElementById("change").src = "images/unit_1/37.png";
            document.getElementById("instructions").innerHTML = "3000RPM...";
        } else if (image===39) {
            document.getElementById("change").src = "images/unit_1/38.png";
            document.getElementById("instructions").innerHTML = "Vibration increases.";
        } else if (image===40) {
            document.getElementById("change").src = "images/unit_1/39.png";
            document.getElementById("instructions").innerHTML = "Vibration decreases.";
        } else if (image===41) {
            document.getElementById("change").src = "images/unit_1/40.png";
            document.getElementById("instructions").innerHTML = "You will need to slow inlet very small amounts, and get that to go slowely when close to 3600RPM in the green.<br>Below 3600RPM it will spin left, and above it'll spin right, sync 3595-3605RMP.";
        } else if (image===42) {
            document.getElementById("change").src = "images/unit_1/41.png";
            document.getElementById("instructions").innerHTML = "Turn GEN. breaker on to sync.";
        } else if (image===43) {
            document.getElementById("change").src = "images/unit_1/42.png";
            document.getElementById("instructions").innerHTML = "Turn on auto control.";
        } else if (image===44) {
            document.getElementById("change").src = "images/unit_1/43.png";
            document.getElementById("instructions").innerHTML = "'Reverse Power' turn on.";
        } else if (image===45) {
            document.getElementById("change").src = "images/unit_1/44.png";
            document.getElementById("instructions").innerHTML = "Increase power to 20%.";
        } else if (image===46) {
            document.getElementById("change").src = "images/unit_1/45.png";
            document.getElementById("instructions").innerHTML = "'Reverse Power' will turn off soon.";
        } else if (image===47) {
            document.getElementById("change").src = "images/unit_1/46.png";
            document.getElementById("instructions").innerHTML = "Turn on Bus A Transformer then B breakers.";
        } else if (image===48) {
            document.getElementById("change").src = "images/unit_1/47.png";
            document.getElementById("instructions").innerHTML = "Turn on COND. REC. pump 2.";
        } else if (image===49) {
            document.getElementById("change").src = "images/unit_1/48.png";
            document.getElementById("instructions").innerHTML = "Turn feedwater pump 2 on.";
        } else if (image===50) {
            document.getElementById("change").src = "images/unit_1/49.png";
            document.getElementById("instructions").innerHTML = "Increase to 30% power and press the 'REACTOR MODE' button";
        } else if (image===51) {
            document.getElementById("change").src = "images/unit_1/50.png";
            document.getElementById("instructions").innerHTML = "Soon after set to 50% power.";
        } else if (image===52) {
            document.getElementById("change").src = "images/unit_1/51.png";
            document.getElementById("instructions").innerHTML = "Increasing power = more MW made, decreasing = less MW made. Stay within -50 to 50 in 'Network Difference'<br>The second number is whole plant demand, which you will need to get Unit 2 running to reach.";
        }
    }
    if (folder===2) {
        document.getElementById("selected").innerHTML = "Prepping For Unit 2";
        if (image===1) {
            document.getElementById("change").src = "images/unit_1.5/0.png";
            document.getElementById("instructions").innerHTML = "You will start here.";
        } else if (image===2) {
            document.getElementById("change").src = "images/unit_1.5/1.png";
            document.getElementById("instructions").innerHTML = "To the left is Turbine Hall.";
        } else if (image===3) {
            document.getElementById("change").src = "images/unit_1.5/2.png";
            document.getElementById("instructions").innerHTML = "Enter and go right.";
        } else if (image===4) {
            document.getElementById("change").src = "images/unit_1.5/3.png";
            document.getElementById("instructions").innerHTML = "Then go left to the end.";
        } else if (image===5) {
            document.getElementById("change").src = "images/unit_1.5/4.png";
            document.getElementById("instructions").innerHTML = "Go down the hole.";
        } else if (image===6) {
            document.getElementById("change").src = "images/unit_1.5/5.png";
            document.getElementById("instructions").innerHTML = "Jump over this railing.";
        } else if (image===7) {
            document.getElementById("change").src = "images/unit_1.5/6.png";
            document.getElementById("instructions").innerHTML = "Go to that room, it controls Unit 2's feedwater.";
        } else if (image===8) {
            document.getElementById("change").src = "images/unit_1.5/7.png";
            document.getElementById("instructions").innerHTML = "Default Panel";
        } else if (image===9) {
            document.getElementById("change").src = "images/unit_1.5/8.png";
            document.getElementById("instructions").innerHTML = "Turn on auto control.";
        } else if (image===10) {
            document.getElementById("change").src = "images/unit_1.5/9.png";
            document.getElementById("instructions").innerHTML = "Turn on both lube pumps and service water inlets.";
        } else if (image===11) {
            document.getElementById("change").src = "images/unit_1.5/10.png";
            document.getElementById("instructions").innerHTML = "Exit the room to that ladder and climb up.";
        } else if (image===12) {
            document.getElementById("change").src = "images/unit_1.5/11.png";
            document.getElementById("instructions").innerHTML = "Go to the top of the staircase.";
        } else if (image===13) {
            document.getElementById("change").src = "images/unit_1.5/12.png";
            document.getElementById("instructions").innerHTML = "Go back over to the corner with the guy.";
        } else if (image===14) {
            document.getElementById("change").src = "images/unit_1.5/13.png";
            document.getElementById("instructions").innerHTML = "This is the oil tank.";
        } else if (image===15) {
            document.getElementById("change").src = "images/unit_1.5/14.png";
            document.getElementById("instructions").innerHTML = "Turn these 3 valves to 100% by spam clicking the left side of each valve.";
        } else if (image===16) {
            document.getElementById("change").src = "images/unit_1.5/15.png";
            document.getElementById("instructions").innerHTML = "Increase this valve to 100% too.";
        } else if (image===17) {
            document.getElementById("change").src = "images/unit_1.5/16.png";
            document.getElementById("instructions").innerHTML = "Next to the guy, go into Turbine Control Room (or TCR) up the stairs.";
        } else if (image===18) {
            document.getElementById("change").src = "images/unit_1.5/17.png";
            document.getElementById("instructions").innerHTML = "Enter TCR.";
        } else if (image===19) {
            document.getElementById("change").src = "images/unit_1.5/18.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===20) {
            document.getElementById("change").src = "images/unit_1.5/19.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===21) {
            document.getElementById("change").src = "images/unit_1.5/20.png";
            document.getElementById("instructions").innerHTML = "Default Panel Left To Right";
        } else if (image===22) {
            document.getElementById("change").src = "images/unit_1.5/21.png";
            document.getElementById("instructions").innerHTML = "Turn both pump selectors to Aux.";
        } else if (image===23) {
            document.getElementById("change").src = "images/unit_1.5/22.png";
            document.getElementById("instructions").innerHTML = "Increase hot valve to 50%.";
        } else if (image===24) {
            document.getElementById("change").src = "images/unit_1.5/23.png";
            document.getElementById("instructions").innerHTML = "When 'Lube Oil Temp.' is in the blue or close then continue.";
        } else if (image===25) {
            document.getElementById("change").src = "images/unit_1.5/24.png";
            document.getElementById("instructions").innerHTML = "Increase preheat valve to 100%, engage turbine, and activate turning gear";
        } else if (image===26) {
            document.getElementById("change").src = "images/unit_1.5/25.png";
            document.getElementById("instructions").innerHTML = "Turn on auto control for lube oil temp.";
        }
    }
    if (folder===3) {
        if (image===1) {
            document.getElementById("change").src = "images/unit_2/1setup/0.png"; //1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Setup";
            document.getElementById("instructions").innerHTML = "You will start here. (facing down the hall with turbine hall entrance)";
        } else if (image===2) {
            document.getElementById("change").src = "images/unit_2/1setup/1.png";
            document.getElementById("instructions").innerHTML = "Go straight and the first door to the right is Unit 2.";
        } else if (image===3) {
            document.getElementById("change").src = "images/unit_2/1setup/2.png";
            document.getElementById("instructions").innerHTML = "Left.";
        } else if (image===4) {
            document.getElementById("change").src = "images/unit_2/1setup/3.png";
            document.getElementById("instructions").innerHTML = "Right.";
        } else if (image===5) {
            document.getElementById("change").src = "images/unit_2/1setup/4.png";
            document.getElementById("instructions").innerHTML = "HCRDS.";
        } else if (image===6) {
            document.getElementById("change").src = "images/unit_2/1setup/5.png";
            document.getElementById("instructions").innerHTML = "COND. Storage and Breakers.";
        } else if (image===7) {
            document.getElementById("change").src = "images/unit_2/1setup/6.png";
            document.getElementById("instructions").innerHTML = "Turn CRD Pump 1 on and Accumulator Valve set to Refill until 100%";
        } else if (image===8) {
            document.getElementById("change").src = "images/unit_2/1setup/7.png";
            document.getElementById("instructions").innerHTML = "Turn on CST 1 Makeup P. DO NOT TURN ON BOTH UNLESS GENERATING ENOUGH POWER FROM THE U2 TURBINE (both on will trip breaker) This will auto turn off a little after 7.5m.";
        } else if (image===9) {
            document.getElementById("change").src = "images/unit_2/1setup/8.png";
            document.getElementById("instructions").innerHTML = "Relax.";
        } else if (image===10) {
            document.getElementById("change").src = "images/unit_2/1setup/9.png";
            document.getElementById("instructions").innerHTML = "Don't disable CRD Pump, but do set Accumulator Valve to Closed.";
        } else if (image===11) {
            document.getElementById("change").src = "images/unit_2/1setup/10.png";
            document.getElementById("instructions").innerHTML = "Still increasing... (enjoy pain and suffering)";
        } else if (image===12) {
            document.getElementById("change").src = "images/unit_2/1setup/11.png";
            document.getElementById("instructions").innerHTML = "When CST 1 auto turns off, turn on CST 2.";
        } else if (image===13) {
            document.getElementById("change").src = "images/unit_2/1setup/12.png";
            document.getElementById("instructions").innerHTML = "Feedwater pump 1 on";
        } else if (image===14) {
            document.getElementById("change").src = "images/unit_2/1setup/13.png";
            document.getElementById("instructions").innerHTML = "Feedwater heaters 1-3 and COND. pump 1 on";
        } else if (image===15) {
            document.getElementById("change").src = "images/unit_2/1setup/14.png";
            document.getElementById("instructions").innerHTML = "Auto Control and Lvl. Control Pump on.";
        } else if (image===16) {
            document.getElementById("change").src = "images/unit_2/1setup/15.png";
            document.getElementById("instructions").innerHTML = "Emergency Heating Off";
        } else if (image===17) {
            document.getElementById("change").src = "images/unit_2/1setup/16.png";
            document.getElementById("instructions").innerHTML = "Turn on all main circulation pump valves.";
        } else if (image===18) {
            document.getElementById("change").src = "images/unit_2/1setup/17.png";
            document.getElementById("instructions").innerHTML = "Set both to a notch away from 30%.";
        } else if (image===19) {
            document.getElementById("change").src = "images/unit_2/1setup/18.png";
            document.getElementById("instructions").innerHTML = "Set bypass to 60%.";
        } else if (image===20) {
            document.getElementById("change").src = "images/unit_2/1setup/19.png";
            document.getElementById("instructions").innerHTML = "Turn on S.J.A.E N1 at 100%";
        } else if (image===21) {
            document.getElementById("change").src = "images/unit_2/1setup/20.png";
            document.getElementById("instructions").innerHTML = "CC. Pump 1 and auto control on.";
        } else if (image===22) {
            document.getElementById("change").src = "images/unit_2/1setup/21.png";
            document.getElementById("instructions").innerHTML = "Twr Mkup Pump on and Tower Makup valve set to increase infinitely, as there are no cons to overflowing the cooling tower.";
        } else if (image===23) {
            document.getElementById("change").src = "images/unit_2/1setup/22.png"; //1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Setup";
            document.getElementById("instructions").innerHTML = "Dearator: Inlet 30% and Outlet 60%.";
        } else if (image===24) {
            document.getElementById("change").src = "images/unit_2/2startup/0.png"; //2startup
            document.getElementById("selected").innerHTML = "Unit 2 | Startup";
            document.getElementById("instructions").innerHTML = "Click the left side of the switch once to change from SD to SRM reactor mode.";
        } else if (image===25) {
            document.getElementById("change").src = "images/unit_2/2startup/1.png";
            document.getElementById("instructions").innerHTML = "Select the blanking button.";
        } else if (image===26) {
            document.getElementById("change").src = "images/unit_2/2startup/2.png";
            document.getElementById("instructions").innerHTML = "Equivelant Rod Position and SRM Depth must match, use Probes control to change SRM Depth.";
        } else if (image===27) {
            document.getElementById("change").src = "images/unit_2/2startup/3.png";
            document.getElementById("instructions").innerHTML = "For the first depth you can set a little below 10.";
        } else if (image===28) {
            document.getElementById("change").src = "images/unit_2/2startup/4.png";
            document.getElementById("instructions").innerHTML = "Set to With. and set speed to Avg.";
        } else if (image===29) {
            document.getElementById("change").src = "images/unit_2/2startup/5.png";
            document.getElementById("instructions").innerHTML = "It will increase by 20 and the reactor will start buzzing.";
        } else if (image===30) {
            document.getElementById("change").src = "images/unit_2/2startup/6.png";
            document.getElementById("instructions").innerHTML = "This is a bad image, but there is a new button flashing, so unselect the old one and select the new one.";
        } else if (image===31) {
            document.getElementById("change").src = "images/unit_2/2startup/7.png";
            document.getElementById("instructions").innerHTML = "Selected. and keep repeating this for the result shown in 13-14 steps.";
        } else if (image===32) {
            document.getElementById("change").src = "images/unit_2/2startup/8.png";
            document.getElementById("instructions").innerHTML = "Equivelant Rod Position = 10%";
        } else if (image===33) {
            document.getElementById("change").src = "images/unit_2/2startup/9.png";
            document.getElementById("instructions").innerHTML = "Depth = 10%";
        } else if (image===34) {
            document.getElementById("change").src = "images/unit_2/2startup/10.png";
            document.getElementById("instructions").innerHTML = "E.R.P. = 15%";
        } else if (image===35) {
            document.getElementById("change").src = "images/unit_2/2startup/11.png";
            document.getElementById("instructions").innerHTML = "Depth = 15%";
        } else if (image===36) {
            document.getElementById("change").src = "images/unit_2/2startup/12.png";
            document.getElementById("instructions").innerHTML = "E.R.P. = 20%";
        } else if (image===37) {
            document.getElementById("change").src = "images/unit_2/2startup/13.png";
            document.getElementById("instructions").innerHTML = "Depth = 20%";
        } else if (image===38) {
            document.getElementById("change").src = "images/unit_2/2startup/14.png";
            document.getElementById("instructions").innerHTML = "E.R.P. = 25%";
        } else if (image===39) {
            document.getElementById("change").src = "images/unit_2/2startup/15.png";
            document.getElementById("instructions").innerHTML = "Depth = 25%";
        } else if (image===40) {
            document.getElementById("change").src = "images/unit_2/2startup/16.png";
            document.getElementById("instructions").innerHTML = "E.R.P. = 30%";
        } else if (image===41) {
            document.getElementById("change").src = "images/unit_2/2startup/17.png";
            document.getElementById("instructions").innerHTML = "Depth = 30%";
        } else if (image===42) {
            document.getElementById("change").src = "images/unit_2/2startup/18.png";
            document.getElementById("instructions").innerHTML = "E.R.P. = 35%";
        } else if (image===43) {
            document.getElementById("change").src = "images/unit_2/2startup/19.png";
            document.getElementById("instructions").innerHTML = "E.R.P. = 37%";
        } else if (image===44) {
            document.getElementById("change").src = "images/unit_2/2startup/20.png";
            document.getElementById("instructions").innerHTML = "Depth = 37% AND SRM is at 10², so stop removing rods.";
        } else if (image===45) {
            document.getElementById("change").src = "images/unit_2/2startup/21.png";
            document.getElementById("instructions").innerHTML = "This will continue to increase so quickly next step.";
        } else if (image===46) {
            document.getElementById("change").src = "images/unit_2/2startup/22.png";
            document.getElementById("instructions").innerHTML = "Reactor mode IRM, do not remove rods unless reactor period is atleast 45 as removing<br> 1 rod all the way will bring it to about 30, bringing below 30 risks reactor trip.";
        } else if (image===47) {
            document.getElementById("change").src = "images/unit_2/2startup/23.png";
            document.getElementById("instructions").innerHTML = "When Intermediate Power Range is in the blue you must increase the selector by 1";
        } else if (image===48) {
            document.getElementById("change").src = "images/unit_2/2startup/24.png";
            document.getElementById("instructions").innerHTML = "Selector Increased by 1, and the I.P.R. will go back down, same as the Unit 1  I.P.R. that goes to 6, but Unit 2 goes to 8";
        } else if (image===49) {
            document.getElementById("change").src = "images/unit_2/2startup/25.png";
            document.getElementById("instructions").innerHTML = "Range 8.";
        } else if (image===50) {
            document.getElementById("change").src = "images/unit_2/2startup/26.png";
            document.getElementById("instructions").innerHTML = "When APRM [%] is atleast 6 then quickly go to next step, below this might trip the reactor.";
        } else if (image===51) {
            document.getElementById("change").src = "images/unit_2/2startup/27.png";
            document.getElementById("instructions").innerHTML = "Reactor mode Run.";
        } else if (image===52) {
            document.getElementById("change").src = "images/unit_2/2startup/28.png"; //2startup
            document.getElementById("selected").innerHTML = "Unit 2 | Startup";
            document.getElementById("instructions").innerHTML = "Auto APR Control on at 15%. Now head to TCR a second time, there will be a 3rd and you will need to get there QUCIKLY on the 3rd.";
        } else if (image===53) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/0.png"; //3turbine 1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Turbine Setup";
            document.getElementById("instructions").innerHTML = "This is the current turbine status, see how vacuum is green? That means you can do steam sealing.";
        } else if (image===54) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/1.png";
            document.getElementById("instructions").innerHTML = "Auto Steam Sealing on.";
        } else if (image===55) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/2.png";
            document.getElementById("instructions").innerHTML = "Steam Sealing in blue.";
        } else if (image===56) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/3.png";
            document.getElementById("instructions").innerHTML = "The steam sealing is green and the main pressure should turn green too at bypass 60% from earlier.";
        } else if (image===57) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/4.png";
            document.getElementById("instructions").innerHTML = "The Casing Temp Increases with Steam Pressure and Sealing with Preheat Valve open so just wait for it to be in the blue.";
        } else if (image===58) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/5.png";
            document.getElementById("instructions").innerHTML = "Once casing is green you can move to the final turbine setup step.";
        } else if (image===59) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/6.png";
            document.getElementById("instructions").innerHTML = "Turning gear off.";
        } else if (image===60) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/7.png";
            document.getElementById("instructions").innerHTML = "RPM will go down.";
        } else if (image===61) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/8.png";
            document.getElementById("instructions").innerHTML = "When at 0RPM you can now continue.";
        } else if (image===62) {
            document.getElementById("change").src = "images/unit_2/3turbine/1setup/9.png"; //3turbine 1setup
            document.getElementById("selected").innerHTML = "Unit 2 | Turbine Setup";
            document.getElementById("instructions").innerHTML = "Click Disengage and just leave preheat valve on decrease so it reaches 0% while you run back to Unit 2.";
        } else if (image===63) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/0.png"; //3turbine 2runup
            document.getElementById("selected").innerHTML = "Unit 2 | Turbine Runup";
            document.getElementById("instructions").innerHTML = "Turn on Stop Valves. Bypass 40% THEN increase Inlete to 15% WITH PRECISE!!! (don't leave it increasing when you leave) AND RUN TO TCR";
        } else if (image===64) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/1.png";
            document.getElementById("instructions").innerHTML = "In TCR you can see the RPM, when this gets to 1800RPM an alarm will play and you must take quick action. Or it will guarentee a turbine trip...";
        } else if (image===65) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/2.png";
            document.getElementById("instructions").innerHTML = "Those 2 yellow alarms will play now quickly next step.";
        } else if (image===66) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/3.png";
            document.getElementById("instructions").innerHTML = "Both Pump Selectors OFF and run back to Unit 2.";
        } else if (image===67) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/4.png";
            document.getElementById("instructions").innerHTML = "Close to 3500RPM.";
        } else if (image===68) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/5.png";
            document.getElementById("instructions").innerHTML = "Turn on Auto Acceleration Control at Slow and click 3600RPM. And click the switch on the Synchroschope";
        } else if (image===69) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/6.png";
            document.getElementById("instructions").innerHTML = "Now this part you must slow the speed down alot so you can use the Turbine Control carefully along with Precise to change Inlet. GET SPEED STABILIZED IN BLUE";
        } else if (image===70) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/7.png";
            document.getElementById("instructions").innerHTML = "When both Speed and Synchroscope are in the blue going pretty slow TURN ON THE GENERATOR BREAKER SYNC SWITCH then turn of synchroscope.";
        } else if (image===71) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/8.png";
            document.getElementById("instructions").innerHTML = "Reverse power. (Turbine pressure must be close to 7100kPa at all times or it'll trip)";
        } else if (image===72) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/9.png";
            document.getElementById("instructions").innerHTML = "If auto didn't already, get bypass to 0% slowely and also increase inlet with precise to around 30 to get out of reverse power.<br>KEEP IN MIND: If you get too far out of blue zone in main steam pressure or your condenser pressure is not centered (or close), say goodbye to the turbine. (TRIP)";
        } else if (image===73) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/10.png";
            document.getElementById("instructions").innerHTML = "Reverse Power Stopped.";
        } else if (image===74) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/11.png";
            document.getElementById("instructions").innerHTML = "Now first turn on BUS A TR. then B";
        } else if (image===75) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/12.png";
            document.getElementById("instructions").innerHTML = "Bring CST back to 7.5 if it increased.";
        } else if (image===76) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/13.png";
            document.getElementById("instructions").innerHTML = "Increase Power to 30%. And not needed, but I put auto balancer on slow to balance the temperatures of rods.";
        } else if (image===77) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/14.png";
            document.getElementById("instructions").innerHTML = "WATER WILL ALMOST DEFINETLY START DECREASING SOON SO BE QUICK THESE NEXT FEW STEPS";
        } else if (image===78) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/15.png";
            document.getElementById("instructions").innerHTML = "Main circulation 50%.";
        } else if (image===79) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/16.png";
            document.getElementById("instructions").innerHTML = "Feedwater and COND. pumps 2 on.";
        } else if (image===80) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/17.png";
            document.getElementById("instructions").innerHTML = "CC. pump 2 on and S.J.A.E N2 on (keep it at 0% though as these are used to make condenser pressure go to the left.)";
        } else if (image===81) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/18.png";
            document.getElementById("instructions").innerHTML = "Auto Deaerator";
        } else if (image===82) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/19.png";
            document.getElementById("instructions").innerHTML = "Screen of demand.";
        } else if (image===83) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/20.png";
            document.getElementById("instructions").innerHTML = "Increase/Decrease power for demand as needed. You will need to increase inlet if you go up in power and main steam pressure is going up, and decrease if going down from power decrease.<br>ALSO you need to increase/decrease main circulation and adjust feedwater as needed (as auto feedwater is slow)";
        } else if (image===84) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/21.png";
            document.getElementById("instructions").innerHTML = "DECREASING WATER LEVEL";
        } else if (image===85) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/22.png";
            document.getElementById("instructions").innerHTML = "I set m.c.p. to 100%.";
        } else if (image===86) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/23.png";
            document.getElementById("instructions").innerHTML = "Helping the auto increase pump speed for feedwater faster. Wouldn't leave increasing but as long as you help it increase it will start getting<br>core water to the blue or setpoint. (different control) Better to flood the core than to dry it.";
        } else if (image===87) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/24.png";
            document.getElementById("instructions").innerHTML = "INCREASING";
        } else if (image===88) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/25.png";
            document.getElementById("instructions").innerHTML = "Next to turbine turn on Pressure Control.";
        } else if (image===89) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/26.png";
            document.getElementById("instructions").innerHTML = "Demand Met";
        } else if (image===90) {
            document.getElementById("change").src = "images/unit_2/3turbine/2runup/27.png";
            document.getElementById("instructions").innerHTML = "Reactor Info";
        }
    }
}
