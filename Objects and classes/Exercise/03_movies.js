function manageMovies(arr) {
    let movies = [];

    for(let command of arr) {
        if(command.includes('addMovie')) {
            let tokens = command.split('addMovie ');
            let movieName = tokens[1];
            let movieObj = { name: movieName};
            movies.push(movieObj)

        } else if (command.includes('directedBy')) {
            let tokens = command.split(' directedBy '); //or let [movieName, director] = ..
            let movieName = tokens[0];
            let directorName = tokens[1];
            
            let movie = movies.find(movie => movie.name == movieName); 

            if(movie) {
                movie.director = directorName;
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName); 

            if(movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies) {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
manageMovies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])
