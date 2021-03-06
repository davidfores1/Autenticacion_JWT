<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
// Route::resource('clientes', 'ClienteController');
Route::resource('clientes', 'App\Http\Controllers\ClienteController');
Route::resource('usuarios', 'App\Http\Controllers\UsuarioController');

