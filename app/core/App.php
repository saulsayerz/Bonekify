<?php 
class App{
    protected $controller = 'ErrorPage';
    protected $method = 'index';
    protected $params =[];
    public function __construct(){
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // set cookie penghitung jumlah lagu bila tidak sign in
        if (!isset($_SESSION["username"])) {
            if (!isset($_COOKIE["playCount_notLoggedIn"])) {
                setcookie("playCount_notLoggedIn", 0, time() + (86400 * 1), "/"); 
            }
        }
        //url[0] adalah nama file controller, url[1] adalah nama method
        $url = $this->parseURL();

        //cek apakah ada file dengan nama tersebut, kalau ada jadikan nama controller
        if(isset($url[0])){
            if(file_exists('../app/controllers/'.$url[0].'.php')){
                $this->controller = $url[0];
                unset($url[0]);
            }
        }
        else{
            $this->controller = 'Home';
        }

        require_once '../app/controllers/'.$this->controller.'.php';
        $this->controller = new $this->controller;

        //cek apakah terdapat method pada url dan method tersebut ada pada kelas controller. Bila ada timpa
        if(isset($url[1])){
            if(method_exists($this->controller,$url[1])){
                $this->method = $url[1];
                unset($url[1]);
            }
        }

        //ambil parameter bila ada
        if(!empty($url)){
            $this->params = array_values($url);
        }

        call_user_func_array([$this->controller,$this->method], $this->params);


    }

    public function parseURL(){
        if( isset($_GET['url'])){
            $url = rtrim($_GET['url'],'/');
            $url = filter_var($url,FILTER_SANITIZE_URL);
            $url = explode('/',$url);
            return $url;
        }
    }
}
?>