var search_icon = document.getElementById("menu_serach");
var form = document.getElementById("menu_form");


search_icon.addEventListener("click",function(){

	if (form.style.display !== "block") {

		form.style.display = "block";
	}

	else{
		form.style.display = "none";
	}


})

var menu_item2 = document.getElementById("menu_item2");
var menu_item1 = document.getElementById("menu_item1");
var list_info = document.getElementById("list_info");




menu_item2.addEventListener("click",function(){


	if (list_info.style.display !== "block") {

		list_info.style.display = "block";
	}

	else{list_info.style.display = "none";}


})


menu_item2.addEventListener("mouseenter",function(){


	if (list_info.style.display !== "block") {

		list_info.style.display = "block";
	}

	


})


    $(".mouseenter").mouseenter(function(){
        $("#list_info").css("display", "none");
    });




    
list_info.addEventListener("mouseleave",function(){


	if (list_info.style.display === "block") {

		list_info.style.display = "none";
	}

	else{list_info.style.display = "block"}

})


		

