document.addEventListener("mousemove",function(event){
                
                var x = event.clientX;
                var y = event.clientY;
                document.getElementById('print').innerHTML = " X = "+ x + "Y = "+ y+"\n";}); 

var seconds = 0, minutes = 0, hours = 0;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    document.getElementById("time").innerHTML =(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
change = function () {
    var btn = document.getElementById("try");
    var x = Math.round(Math.random() * (screen.width - 100));
    var y = Math.round(Math.random() * (screen.height - 300));
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
};