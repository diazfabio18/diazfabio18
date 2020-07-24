//read of the template file

const fs = require('fs').promises;

//const iconsPlaceholder = '%{{icon_size}}%';

fs.readFile('./Readme.md.tpl', {encoding: 'utf-8'})
.then(markdownTemplate =>{
    console.log(markdownTemplate);
})

