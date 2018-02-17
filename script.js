var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        actor: 'Daniel Radcliffe',
        poster: 'http://ocdn.eu/images/pulscms/M2Q7MDMsMCwyZDAsMSwx/21f973867807dbb87dda1f84a988902b.jpg'
        // poster: src: /
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        actor: 'Cartoon animals'
    },
    {
        id: 3,
        title: 'Ojciec chrzestny',
        desc: 'Film o mafii',
        actor: 'Marlon Brando'
    },
    {
        id: 4,
        title: 'Forrest Gump',
        desc: 'Film o jakimś kolesiu',
        actor: 'Tom Hanks'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.actor),
        React.createElement('img', {src:}, movie.poster)
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));
