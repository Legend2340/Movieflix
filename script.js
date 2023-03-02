// Initialize the TMDB API URL and API key
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '10601fbbddbf8e0aa2d81753fbd4cc30';

// Wait for the DOM to load
$(document).ready(function() {
  // Get the trending movies from the TMDB API
  $.ajax({
    url: `${apiUrl}/trending/movie/week?api_key=${apiKey}`,
    method: 'GET',
    success: function(data) {
      // Create an HTML string for each trending movie
      let moviesHtml = '';
      data.results.forEach(function(movie) {
        moviesHtml += `
          <div class="movie">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} poster">
            <h3>${movie.title}</h3>
            <p>${movie.release_date}</p>
            <p>${movie.overview}</p>
          </div>
        `;
      });

      // Insert the trending movies HTML into the DOM
      $('.movies-grid').html(moviesHtml);
    },
    error: function(error) {
      console.log(error);
    }
  });

  // Toggle the navbar dropdown on click
  $('nav ul li').click(function() {
    $(this).find('ul').toggle();
  });

  // Add a "active" class to the current nav item
  const currentPageUrl = window.location.href;
  $('nav ul li a').each(function() {
    if ($(this).attr('href') === currentPageUrl) {
      $(this).addClass('active');
    }
  });
});
