fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=cute-cats")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        // document.p.style = ``
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })