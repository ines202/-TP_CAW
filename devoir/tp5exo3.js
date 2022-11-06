const fs = require('fs');
const path = require('path');
function ngrep(regEx,...Files){
   
    const regex = new RegExp(regEx);
    const found = []
    for(x in Files){

        const isDir = fs.statSync(`./${Files[x]}`).isDirectory();
        
        if(!isDir){
            const data = fs.readFileSync(`${Files[x]}`, 'utf8');
            if(regex.test(data)){
                
                found.push(Files[x])
            }
        }else{
            let recFiles = fs.readdirSync(Files[x]);
            for(file in recFiles){
                recFiles[file] = `./${Files[x]}/${recFiles[file]}`;
            }
            
               let res = ngrep(regEx,...recFiles);
               res.forEach((e)=>{
                found.push(path.basename(e))
               })
        }
        

    }
    
    return found? found :"NONE";
}
console.log(ngrep("ines",'file1','file2','file3','ikram'))