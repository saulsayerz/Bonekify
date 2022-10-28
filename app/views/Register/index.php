<!DOCTYPE html>

<head>
    <link href="<?echo BASEURL;?>/css/styles.css" rel="stylesheet">
    <script src="<?echo BASEURL;?>/js/register.js"></script>
    <title>Register | Bonekify</title>
    <link rel="shortcut icon" href="<?echo BASEURL;?>/img/favicon.ico" type="image/x-icon"/>
</head>

<body class ="col-14 col-s-4 center">
  <div id  = "register-page">
  <a href="<?echo BASEURL;?>/" ><img src = "<?echo BASEURL;?>/img/bonekify.png" id ="logo"></a>
        <h1>Sign up for free to start<br>listening.</h1>
        <hr>
  </div> 
  <div>
  <form id = "register-form" method="post" onsubmit="return ValidateForm()" action="<?= BASEURL?>/register/submit">
    <div id ="div-email">
      <label for="fname">Apa email kamu?</label>
      <input type="text" id="email" name="email" onkeyup="emailChange()" placeholder="Masukkan email kamu..">
    </div> 

    <div id ="div-sandi">
      <label for="lname">Buat kata sandi</label>
      <input type="password" autocomplete="off" id="sandi" name="sandi" onkeyup="sandiWarning()" placeholder="Masukkan kata sandi..">
    </div> 

    <div id ="div-ksandi">
      <label for="lname">Konfirmasi sandi kamu</label>
      <input type="password" autocomplete="off" id="ksandi" name="ksandi" onkeyup="ksandiWarning()" placeholder="Masukkan lagi sandi kamu..">
    </div> 

    <div id ="div-nama">
      <label for="lname">Siapa namamu?</label>
      <input type="text" id="nama" name="nama" onkeyup="namaWarning()" placeholder="Masukkan nama profil..">
    </div>
  
    <input type="submit" value="Submit" >
    <div id ="submitWarning"></div>
  </form>
  <br>
  <p class="TOA">By clicking on sign-up, you agree to Bonekify's Terms and Conditions of Use.<br><br>
To learn more about how Bonekify collects, uses, shares and protects your personal data, please see Bonekify's Privacy Policy.</p>
  <p> <strong>Punya akun?</strong> <a id = "gantiwarna" href="login">Masuk.</a>
</div>
</body>