let name = "Tonny"

for(let L = 0; L < name.length; L++){
 for(let i = L + 1; i < name.length; i++){
   if(name[L] === name[i]){
     console.log("A letra " + name[L] + " se repete na posição " + L + " e " + i)
   }
 }
}
