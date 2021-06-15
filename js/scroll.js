window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      // main position
        document.getElementById("nav").style.backgroundColor = "var(--mainBackgroundColor)";
        document.getElementById("nav").style.color = "var(--cardHeaderColor)";
        document.getElementById("nav").style.boxShadow = "12px 12px 96px var(--cardComponentshadowColor)";

        document.getElementById("nav-title").style.color = "var(--cardHeaderColor)";
        // document.querySelector("#b1").style.backgroundColor = "#ffffff";
        // document.querySelector("#b2").style.backgroundColor = "#ffffff";
        // document.querySelector("#b3").style.backgroundColor = "#ffffff";
        // document.querySelector("#b4").style.backgroundColor = "#ffffff";

        document.querySelector("#b1").style.color = "var(--cardHeaderColor)";
        document.querySelector("#b2").style.color = "var(--cardHeaderColor)";
        document.querySelector("#b3").style.color = "var(--cardHeaderColor)";
        document.querySelector("#b4").style.color = "var(--cardHeaderColor)";
    } else {
      // header position
        document.getElementById("nav").style.backgroundColor = "#ffcc3300";
        document.getElementById("nav").style.boxShadow = "none";

        document.getElementById("nav-title").style.color = "#ffffff";
        document.querySelector("#b1").style.backgroundColor = "#ffffff00";
        document.querySelector("#b2").style.backgroundColor = "#ffffff00";
        document.querySelector("#b3").style.backgroundColor = "#ffffff00";
        document.querySelector("#b4").style.backgroundColor = "#ffffff00";

        document.querySelector("#b1").style.color = "#ffffff";
        document.querySelector("#b2").style.color = "#ffffff";
        document.querySelector("#b3").style.color = "#ffffff";
        document.querySelector("#b4").style.color = "#ffffff";
    }
}
