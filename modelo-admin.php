<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
include_once 'funciones/funciones.php';
//include_once '../admin/funciones/funciones.php';
//Probar conexion a BBDD
// if ($conn->ping()) {
//     echo "Conectado";
// }else{
//     echo "No Conectado";
// }
// die();
//if (($_POST['registro'] == 'nuevo') {
// echo "<pre>";
// var_dump($_POST);
// echo "</pre>";
// die();
//die(json_encode($_POST)); //solo para ver los datos que se envio por ajax
// $usuario = $_POST['usuario'];
// $nombre = $_POST['nombre'];
// $password = $_POST['password'];
//
//
// $opciones = array(
//     'cost' => 12
// );

// $password_hashed = password_hash($password, PASSWORD_BCRYPT,  $opciones);
// try {
//     include_once 'funciones/funciones.php';
//     $stmt = $conn->prepare("INSERT INTO `admins` (usuario,  password) VALUES (?, ?, ?)");
//     $stmt->bind_param("sss", $usuario, $nombre, $password_hashed);
//     $stmt->execute();
//     $id_registro = $stmt->insert_id;
//     if ($id_registro > 0) {
//         $respuesta = array(
//             'respuesta' => 'exito',
//             'id_admin' => $id_registro
//         );
//     } else {
//         $respuesta = array(
//             'respuesta' => 'error'
//         );
//     }
//     $stmt->close();
//     $conn->close();
// } catch (Exception $e) {
//     echo "Error: " . $e->getMessage();
// }
//
//
//die(json_encode($respuesta));
//} 
// if (($_POST['registro'] == 'actualizar') {
//       die(json_encode($_POST));
// }
//
if (isset($_POST['login-admin'])) {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    try {
        $stmt = $conn->prepare("SELECT ID_admin, usuario, hash_pass FROM admins WHERE usuario = ?");
        $stmt->bind_param("s", $usuario);
        $stmt->execute();
        $stmt->bind_result($id_admin, $usuario_admin, $password_admin);
        
        if ($stmt->affected_rows) {
            
            $existe = $stmt->fetch();
            if ($existe) {
                if (password_verify($password, $password_admin)) {
                    session_start();
                    $_SESSION['usuario'] = $usuario_admin;
                    $_SESSION['nombre'] = $nombre_admin;
                    $respuesta = array(
                        'respuesta' => 'exitoso',
                        'usuario' => $nombre_admin
                    );
                } else {
                    $respuesta = array(
                        'respuesta' => 'error, password'
                    );
                }
            } else {
                $respuesta = array(
                    'respuesta' => 'error'
                );
            }
        }
        $stmt->close();
        $conn->close();
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
    die(json_encode($respuesta));
}
?>