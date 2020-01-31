$(document).ready(function() {
	//Code
  $.ajax(
   {
   url: "https://flynn.boolean.careers/exercises/api/array/music",
   method: "GET",
   success: function (data, stato) {
       console.log(data);
       var source = $("#entry-template").html();
       var template = Handlebars.compile(source);

     },
   error: function (richiesta, stato, errore) {
     alert("E' avvenuto un errore. " + errore);
     }
   });

 function

});
