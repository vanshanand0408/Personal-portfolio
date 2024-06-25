var tabinfos = document.getElementsByClassName("tab-info");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname, event){
    for(var tabinfo of tabinfos){
        tabinfo.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active");
}
