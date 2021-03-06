<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'id_rol'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

        // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public static function search($query =''){
        if(!$query){
            
            return $users = DB::table('users')
            ->join('roles', 'users.id_rol', '=', 'roles.id')
            ->select('users.*', 'roles.nombre_rol')
            ->get();
        }
        return self::where('name','like',"%$query%")
        ->orWhere('email','like',"%$query%")
        ->join('roles', 'users.id_rol', '=', 'roles.id')
        ->select('users.*', 'roles.nombre_rol')
        ->get();
    }

    public static function userRole($id){

        return $userRol = DB::table('users')
        ->where('users.id','=', $id)
        ->join('roles', 'users.id_rol', '=', 'roles.id')
        ->select('roles.nombre_rol')
        ->get();
    }
}
