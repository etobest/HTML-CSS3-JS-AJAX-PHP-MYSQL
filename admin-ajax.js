$(document).ready(function () {
  // $('#guardar-registro').on('submit', function (e) {
  //   //Evitamos que abra el archivo del action insert-admin.php porque lo vamos a solicitar por ajax
  //   e.preventDefault();
  //   console.log("Click!!");
  //   var datos = $(this).serializeArray();
  //   // console.log(datos);
  //   $.ajax({
  //     type: $(this).attr('method'), // leemos el metodo de envio POST
  //     data: datos, // indicamos los datos recavados del formulario
  //     url: $(this).attr('action'),  // a donde se van a enviar los datos
  //     datatype: 'json', // el tipo de dato a enviar
  //     success: function (data) {
  //       // console.log(data);
  //       // cuando la llamada sea exitosa con data retornamos 
  //       var resultado = JSON.parse(data); // guardamos los datos en una variable
  //       // console.log(data);
  //       console.log(resultado); // mostramos los resultados en consola
  //       if (resultado.respuesta == 'exitoso') {
  //         swal(
  //           'Correcto',
  //           'El administrador se creó correctamente',
  //           'success'
  //         )
  //       } else {
  //         swal(
  //           'Error!',
  //           'Hubo un error',
  //           'error'

  //         )
  //       }
  //     }
  //   })
  // });

  $('#login-admin').on('submit', function (e) {
    //Evitamos que abra el archivo del action insert-admin.php porque lo vamos a solicitar por ajax
    e.preventDefault();
    // console.log("Click!!");
    var datos = $(this).serializeArray();
    console.log(datos);
    $.ajax({
      type: $(this).attr('method'), // leemos el metodo de envio POST
      data: datos, // indicamos los datos recavados del formulario
      url: $(this).attr('action'),  // a donde se van a enviar los datos
      dataType: 'json', // el tipo de dato a enviar
      success: function(data) {     // cuando la llamada sea exitosa con data retornamos 
        console.log(data);
        var resultado = data;
        if (resultado.respuesta == 'exitoso') {
          swal(
            'Login Correcto',
            'Bienvenid@ ' + resultado.usuario + ' !! ',
            'success'
          )
          setTimeout(function () {
            window.location.href = 'admin-area.php';
          }, 2000);
        } else {
          swal(
            'Error!',
            'Usuario o password Incorrectos',
            'error'
          )
        }
      }
    });
  });
});
        //var resultado = JSON.parse( data ) ; // guardamos los datos en una variable
        //console.log(data);
        //  console.log(resultado); // mostramos los resultados en consola
        // var resultado = data;
        //console.log(resultado);
        // console.log(data);
        //var resultado = JSON.parse( data ) ; // guardamos los datos en una variable
        // console.log(data);
        //console.log(resultado); // mostramos los resultados en consola
        //         if (resultado.respuesta == 'exito') {
        //           swal(
        //             'Login Correcto',
        //             'Bienvenid@ ' + resultado.usuario + ' !! ',
        //             'success'
        //           )
        //           setTimeout(function () {
        //             window.location.href = 'admin-area.php';
        //           }, 2000);
        //         } else {
        //           swal(
        //             'Error!',
        //             'Usuario o password Incorrectos',
        //             'error'
        // // 
        //           )
  //     }
  //   }
  //   })
  // });


