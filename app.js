fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=korea")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        // document.p.style = ``
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1588043213440-fd9c881853e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzM5MTg5MTk&ixlib=rb-1.2.1&q=80&w=1080)`
    })

    fetch("https://api.coingecko.com/api/v3/coins/solana")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        /**
         * Challenge: Add the name and icon of the cryptocurrency
         * to the upper-left of the dashboard page
         * 
         * Use `data.name` and `data.image.small` to access that info
         */
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
    })
    .catch(err => console.error(err))

