<?php

// ItemController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use DB;
class UserController extends Controller
{
    public function find(Request $request)
    {   
        $param = $request->all();
        $email = $param["email"];
        $user = User::where('email', $email)
                ->first();
        return response()->json($user);
    }
}