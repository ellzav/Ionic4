const productName=document.querySelector('#productName')
const productPrice=document.querySelector('#productPrice')
const buttonSave=document.querySelector('#button-save')
const buttonCancel=document.querySelector('#button-cancel')
const productList= document.querySelector('#product-list')
const totalOutput=document.querySelector('#Total')
let total=0
const createNewProduct =(name,price)=>{
    const ionCard=document.createElement('ion-card')
    const newProductItem=document.createElement('ion-card-content')
    newProductItem.textContent=name + ':'+ price + '€'
   ionCard.appendChild(newProductItem)
    productList.appendChild(ionCard)
}

const clearInput = (va) => {
    productName.value=''
    productPrice.value=''
    if(va=="cancel"){
        totalOutput.textContent=0
        productList.textContent=''
        total=0
    }
}


const presentAlert= ()=>{
    const alert=document.createElement('ion-alert')
    alert.header ='Invalid Data'
    alert.subHeader="Please verify yours inputs"
    alert.message='Incorrect Name or Price'
    alert.buttons=['ok']
    document.body.appendChild(alert)
    return alert.present()
}

const isEmpty= str=> !str.trim().length;
buttonSave.addEventListener('click',()=>{
    const name=productName.value
    const price= productPrice.value

    if(isEmpty(name)||price<=0||isEmpty(price)){
        presentAlert()
        return
    }
    createNewProduct(name,price)
    total += + price
    totalOutput.textContent=total
    clearInput('normal');
})

buttonCancel.addEventListener('click',()=>{
    clearInput('cancel')
})