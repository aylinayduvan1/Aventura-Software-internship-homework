let colorlist =[] //sonda diziye ekleyip ekrana yazdırmak için boş bir dizi
//Rastgele sayı üretmek için ayrı bir fonksiyon,
function rasgelesayi (){
        return Math.floor(Math.random()*256) //üretilen sayının 0-255 arasında olması için
}    
console.log(rasgelesayi());


//rengi üretmen için ayrı bir fonksiyon 
function randomcolor() {
    return "rgb(" + rasgelesayi() + "," + rasgelesayi() + "," + rasgelesayi() + ")"; //rgb formunda olması için
}
console.log(randomcolor());

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//kullanıcının girdiği rakama göre renk üretmen için ayrı bir fonksiyon

rl.question("kaç tane renk kodu almak istiyorsunuz?", function(renkuretimi){  //sorunun ne olacağını ve fonksiyonu yazdığımız yer.
    temprenk = parseInt(renkuretimi); //renkuretimine sayı girileceği için inte çevirip temprenk değişkenine atadım.
    let i = 0
    while(i <= temprenk){
        i++;
        function sayiuretimi(){
            return randomcolor();
        }
         if(i === temprenk){
            continue; // i kullanıcnın girdiği sayıya eşit olana kadar devam edecek.
        }
        colorlist.push(sayiuretimi()); // bu fonksiyonu boş olan colorlist dizine ekleyip
    }
    console.log(colorlist); //listeyi ekrana yazdırdım.
})
rl.on("close", function() {
    console.log("\n yanlış karakter girişi.");
    process.exit(0);
});




