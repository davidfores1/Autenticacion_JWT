<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class UsuarioController extends Controller
{
    public function register(Request $request){
    
        $user = User::where('email',$request['email'])->first();
        
        if($user){

        $response['status']= 0;
        $response['message']= "El correo ya exite";
        $response['code']= 409;

        }else{

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'id_rol' => $request->id_rol,
            ]);
            $response['status']= 1;
            $response['message']= "Usuario registrado con éxito";
            $response['code']= 200;
            
        }

        return response()->json($response);
    }

    public function login(Request $request){
        $credentials = $request->only('email','password');

        try {
            if(!JWTAuth::attempt($credentials)){
                $response['status']= 0;
                $response['code']= 401;
                $response['data']= null;
                $response['message']= "El correo o el password es incorrecto";
                return response()->json($response);
            }
            
        } catch (JWTException $e) {
            $response['data']= null;
            $response['message']= "El Token no puede ser creado";
            $response['code']= 500;
            return response()->json($response);
        }

        $user = auth()->user();
        $data['token'] = auth()->claims([
          'user_id' => $user->id,
          'email' => $user->email
        ])->attempt($credentials);

        $response['status']= 1;
        $response['code']= 200;
        $response['data']= $data;
        $response['message']= "Ingreso Exitoso!";
        return response()->json($response);
    }

    public function index()
    {
        return User::all();
    }

    public function update(Request $request, $id)
    {
        $usuario = User::findOrFail($id);
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->password = $request->password;
        $usuario->id_rol = $request->id_rol;
        $usuario->update();
        return $usuario;
    }

    public function destroy($id)
    {
        $usuario = User::findOrFail($id);
        $usuario->delete();
    }
    
}
