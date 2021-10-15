// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters
// to toLocaleTimeString
const date = new Date()
console.log(date.toLocaleTimeString("en-us", {timeStyle: "short"}))

time() {


document.getElementById("time").textContent = `
${time}
`
}

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
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>now: A$${data.market_data.current_price.aud}</p>
            <p>high: A$${data.market_data.high_24h.aud}</p>
            <p>low: A$${data.market_data.low_24h.aud}</p>
        `
    })

        
    .catch(err => console.error(err))

