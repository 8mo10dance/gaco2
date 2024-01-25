@extends('layouts.hello')
@section('title', 'Index')
@section('content')
<table>
<tr><th>Name</th><th>Mail</th><th>Age</th></tr>
@foreach ($items as $item)
<tr>
    <td>{{$item->name}}
    <td>{{$item->mail}}
    <td>{{$item->age}}
</tr>
@endforeach
</table>
@endsection
