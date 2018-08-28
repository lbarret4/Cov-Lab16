// Waits to make sure documents if loaded before manipulating the DOM with jQuery
$( document ).ready(function() {
   
   //Intializes arrays for list of headers, friends, locations, and weapons
    var headers = [];
    var friends = ['Charles', 'Jemma', 'Kim', 'Amanda', 'Kenji'];
    var weapons = ['pizza','stapler','hair brush','soy sauce packet','flag','plate','flag',
    'greeting card','CD','playing card','baseball bat','shovel','rug','radio','twezzers',
    'glass','shoes','lamp','cinder block','hanger'] ;
    var locations=['hospital','skyscraper ','internet cafe','library','mansion','balcony',
    'circus','gym','school','park'];
 
   
    //Adds into the headers array, a single  HTML h3 header string and is formated as Accusation i( i = some number ) 
    //Then,appends indiviual headers to parent element's (div) class headers-holder
   //Lastly, creates a single event listener to call displayAccuse with the index of the header element if the clicked happend on an h3 element 
    for ( var i = 0; i < 100; i++ ) {
        headers.push( `<h3>Accusation ${i+1} </h3>`);
        headers[i]=$(headers[i]).appendTo('.headers-holder');
    
        headers[i].on( "click",displayAccuse(i));
    }

     
    
    //Creates Accusation statements for a particular index and returns them as an alert 
    function displayAccuse(index) {
        var friendName= friends[index%5]
        var weaponName= weapons[index%20];
        var locationName=locations[index%10];
        var accuStatement =`Accusation ${index+1}: I accuse ${friendName}, with the ${weaponName} in the ${locationName}!`;
        return function(){
           alert(accuStatement);
        }
    }


});
