<!DOCTYPE html>
<html>
<head>
    <title><? echo (isset($data["title"]) ? $data["title"] : "Bonekify")?></title>
    <link href="<?echo BASEURL;?>/css/styles.css" rel="stylesheet">
    <link rel="shortcut icon" href="<?echo BASEURL;?>/img/favicon.ico" type="image/x-icon"/>
</head>
<body id="bodyflex">
<div id="sidebar" class = "col-s-1 col-13">
  <img id="headerlogo" src="<?echo BASEURL;?>/img/bonekify.png">
  <!-- SIDEBAR LINKS -->
  <a class="navbar-links <? echo ((isset($data["route"]) and $data["route"] == 'Home') ? " active": "") ?>" href="<?echo BASEURL?>">Home</a>
  <a class="navbar-links <? echo ((isset($data["route"]) and $data["route"] == 'Search') ? " active": "") ?>" href="<?echo BASEURL?>/search">Search</a>
  <? if (isset($_SESSION["isAdmin"]) and $_SESSION["isAdmin"] == 1) {
    echo "<a class=\"navbar-links " . ((isset($data["route"]) and $data["route"] == 'Tambah Lagu') ? " active": "") . "\" href=\"" . BASEURL . "/tambahlagu\">Tambah Lagu</a>";
    echo "<a class=\"navbar-links " . ((isset($data["route"]) and $data["route"] == 'Tambah Album') ? " active": "") . "\" href=\"" . BASEURL . "/tambahalbum\">Tambah Album</a>";
  }?>
  <a class="navbar-links <? echo ((isset($data["route"]) and $data["route"] == 'album') ? " active": "") ?>" href="<?echo BASEURL?>/album">Daftar Album</a>
  <? if (isset($_SESSION["isAdmin"]) and $_SESSION["isAdmin"] == 1) {
    echo "<a class=\"navbar-links " . ((isset($data["route"]) and $data["route"] == 'Daftar User') ? " active": "") . "\" href=\"" . BASEURL . "/users\">Daftar User</a>";
  }?>
  <? if (isset($_SESSION["user_id"])) {
    echo "<a class=\"navbar-links " . ((isset($data["route"]) and $data["route"] == 'premium') ? " active": "") . "\" href=\"" . BASEURL . "/premium\">Premium</a>";
  }?>
  <?php 
  ?>
</div>
<div id="side">
<div class="topnav">
  <?php if (isset($data["route"]) and $data["route"] != 'Search'){?>
  <form id="tes" method="post" action="<?= BASEURL?>/search">
    <input id="navbar-search" name="navbar-search" type="text" class ="col-11 col-s-7" placeholder="Apa yang ingin kamu dengarkan?">
  </form>
  <?php }?>
  <!-- DROP DOWN BOS -->
  <div class="dropdown">
    <button class="dropbtn"><?php
      if (isset($_SESSION["username"])){
        echo $_SESSION["username"];
      }
      else {
        echo 'Not Logged In';
      }
      ?></button>
    <?php if (isset($_SESSION["username"])){
      echo "<div class=\"dropdown-content\">
      <a href=\"" . BASEURL . "\home\logout\">Log out</a>
    </div>" ;}
    else{
      echo "<div class=\"dropdown-content\">
      <a href=\"" . BASEURL . "\login\">Log in</a>
    </div>" ;
}
    ?>

  </div>
  
</div>
<div id='main'>
