<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HelloController extends Controller
{
    public function index() {
        $items = DB::select('select * from people');
        return view('hello.index', ['items' => $items]);
    }

    public function new() {
        return view('hello.new');
    }

    public function create(Request $request) {
        $name = $request->name;
        return view('hello.index', ['msg' => 'こんにちは' . $name . 'さん']);
    }
}
