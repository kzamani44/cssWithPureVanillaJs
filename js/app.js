let body = document.querySelector('body')
let wrapper = document.querySelector('.wrapper')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let ul = document.querySelector('ul')

//Create date element & set attributes
let dateElem = document.createElement('h4')
dateElem.setAttribute('class','item')
dateElem.setAttribute('id','date')
dateElem.innerHTML = "Todays date is ... "
//end 

// remove ul element & append date element
wrapper.removeChild(ul)
wrapper.appendChild(dateElem)
wrapper.appendChild(ul)
// end 

const bodyStyle = () => {
    body.style.margin = '0 auto'
    body.style.padding = '0'
    body.style.boxSizing = 'border-box'
    body.style.fontFamily = "Arial"
}
const randomColor = () => {
    let colorStr = "0123456789abcdef"
    let hexCode = ['#']
    for (let i = 0; i < 6; i++) {
        hexCode.push(colorStr[Math.floor(Math.random()*colorStr.length)])
    }
    return hexCode.join('')

}
const divStyle = () =>{
    wrapper.style.width = "750px"
    // wrapper.style.backgroundColor = "#ddd"
    wrapper.style.height = "100vh"
    wrapper.style.margin = "0 auto"
    wrapper.style.padding = "0"
    wrapper.style.display = "flex"
    wrapper.style.flexDirection = "column"
    wrapper.style.gap = "1rem"
    wrapper.style.textAlign = "justify"
}
const h1style = () => {
    let h1Arr = h1.innerHTML.split(' ')
    let year = ` <span>${h1Arr[h1Arr.length-1]}</span>`
    let text = h1Arr.pop()
    text = h1Arr.join(' ')+year
    h1.innerHTML = text
    h1.style.margin = "5px"
    h1.style.fontSize = "20px"
    h1.style.textAlign="center"
    let yearStyle = document.querySelector('span')
    yearStyle.style.fontSize = "60px"
    yearStyle.style.color = randomColor()
}
const h2style = () => {
    let h2Txt = h2.innerHTML.split(' ')
    h2Txt.unshift("<a>") // add anchor Tag at beginning
    h2Txt.push("</a>") 
    h2.innerHTML = h2Txt.join(' ')
    let a = document.querySelector('a')
    a.setAttribute('href','#')
    a.style.color = "#222"
    h2.style.textAlign ="center"
    h2.style.fontSize = "20px"
    h2.style.fontWeight = "300"
}
const tDate = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    let hour = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    
    let todayDate 
    switch(month){
        case 1:
            todayDate = `January ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 2:
            todayDate = `February ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 3:
            todayDate = `March ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 4:
            todayDate = `April ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 5:
            todayDate = `May ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 6:
            todayDate = `June ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 7:
            todayDate = `July ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 8:
            todayDate = `August ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 9:
            todayDate = `September ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 10:
            todayDate = `October ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 11:
            todayDate = `November ${day}, ${year} ${hour}:${mins}:${secs}`
            break
        case 12:
            todayDate = `December ${day}, ${year} ${hour}:${mins}:${secs}`
            break
    }

    // console.log(todayDate)
    dateElem.innerHTML = todayDate
    dateElem.style.width = "250px"
    dateElem.style.height = "40px"
    dateElem.style.backgroundColor = randomColor()
    dateElem.style.padding = "10px"
    dateElem.style.borderRadius = "7px"
    dateElem.style.margin = '0 auto'
    dateElem.style.textAlign="center"

}
const Ul = () => {
    ul.style.display = 'flex'
    ul.style.flexDirection = 'column'
    ul.style.justifyContent = 'space-around'
    ul.style.alignItems =''
    ul.style.listStyle = 'none'
    ul.style.height = "70%"
    // ul.style.backgroundColor = "pink"

    let listItems = document.querySelectorAll('li')
    listItems.forEach(list => {
        list.setAttribute('class','list-item')
        list.style.padding = "1.2rem"
        list.style.borderRadius = "5px"

        if(list.innerHTML.includes('Done')){
            list.setAttribute('id','done')
            list.style.backgroundColor = "#21BF73"
        }else if(list.innerHTML.includes('Ongoing')){
                list.setAttribute('id','ongoing')
                list.style.backgroundColor = "#FDDB3A"
        }else{
            list.style.backgroundColor = "#FD5E53"
        }

    });

}
/* Remove Comments to see dynamic color changes */
divStyle()
bodyStyle()
//setInterval(h1style,1000) 
h2style()
//setInterval(tDate,1000)
Ul()