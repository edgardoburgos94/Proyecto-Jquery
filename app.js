function numeroaleatorio() {
  var ranNums = []
  for(var z = 0; z < 4; z++) {
      ini = Math.floor(Math.random() * 10);


      if (ranNums.includes(ini)) {
        z = z - 1;
      }else {
        ranNums[z]=(ini);
      }
  }
  return ranNums
};

$(document).ready(function(){
  var randomnumber = numeroaleatorio()
  console.log("El numero aleatorio es: "+randomnumber);

  $('form').submit(function (e) {
    e.preventDefault()

    var number = $('#number').val();
    $('#number').val('');

    // Si ingresó los 4 números
    if (number.length == 4) {
      var array = number.split('');
      var equals = (new Set(array)).size !== array.length;

      // Si tiene todos los elementos repetidos
      if ( equals) {
        $('#number').addClass('errorinput')
        $('span').addClass('errortext')
      } else {
        $('#number').removeClass('errorinput')
        $('span').removeClass('errortext')

        var fijas = 0;
        var picas = 0;
        for (var i = 0; i<array.length; i ++) {
          if (array[i]==randomnumber[i]){
            fijas = fijas + 1;
          } else {
            for (var j = 0; j < randomnumber.length; j++){
              // console.log("Pica?"+array[i]+" "+randomnumber[j]);
              if (array[i]==randomnumber[j]) {
                picas = picas +1;
              };
            };
          };
        };

        if (fijas == 4){
          $('.ganaste').removeClass('hide')
        }

        $('tbody').prepend("<tr><td>"+number+"</td><td>"+picas+"</td><td>"+fijas+"</td></tr>")
      };
    } else {
      $('#number').addClass('errorinput')
      $('span').addClass('errortext')
    };


    // }
  });
  $('#repeat').on('click', function(){
    $('.ganaste').addClass('hide')
    randomnumber = numeroaleatorio()
    console.log("El numero aleatorio es: "+randomnumber);
    $('tbody').find('tr').remove();
  });
});
