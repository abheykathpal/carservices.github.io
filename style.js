if (window.screen.width < 600) {
    //   alert(1);
    function openmenu() {
        document.getElementById("menu").style.display = "block";
        document.getElementById("openmenu").style.display = "none";
        document.getElementById("closemenu").style.display = "block";
        document.getElementById("closemenu").style.marginTop = "-15.5em";
        // alert(1);

    }


    function closemenu() {
        document.getElementById("menu").style.display = "none";
        //alert(1);
        document.getElementById("openmenu").style.display = "block";
        document.getElementById("closemenu").style.background = "none";
        //document.getElementById("closemenu").style.display = "none";
        // document.getElementById("closemenu").style.marginTop = "-6.2em";
    }



    //document.getElementById("reg").addEventListener("click", myFunction);

    function fun1() {
        document.getElementById('menu').style.display = "none";
        document.getElementById("openmenu").style.display = "block";
        document.getElementById("closemenu").style.display = "none";
        document.getElementById("openmenu").style.marginTop = "-2.3em";
        //alert(01);
    }

    function fun2() {
        document.getElementById('menu').style.display = "none";
        document.getElementById("openmenu").style.display = "block";
        document.getElementById("closemenu").style.display = "none";
        document.getElementById("openmenu").style.marginTop = "-2.3em";
        //alert(01);
    }

    function fun3() {
        document.getElementById('menu').style.display = "none";
        document.getElementById("openmenu").style.display = "block";
        document.getElementById("closemenu").style.display = "none";
        document.getElementById("openmenu").style.marginTop = "-2.3em";
        //alert(01);
    }

    function fun4() {
        document.getElementById('menu').style.display = "none";
        document.getElementById("openmenu").style.display = "block";
        document.getElementById("closemenu").style.display = "none";
        document.getElementById("openmenu").style.marginTop = "-2.3em";
        //alert(01);
    }

    function fun5() {
        document.getElementById('menu').style.display = "none";
        document.getElementById("openmenu").style.display = "block";
        document.getElementById("closemenu").style.display = "none";
        document.getElementById("openmenu").style.marginTop = "-2.3em";
        //alert(01);
    }

}

if (window.screen.width > 600) {
    function toggleDropdown() {
        var dropdownMenu = event.target.nextElementSibling;
        if (dropdownMenu.style.display === "block") {
          dropdownMenu.style.display = "none";
        } else {
          dropdownMenu.style.display = "block";
        }
      }
}

if (window.screen.width < 600) {
    function toggleDropdown() {
        var dropdownMenu = event.target.nextElementSibling;
        if (dropdownMenu.style.display === "block") {
          dropdownMenu.style.display = "none";
        } else {
          dropdownMenu.style.display = "block";
        }
      }
}


