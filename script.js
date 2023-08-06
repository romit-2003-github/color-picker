let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
let colorBtn = document.querySelector('.btn');

colorInput.addEventListener('input',()=>{
    let col = colorInput.value;
    hexInput.value = col; 
    document.body.style.backgroundColor = col;

    document.querySelector('h1').style.color = 'white';
    
});

colorBtn.addEventListener('click',()=>{
    console.log(hexInput.value);
    if (hexInput.validity.valid) {
        document.body.style.backgroundColor= `${hexInput.value}`;
        document.querySelector('h1').style.color='white';
    }else{
        alert("Invalid Hex");
    }
})