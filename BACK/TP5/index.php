<?php

require 'vendor/autoload.php';

function setHeaders($response){
    return $response->withHeader('Access-Control-Allow-Origin: *')->withHeader('Access-Control-Allow-Headers: Content-Type, Authorization')->withHeader('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
}

$app = new \Slim\App();
$app->get("/hello", "hello");
$app->get("/", "test");

$app->post('/users/login', 'login');
$app->post('/users/register', 'register');

$app->get('/articles', 'getAllArticles');
$app->get('/articles/{id}', 'getOneArticles');


$app->users = array("login" => "francois", "password" => "LeMotDePasse");

function hello($request, $response, $args){
    return setHeaders($response)->write("Ceci est un test");
}

function login($request, $response, $args){
    $body = $request->getParsedBody();
    $requestLogin = $body["login"];
    $requestPassword = $body["password"];
    
    foreach ($app->users as $user) {
        $logged = ($user['login'] == $requestLogin && $user['password'] === $requestPassword) ? true : false;
        if($logged) break;
    }
    
    return setHeaders($response)->write($logged ? "logged" : "not logged");
}

function register($request, $response, $args){
    $body = $request->getParsedBody();

    $dto = array(
          'firstname' => $body['firstname'],
          'lastname' => $body['lastname'],
          'gender' => $body['login'],
          'password' => $body['password'],
          'prenom' => $body['prenom'],
          'country' => $body['country'],
          'city' => $body['city'],
          'postalCode' => $body['postalCode'],
          'address' => $body['address'],
          'email' => $body['email'],          
          'phoneNumber' => $body['phoneNumber']
    );

    return setHeaders($response)->write($dto);
}


function getAllArticles($request, $response, $args) {
    $data = file_get_contents("articles.json");
     return setHeaders($response)->write($data);
}

function getOneArticles($request, $response, $args){
    $data = file_get_contents("articles.json");
    $articles = json_decode($json,1);
    $articleId = $args['id'];
    
    $item = null;
    
    foreach($articles as $article) {
        if ($articleId == $article->id) {
            $item = $article;
            break;
        }
    }
    
    $res = json_encode($item);
    
    return setHeaders($response)->write($res);
}

$app->run();