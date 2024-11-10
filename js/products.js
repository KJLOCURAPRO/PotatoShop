//STARTER
 
const imgproductoUno = document.getElementById('imgproductoUno')// imgproductoUno
const productoUno = document.getElementById('productoUno')
const productoUnoInfo = document.getElementById('container')

productoUno.addEventListener("click",()=>{
    imgproductoUno.classList.add('ocult')
    productoUno.classList.add('ocult')
    productoUnoInfo.classList.add('showOne')
})

imgproductoUno.addEventListener("click",()=>{
    imgproductoUno.classList.add('ocult')
    productoUno.classList.add('ocult')
    productoUnoInfo.classList.add('showOne')
})

//CloseOne

const closeButtonOne = document.getElementById('CloseOne')

closeButtonOne.addEventListener("click",()=>{
    imgproductoUno.classList.remove('ocult')
    productoUno.classList.remove('ocult')
    productoUnoInfo.classList.remove('showOne')
})
