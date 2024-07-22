const Article = require('../models/Article');
const fs = require('fs');

exports.addArticle = (req, res, next) => {
  console.log(req.body)
  const articleObject = req.body;
  delete articleObject._id;
  
  const article = new Article({
      ...articleObject
  });
  article.save()
  .then(() => res.status(201).json({ message: 'Objet enregistré !'})) 
  .catch(error => { res.status(400).json( { error })})
};

exports.getAllArticles = (req, res, next) => {
    Article.find().then(
      (articles) => {
        res.status(200).json(articles);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
}

//changer la quantité
//calculer le prix total
  exports.updateArticle = (req, res, next) => {
    const articleObject =  { ...req.body };
  
    Article.findOne({_id: req.params.id})
        .then((article) => {
                Article.updateOne({ _id: req.params.id}, { ...articleObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
            
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
 };

 exports.deleteOneArticle = (req, res, next) => {
    Article.findOne({ _id: req.params.id})
      .then(article => {
              const filename = article.imageUrl.split('/images/')[1];
              fs.unlink(`images/opt_${filename}`, () => {
                Article.deleteOne({_id: req.params.id})
                      .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                      .catch(error => res.status(401).json({ error }));
              });
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};