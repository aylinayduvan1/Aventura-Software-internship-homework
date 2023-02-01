//node.js de kullanıcıdan terminalden veri girişi almak için kullanılan kod kalıbı "rl" benim belirlediğim isim.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("çarpım tablosu kaça kadar olsun?", function(carpımtablosu){  //sorunun ne olacağını ve fonksiyonu yazdığımız yer.
    let i =0;
    while (i < carpımtablosu){ //bu döngü ile 1 den kullanıcının girdiği sayı neyse ona kadar bir döngü üretecek.
        i++; // birer birer atsın
        console.log();
        for (let j = 1; j <= carpımtablosu; j++) { //birden kullanıcının yukarda giridği sayıya kadar birer birer artan sayı üretsin
            console.log(i + "x" + j + "=" + i * j); //üretilen "i" sayısı ile üretilen "j" sayısını her döngüde çarpsın
        }
        console.log(); 
    }
    
})
rl.on("close", function() {
    console.log("\n yanlış karakter girişi.");
    process.exit(0);
});







   
