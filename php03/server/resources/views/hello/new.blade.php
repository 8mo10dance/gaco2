<html>
    <body>
        <h1>Hello</h1>
        <form method="POST" action="/hello">
            @csrf
            <input type="text" name="name" />
            <input type="submit" />
        </form>
    </body>
</html>
