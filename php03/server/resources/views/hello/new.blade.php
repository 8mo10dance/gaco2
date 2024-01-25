@extends('layouts.hello')
@section('title', 'New')
@section('content')
<form method="POST" action="/hello">
    @csrf
    <input type="text" name="name" />
    <input type="submit" />
</form>
@endsection
