$(document).ready(function() {
	//Code
  $.ajax(
   {
   url: "https://flynn.boolean.careers/exercises/api/array/music",
   method: "GET",
   success: function (data, stato) {
     for(var i = 0; i < 6; i++){

       console.log('CD number '+ [i+1] + JSON.stringify(data.response[i]));
       console.log('Genere = ' + data.response[i].genre);


     }
     readCd(data.response);

     },
   error: function (richiesta, stato, errore) {
     alert("E' avvenuto un errore. " + errore);
     }
   });

 function readCd (cds){
   for(var i = 0; i < cds.length; i++){
     var cd = cds[i];
     console.log(cd);
     var source = $("#entry-template").html();
     var template = Handlebars.compile(source);
     var html = template(cd);

     $('.cds-container').append(html);
   }
 }

});
