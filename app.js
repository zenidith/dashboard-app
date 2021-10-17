// background image and default
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=korea")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        // document.p.style = ``
        document.getElementById("author").textContent = `photograph: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1588043213440-fd9c881853e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzM5MTg5MTk&ixlib=rb-1.2.1&q=80&w=1080)`
    })

// crypto tickers
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
            <p>&#127919: A$${data.market_data.current_price.aud}</p>
            <p>&#128200: A$${data.market_data.high_24h.aud}</p>
            <p>&#128201: A$${data.market_data.low_24h.aud}</p>
        `
    })

        
    .catch(err => console.error(err))


// time
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

// geolocation / weather call
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />    
                <p class="weather-temp">${Math.round(data.main.temp)} c</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.log(err))
});