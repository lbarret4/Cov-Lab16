$( document ).ready(function() {
    console.log( "ready!" );

   
    var headers = [];
   
     
    for ( var i = 1; i <= 100; i++ ) {
        headers.push( "<h3>Accusation " + i + "</h3>" );
    }
      console.log( headers);
    $(headers.join( "" )).insertBefore('script[src*=\'query\']');
    

});
    
function displayAccuse() {
    var index=1;
    var friendName= 'Jane';
    var weaponName= 'gun';
    var locationName='hospital';
    var accuStatement =`Accusation ${index}: I accuse ${friendName}, with the ${weaponName} in the ${locationName}!`;
    return function() {
        alert(accuStatement);
    }
}

displayAccuse()();