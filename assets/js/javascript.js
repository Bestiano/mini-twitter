  $(document).ready(function() {

    $(".btn-send").on('click',function() {
      var datos = $(".text-area").val();

      $(".twitter-post").append(
        '<div class="photo-perfil col-md-1">'+
          '<img class="img-profile" src="assets/img/punk.jpg" alt="foto">'+
        '</div>'+
        '<div class="perfil-base col-md-10">'+
          '<h5>Hugo Oz<span class="email">@hugoz</span></h5>'+
          '<p class="input-text">'+datos+'</p>'+
          '<div class="social">'+
            '<a href="#" class="liked"><i class="far fa-thumbs-up"></i><span class="likes">0</span></a>'+
        '</div>'+
        '</div>'+
        '<div>'+
          '<a href="#" class="close"><i class="far fa-times-circle"></i></a>'+
        '</div>'
      )
    });

    $(".twitter-post").on('click','.close', function(){
      $(this).parent().parent().remove()
    })

    $(".twitter-post").on('click','.liked', function(e){
      e.preventDefault()
      
    })
  });
