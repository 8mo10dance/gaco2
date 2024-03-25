<?php

namespace App\Http\Controllers;

use App\Mail\ExampleMail;
use Illuminate\Support\Facades\Mail;

class ExampleController extends Controller
{
    public function sendEmail() {
        Mail::to('test@example.com')->send(new ExampleMail());
        return response()->json(['message' => 'SEND MAIL']);
    }
}
