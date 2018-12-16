// get URL query string
function getQueryStringValue (key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

// variable for the id
const id = getQueryStringValue("id");
const url = 'https://api.spacexdata.com/v3';

// Using self-executing function.
(function() {
  const specificRow = document.querySelector('#launch-specific-row');
  // Check to see if 'id' url query is empty.
  if (id) {
  fetch(url + '/launches/' + id)
      .then(res => res.json())
      .then(res => {
        specificRow.innerHTML += '<div class="col-lg-4 col-md-12 col-xs-12"><img src="https://cdn.filestackcontent.com/AXnEUKHYSo2FvV8zpGziAz/resize=width:350,height:400/compress/' + res.links.flickr_images[0] + '" class="specific-image img-fluid" alt="Picture of the SpaceX ' + res.mission_name + ' mission just after launch. The image is in black and white."></img></div>' + 
                              '<div class="col-lg-8 col-md-12 col-xs-12 details"><h1><strong>' + res.mission_name + 
                              '</strong></h1><p style="font-size:14px;color:#ccc;" id="mission-desc">' + res.details + '</p>'
                              + '<p><strong>Launched in:</strong> ' + res.launch_year + '</p><p><strong>Launched from:</strong> ' + res.launch_site.site_name + '</p></div>';

        // remove 'null' string if api lacks details for this launch
        const missionDesc = document.querySelector('#mission-desc');
        if (missionDesc.innerHTML === 'null') {
          missionDesc.innerHTML = '';
        }

        // add mission name to breadcrumb
        const breadcrumbCurrent = document.querySelector('#breadcrumb-current');
        breadcrumbCurrent.innerHTML = res.mission_name;
      })
      .catch(err => console.log(err))
  } else {
    specificRow.innerHTML = '<h1>No query string.</h1>';
  }
})()


/*
- Add/remove background to navbar on scroll.
- Add/remove 'nav-active' css class on scroll.
*/
const navbar = document.querySelector('.navbar');
const activeNav = document.querySelector('#activeNav');

function stickyNavigation() {
  if (window.scrollY >= 200) {
    navbar.classList.add('navbarScrolled');
    navbar.classList.remove('navbarNotScrolled');
    activeNav.classList.add('nav-active');
  } else {
    navbar.classList.add('navbarNotScrolled');
    navbar.classList.remove('navbarScrolled');
    activeNav.classList.remove('nav-active');
  }
}

window.addEventListener('scroll', stickyNavigation);