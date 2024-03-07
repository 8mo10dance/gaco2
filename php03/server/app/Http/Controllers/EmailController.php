<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestEmail;

class EmailController extends Controller
{
    public function sendEmail() {
        Mail::to('test@example.com')->send(new TestEmail());
        return response()->json(['message' => 'send']);
    }
}
