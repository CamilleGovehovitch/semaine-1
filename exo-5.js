console.log('hello world');

const tva = 1.196;
let prixHt = window.prompt('Entrez le prix unitaire de l' + "'" +'article');
let nbsArticle = window.prompt('Entrez le nombre d' + "'" + 'articles');
let unitTtc = prixHt * tva;
console.log(unitTtc);
let prixArticlesTtc = unitTtc * nbsArticle;
console.log( prixArticlesTtc);
document.getElementById('a').innerHTML = 'Le prix unitaire du produit sans TVA est: ' + prixHt;
document.getElementById('b').innerHTML = 'Le prix unitaire du produit avec TVA est: ' + unitTtc;
document.getElementById('c').innerHTML = 'Le nombre de produit total en stock: ' + nbsArticle;
document.getElementById('d').innerHTML = 'Le prix TTC du stock: ' + prixArticlesTtc;