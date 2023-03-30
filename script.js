const colorDay = document.getElementById('colorOfTheDay')

const loadColor = (ColorOfTheDay) => {
    fetch(`https://colors.zoodinkers.com/api?date=${ColorOfTheDay}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayColor(data)
        })
}

const displayColor = (data) => {
    colorDay.style.backgroundColor = `${data.hex}`
    colorDay.innerText = `Color Of The Day : ${data.date}`
}

const inputDateField = document.getElementById("text")
document.getElementById("colorButton").addEventListener('click', function () {   
    const inputDate = inputDateField.value;
    console.log(inputDate)    
    loadColor(inputDate)
   
})
document.getElementById("clearButton").addEventListener('click', function () {
    // const inputDate = inputDateField.value;
    inputDateField.value='';
    colorDay.style.backgroundColor = ''  
    colorDay.innerText='';
   
})

