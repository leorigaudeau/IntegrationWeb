var open =0;
function menuBurger(){
    if (open==0) {
        document.getElementById('itemliste').className="menuburger animated fadeInDown";

        open=1;
    } else{
        document.getElementById('itemliste').className="na-listeitem";

        open=0
    }
    

}

