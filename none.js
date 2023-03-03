function tabuada(){
    let nox = document.getElementById('txtn')
    let tab = document.getElementById('sel')

    if (nox.value.length == 0) {
        alert('ERRO! Digita um number')
    }else{
        let p = Number(nox.value);
        let c = 1; 
        while(c <= 10){
            let option = document.createElement('option')
            option.text = `${c} x ${p} = ${c*p}`;
            option.value = `tab ${c}`;
            tab.appendChild(option)
            c++;
        }
    }
    
    
    

}