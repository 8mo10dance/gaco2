<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index($msg = '') {
        return view('hello.index', ['msg' => $msg]);
    }

    public function new() {
        return view('hello.new');
    }
}
