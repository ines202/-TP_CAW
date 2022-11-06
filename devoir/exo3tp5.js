const fs = require('fs');
const path = require('path');
function ngrep(regEx,...fichier){
   
    const reg = new RegExp(regEx);
    const trouver = []
    for(x in fichier){

        const isDir = fs.statSync(`./${fichier[x]}`).isDirectory();
        
        if(!isDir){
            const Y = fs.readFileSync(`${fichier[x]}`, 'utf8');
            if(reg.test(Y)){
                
                trouver.push(fichier[x])
            }
        }else{
            let recfichier = fs.readdirSync(fichier[x]);
            for(file in recfichier){
                recfichier[file] = `./${fichier[x]}/${recfichier[file]}`;
            }
            
               let res = ngrep(regEx,...recfichier);
               res.forEach((e)=>{
                trouver.push(path.basename(e))
               })
        }
    }
    
    return trouver? trouver :"NONE";
}
console.log(ngrep("ines",'file1','file2','file3','ikram'))