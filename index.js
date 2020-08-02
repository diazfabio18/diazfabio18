//read of the template file

const fs = require('fs').promises;

const fetch = require('node-fetch');

//const iconsPlaceholder = '%{{icon_size}}%';

/*fs.readFile('./Readme.md.tpl', {encoding: 'utf-8'})
.then(markdownTemplate =>{
    console.log(markdownTemplate);
})*/

const generateInstagramHTML = ({media_url,permalink}) => `
<a href='${permalink}' target='_blank'>
  <img width='20%' src='${media_url}' alt='Instagram photo'/>
</a>
`

const getPhotosFromInstagram = () =>
  fetch('https://instagram.com/fyluj_electronic?__a=1')
    .then(res => res.json())
    .then(({graphql}) => {
      const { user } = graphql
      const {edge_owner_to_timeline_media: {edges}} = user
      return edges
    })

    ;(async () => {
        const [template, photos] = await Promise.all([
          fs.readFile('README.md.tpl', { encoding: 'utf-8' }),
          getPhotosFromInstagram()
        ])
      
        // create latest photos from instagram
        const latestInstagramPhotos = photos
          .slice(0, 6)
          //.map(({node}) => generateInstagramHTML(node))
          //.join('')

        //Test image urls from my
        latestInstagramPhotos.map(({node}) =>
            console.log(node)    
        )


    })()
