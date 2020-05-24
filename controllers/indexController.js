// logica del negocio / hay distintos metodos

const fs = require('fs');


const index = (req, res) => {
    const listadoPosts = obtenerPost()

    return res.render('index', {listadoPosts});
}

const getBySlug = (req, res) => {
    const listadoPosts = obtenerPost()

    const post = listadoPosts.find(
         (postDelListado)=> {
             return postDelListado.slug == req.params.slug
    });

    if(!post){
        return res.render('postError', {error: 'No se encontro post con el slug ' + req.params.slug});
    }

    return res.render('detail', {post});
};


const obtenerPost = () =>{
    return JSON.parse(fs.readFileSync('data/post.json'));
};

// declaro lo que es exportable
module.exports = {index, getBySlug}