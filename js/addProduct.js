// function up(max) {
//     document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
//     if (document.getElementById("myNumber").value >= parseInt(max)) {
//         document.getElementById("myNumber").value = max;
//     }
// }
// function down(min) {
//     document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
//     if (document.getElementById("myNumber").value <= parseInt(min)) {
//         document.getElementById("myNumber").value = min;
//     }
// }
function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("dtl");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
  }
  
  // Plus/Minus Max Value Input
  
  function increment() {
    document.getElementById('demoInput').stepUp();
  }
  function decrement() {
    document.getElementById('demoInput').stepDown();
  }