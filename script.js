var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        actor: 'Daniel Radcliffe',
        poster: 'http://ocdn.eu/images/pulscms/M2Q7MDMsMCwyZDAsMSwx/21f973867807dbb87dda1f84a988902b.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        actor: 'Cartoon animals',
        poster: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'Ojciec chrzestny',
        desc: 'Film o mafii',
        actor: 'Marlon Brando',
        poster: 'https://www.filmfan.pl/obrazki/plakaty/1972/ojciec-chrzestny-1972_20111121183135.jpg'
    },
    {
        id: 4,
        title: 'Forrest Gump',
        desc: 'Film o jakimś kolesiu',
        actor: 'Tom Hanks',
        poster: 'https://www.galeriaplakatu.com/img/product_media/190695_1020_A.jpg'
    }
  ];





//   var moviesElements = movies.map(function(movie) {
//     return React.createElement('li', {key: movie.id},
//         React.createElement('h2', {}, movie.title),
//         React.createElement('p', {}, movie.desc),
//         React.createElement('p', {}, movie.actor),
//         React.createElement('img', {src: movie.poster})
//       );
//   });

//   var element =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {}, moviesElements)
//   );




  var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
      },

        render: function() {
            return (
                 React.createElement('li', {key: movie.id},
                    React.createElement('h2', {}, movie.title),
                    React.createElement('p', {}, movie.desc),
                    React.createElement('p', {}, movie.actor),
                    React.createElement('img', {src: movie.poster})
              )
            )
        )}
    })      

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.object.isRequired,
    },
    
    render: function () {
        return (
            React.createElement('h2', {}, movie.title)
        )
    }
});


var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.object.isRequired,
    },
    
    render: function () {
        return (
            React.createElement('p', {}, movie.desc)
        )
    }
});

var MovieActor = React.createClass({
    propTypes: {
        actor: React.PropTypes.object.isRequired,
    },
    
    render: function () {
        return (
            React.createElement('p', {}, movie.actor)
        )
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.object.isRequired,
    },
    
    render: function () {
        return (
            React.createElement('img', {src: movie.poster})
        )
    }
});

var MovieList = React.createClass ({
    propTypes: {
        list: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('li', {key: movie.id})
        )
    }
})



  ReactDOM.render(element, document.getElementById('app'));