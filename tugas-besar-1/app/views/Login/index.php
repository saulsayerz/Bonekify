<!DOCTYPE html>

<head>
    <link href="<?echo BASEURL;?>/css/styles.css" rel="stylesheet">
    <script src="<?echo BASEURL;?>/js/login.js"></script>
    <title>Login | Bonekify</title>
    <link rel="shortcut icon" href="<?echo BASEURL;?>/img/favicon.ico" type="image/x-icon"/>
</head>

<body class ="col-14 col-s-4 center">
    <div id="register-page">
    <a href="<?echo BASEURL;?>/" ><img src = "<?echo BASEURL;?>/img/bonekify.png" id ="logo"></a>
        <h1>To continue,<br> log in to Bonekify.</h1>
        <hr>
    </div> 
    <div>
  <form id = "register-form" method="post" onsubmit="return ValidateForm()" action="<?= BASEURL?>/login">
    <label for="emailnama">Alamat email atau nama pengguna</label>
    <input type="text" id="emailnama" name="emailnama" onkeyup="checkemailnama()" placeholder="Alamat email atau nama pengguna">

    <label for="sandi">Kata sandi</label>
    <input type="password" autocomplete="off" id="sandi" name="sandi" onkeyup="checksandi()" placeholder="Kata sandi">
  
    <input type="submit" value="Masuk">
    <div id ="submitWarning"><?php
    if (isset($data["exists"])){
      if ($data["exists"] == 1){
        echo "<p><br>Username/email dengan password tidak cocok</p>";
      } else{
        echo "<p><br>Username/email salah</p>";
      }
    }
    ?></div>
  </form>
  <p> <strong>Belum punya akun?</strong> <a id = "gantiwarna" href="register">Daftar.</a>
</div>
</body>