let sayidizisi = []; // boş bir sayı dizisi oluşturdum for da oluşturduğum sayıları eklemek için.
let ciftsayilar = [];
let teksayilar = [];

for(let i=1; i<101; i++){ // 1 den 100 e kadar 1er 1er sayıların artan sayıların oluşması için
    sayidizisi.push(i) // js de dizilere ekleme yapılması için push metodunu kullandım. 
 }
console.log(sayidizisi) //console sayıdizisi dizisini bastırdım.


var j = 0; //bir j değeri tanımladım ve j yi 0 dan başlattım.
while(j < 101){
    j++; //başlattığım bu j yi birer birer arttırdım. bu da while döngüsünün 1 den başlamasına sebep oldu ve 100 e kadar devam etmesi için 101 yazdım.
    if(j % 2 == 0){    // j değerinin modu 0 sa bu çift sayıdır.
        ciftsayilar.push(j) //bu çift sayıları yukarda tanımladığım ciftsayilar dizine ekledim. 
    }else{
        teksayilar.push(j) //eğer çift sayı değilse tektir ve onu da teksayılar dizisine ekledim.
    }
    
}

//consol.log yapıp ciftsayilar ve teksayilar dizilerini bastırında her bir döngü adımında birikerek devam ediyordu. bunun önüne foreach ile geçtim.
//döngü oluşturmamızı ve bu döngüyü "sırayla "çalıştırmamızı sağladığı için..
ciftsayilar.forEach(ciftsayilar => console.log(ciftsayilar)); 
teksayilar.forEach(teksayilar => console.log(teksayilar)); 