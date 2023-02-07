let round = prompt("rount sayısı giriniz:");
let kullanici = 0;
let bilgisayar = 0;
let bilgisayar_puani = 0;
let kullanici_puani = 0;
let input_user;
let kullanicisecimsonuc;
const sonsayi= round / 2 + 1;
const tas = "t"
const kagit = "k"
const makas = "m"



function secim(){
    console.log(input_user)
    if (input_user === tas ){
        kullanici = tas
        return true
    }else if(input_user === kagit){
        kullanici = kagit
        return true
    }else if(input_user === makas){
        kullanici = makas
        return true
    }else{
        return false
    }
    
}



function bilsecfonk(){
    const bilgisayar_sec = Math.floor(Math.random() * 3)
    if(bilgisayar_sec === 1){
        bilgisayar = tas
    }else if(bilgisayar_sec === 2){
        bilgisayar = kagit
    }else if(bilgisayar_sec === 3){
        bilgisayar = makas
    }
    console.log(bilsecfonk)
}

function karsilastirmafonk(kullanicigirisi, bilgisayargirisi){
    if(kullanicigirisi === bilgisayargirisi){
        return "berabere"
    }else if(kullanicigirisi === tas){
        if(bilgisayargirisi===kagit){
            bilgisayar_puani +=1
        }else if(bilgisayargirisi===makas){
            kullanici_puani +=1
        }
    }else if(kullanicigirisi === kagit){
        if(bilgisayargirisi === tas){
            kullanici_puani +=1
        }else if(bilgisayargirisi === makas){
            bilgisayar_puani +=1
        }
    }else if(kullanicigirisi === makas){
        if(bilgisayargirisi === tas){
            bilgisayar_puani +=1
        }else if(bilgisayargirisi=== kagit){
             kullanici_puani +=1
        }
    }
}


while(0 < round) {
do {
    input_user = prompt("taş = t , kağıt = k, makas = m seçimi yapınız:");
    kullanicisecimsonuc = secim()
    alert(input_user,kullanicisecimsonuc)
  }
  while(kullanicisecimsonuc === false);

  bilsecfonk() 
  alert(kullanici,bilgisayar)
  karsilastirmafonk(kullanicigirisi, bilgisayargirisi) 
  alert(kullanici_puani,bilgisayar_puani)

    if(bilgisayar_puani || kullanici_puani === sonsayi){
        break;
    }
    round++;
}
