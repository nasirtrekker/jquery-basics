
//Ni kommer ändå bara googla de här länkarna, lika bra att lägga in dem.
$('button').each(function(){
  var lastClass = $(this).attr('class').split(' ').pop();
  $(this).nextAll('div').append("<a href='http://api.jquery.com/" + lastClass + "'>" + lastClass + "</a>");
});

//Här nedanför är det lugnt att skriva kod