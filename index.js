const buttonRow = document.querySelector("#b-row")
const buttonRReverse = document.querySelector("#b-rreverse")
const buttonColumn = document.querySelector("#b-column")
const buttonCReverse = document.querySelector("#b-creverse")
const contenedorFDirection = document.querySelector("#f-direction")
const buttonNWrap = document.querySelector("#b-nwrap")
const buttonWrap = document.querySelector("#b-wrap")
const buttonWReverse = document.querySelector("#b-wreverse")
const contenedorFWrap = document.querySelector(".container-wrap")
const buttonFStart = document.querySelector("#b-fStart")
const buttonFEnd = document.querySelector("#b-fEnd")
const buttonJCenter = document.querySelector("#b-center")
const buttonSBetween = document.querySelector("#b-sBetween")
const buttonSAround = document.querySelector("#b-sAround")
const buttonSEvenly = document.querySelector("#b-sEvenly")
const contenedorJContent = document.querySelector(".container-jcontent")
const buttonAStart = document.querySelector("#b-aStart")
const buttonAEnd = document.querySelector("#b-aEnd")
const buttonACenter = document.querySelector("#b-aCenter")
const buttonAStretch = document.querySelector("#b-aStretch")
const buttonABaseline = document.querySelector("#b-aBaseline")
const contenedorAItems = document.querySelector(".container-aitems")
const cajaBaseline1 = document.querySelector(".baseline-1")
const cajaBaseline2 = document.querySelector(".baseline-2")
const cajaBaseline3 = document.querySelector(".baseline-3")
const buttonFGrow = document.querySelector("#b-fgrow")
const buttonReset = document.querySelector("#b-reset")
const cajasFGrow = document.querySelectorAll("div.grow")

const modificarFlexDirection = (boton, valor) => {

    boton.onclick = () => {     
        contenedorFDirection.style.flexDirection = `${valor}`
    }    
}

modificarFlexDirection(buttonRow, "row")
modificarFlexDirection(buttonRReverse, "row-reverse")
modificarFlexDirection(buttonColumn, "column")
modificarFlexDirection(buttonCReverse, "column-reverse")

const modificarFlexWrap = (boton, valor) => {
    boton.onclick = () => {
        contenedorFWrap.style.flexWrap = `${valor}`        
    }
}

modificarFlexWrap(buttonNWrap, "nowrap")
modificarFlexWrap(buttonWrap, "wrap")
modificarFlexWrap(buttonWReverse, "wrap-reverse")

const modificarJContent = (boton, valor) => {
    boton.onclick = () => {
        contenedorJContent.style.justifyContent = `${valor}`
    }
}

modificarJContent(buttonFStart, "flex-start")
modificarJContent(buttonFEnd, "flex-end")
modificarJContent(buttonJCenter, "center")
modificarJContent(buttonSBetween, "space-between")
modificarJContent(buttonSEvenly, "space-evenly")
modificarJContent(buttonSAround, "space-around")

const modificarAItems = (boton, valor) => {
    boton.onclick = () => {
        contenedorAItems.style.alignItems =  `${valor}`
        contenedorAItems.style.height = "400px"
        if (valor === "baseline") {
            cajaBaseline1.style.height = "auto"
            cajaBaseline2.style.height = "auto"
            cajaBaseline3.style.height = "auto"
            cajaBaseline1.style.fontSize = "45px"
            cajaBaseline2.style.fontSize = "70px"
            cajaBaseline3.style.fontSize = "35px"  
            cajaBaseline1.style.margin = "0"
            cajaBaseline2.style.margin = "0"
            cajaBaseline3.style.margin = "0"                    
        } else if (valor === "stretch") {
            cajaBaseline1.style.height = "auto"
            cajaBaseline2.style.height = "auto"
            cajaBaseline3.style.height = "auto"
            cajaBaseline1.style.fontSize = "20px"
            cajaBaseline2.style.fontSize = "20px"
            cajaBaseline3.style.fontSize = "20px" 
        } else {
            cajaBaseline1.style.height = "150px"
            cajaBaseline2.style.height = "150px"
            cajaBaseline3.style.height = "150px"
            cajaBaseline1.style.fontSize = "20px"
            cajaBaseline2.style.fontSize = "20px"
            cajaBaseline3.style.fontSize = "20px" 
            cajaBaseline1.style.margin = "1rem 1rem"
            cajaBaseline2.style.margin = "1rem 1rem"
            cajaBaseline3.style.margin = "1rem 1rem"  
        }
    }
}

modificarAItems(buttonAStart, "flex-start")
modificarAItems(buttonAEnd, "flex-end")
modificarAItems(buttonACenter, "center")
modificarAItems(buttonAStretch, "stretch")
modificarAItems(buttonABaseline, "baseline")

const modificarFlexGrow = () => {

    buttonFGrow.onclick = () => {      
        for (let i = 0; i <= 3; i++) {
           cajasFGrow[i].style.flexGrow = Math.floor(Math.random() * (3 - 0) + 0)
        }
    }
}

modificarFlexGrow()

const resetFlexGrow = () => {

    buttonReset.onclick = () => {
        for (let i = 0; i <= 3; i++) {
            cajasFGrow[i].style.flexGrow = 0
         }
    }
}

resetFlexGrow()