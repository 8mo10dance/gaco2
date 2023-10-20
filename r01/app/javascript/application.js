// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
// import "controllers"

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
});
