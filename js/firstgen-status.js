function checkOpenStatus() {
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    var message;

    if ((hour >= 9) && (hour < 15) && (day >= 1) && (day <= 5)) {
        message = "<span style='color:#0B6623'>We're Open!</span>";
    } else {
        message = "<span style='color:#fc4b1c'>Sorry, we're Closed.</span>";
    }

    document.getElementById("open-close").innerHTML = message;
    setTimeout(checkOpenStatus, 15000);
}

checkOpenStatus();
