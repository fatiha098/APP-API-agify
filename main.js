$('#click').on('click', function(e){

  e.preventDefault()

  const name = $('#name').val();

  if(name == ''){

    $('#name').css('border', '2px solid red');
    $('<span class="warning">Please enter a name</span>').insertAfter('#name').css({
      'position': 'absolute',
      'top': '48.5%',
      'left': '30%',
      'font-size': '12px',
      'color': 'red'
    })

  }
  else{

      $('#name').css('border', '2px solid rgba(0, 0, 0, 0.158)');
      $('.warning').css('display', 'none');

      
    const url = `https://api.agify.io/?name=${name}`;

    $.get(url, function(data){

      if(data.age == null){
        $('#name').css('border', '2px solid red');
        $('<span>Name is not valid</span>').insertAfter('#name').css({
          'position': 'absolute',
          'top': '48.5%',
          'left': '30%',
          'font-size': '12px',
          'color': 'red'
        })
        
      }else {

        $('.result').text(`${name}'s age is ${data.age} years old`).css({
          'visibility':'visible',
          "animation": "zoom  .6s"
        })
      }
      
  
    }, 'json')
  }
})