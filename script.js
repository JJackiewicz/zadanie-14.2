var movies = [
    {id: 1, title: 'Blade Runner', desc: 'Film o androidzie', image: 'http://www.impawards.com/1982/posters/blade_runner.jpg'}, 
    {id: 2, title: 'King Kong', desc: 'Film o gorylu', image: 'http://www.impawards.com/1933/posters/king_kong.jpg'},
    {id: 3, title: 'Jurassic Park', desc: 'Film o dinozaurach', image: 'http://www.impawards.com/1993/posters/jurassic_park_ver1.jpg'}
];
var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});
var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));