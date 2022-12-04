<?php 
class Controller{
    public function view($view, $data = []){
        require_once ROOTPATH . '/app/views/'.$view.'.php';
    }
    public function model($model){
        require_once ROOTPATH . '/app/models/'.$model.'.php';
        return new $model;
    }
}
?>