const launchRow = document.querySelector('#launchRow');
const apiUrl = 'https://api.spacexdata.com/v3';

// Event listener
document.addEventListener('DOMContentLoaded', () => {
  mainFetch();
  nextLaunch();
});

// Main content
function mainFetch() {
  fetch(apiUrl + '/launches')
    .then(res => res.json())
    .then(res => displayMainContent(res))
    .catch(err => console.log(err))
}

function displayMainContent(res) {
  launchRow.innerHTML = '';
  if(res.length > 0) {
    /* 
    Using a defined range in for-loop becuase API lacks images and certain details that is required to display everything.

    I was also going to be displaying images straight from the API, and these are sometimes very large sizes. 
    I tried to resize them using HTML but this does not help load times at all, and only serves scaled down images. 

    Therefore I am using a service called filestack.com which will re-size images super easy using their API.
    
    I am also displaying a spinner/loading symbol which is hidden once the fetch has everything required to display the details.
    */
    for(var i = 12; i < 33; i++) {
      launchRow.innerHTML += 
        '<div class="col-lg-4 col-md-6 col-xs-12 launch-main"><div class="launch">' + 
        '<img class="launch-image img-fluid" src="https://cdn.filestackcontent.com/AXnEUKHYSo2FvV8zpGziAz/resize=width:350,height:400/compress/' + res[i].links.flickr_images[0] + '" width="350" height="400" alt="Picture of the SpaceX ' + res[i].mission_name + ' mission just after launch. The image is in black and white."/>' + 
        '<div class="launch-info"><p class="launch-country">' + res[i].rocket.second_stage.payloads[0].nationality + '</p><h1 class="launch-text">' + res[i].mission_name + '</h1></div>' +
        '<div class="launch-overlay"><a href="launch-specific.html?id=' + res[i].flight_number + '" class="btn launch-button">READ MORE <i class="fas fa-chevron-right"></i></a></div></div></div>'
    }
  } else {
    rocketRow.innerHTML = '<h1>Could not fetch API</h1>';
  }
}

// Next launch countdown
function nextLaunch() {
  fetch(apiUrl + '/launches/next')
    .then(res => res.json())
    .then(res => displayCountdown(res))
    .catch(err => console.log(err))
}

function displayCountdown(res) {
  const count = new Date(res.launch_date_local).getTime();
  const x = setInterval(function() {
    const now = new Date().getTime();
    const d = count - now;

    const days = Math.floor(d/(1000*60*60*24));
    const hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((d%(1000*60*60))/(1000*60));
    const seconds = Math.floor(d%(1000*60)/1000);

    document.querySelector('#countdown-days').innerHTML = days;
    document.querySelector('#countdown-hours').innerHTML = hours;
    document.querySelector('#countdown-minutes').innerHTML = minutes;
    document.querySelector('#countdown-seconds').innerHTML = seconds;

    if(d <= 0) {
      clearInterval(x);
    }
  }, 1000);
}


/*
- Add/remove background to navbar on scroll.
- Add/remove 'nav-active' css class on scroll.
- Add/remove 'nav-animation' css class on scroll. 
  - This gets rid of the hover animation on top nav unless the page is scrolled down >= 200.
*/
const navbar = document.querySelector('.navbar');
const activeNav = document.querySelector('#activeNav');
const navAnim = document.querySelectorAll('.nav-link');

function stickyNavigation() {
  if (window.scrollY >= 200) {
    navbar.classList.add('navbarScrolled');
    navbar.classList.remove('navbarNotScrolled');
    activeNav.classList.add('nav-active');
    for(var i = 0; i < navAnim.length; i++) {
      navAnim[i].classList.add('nav-animation')
    }
  } else {
    navbar.classList.add('navbarNotScrolled');
    navbar.classList.remove('navbarScrolled');
    activeNav.classList.remove('nav-active');
    for(var i = 0; i < navAnim.length; i++) {
      navAnim[i].classList.remove('nav-animation')
    }
  }
}

window.addEventListener('scroll', stickyNavigation);