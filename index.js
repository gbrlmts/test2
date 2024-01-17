const data = document.getElementById("data")

const random = () => {
    const randomNumber = setInterval(() => {
        const rN = Math.floor(Math.random() * 10)

                const newSpan = data.innerHTML = rN

                return newSpan
    }, 1000)



    return randomNumber
}

random()

