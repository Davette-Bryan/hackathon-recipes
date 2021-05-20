const foundID = false; //boolean flag to determine if recipe ID found, if so, reload page

// can also navigate for the jump to recipe button
// they used 'a' tags with an href link that goes straight to the receipe
// can potentially use querySelectorAll to isolate all 'a' tags
const body = document.querySelector('body');

// let currentURL = location.href;
let printURL = window.location.href; // or make print url same as current url


const aTags = body.querySelectorAll('a');     // returns node list

console.log(aTags);
//else enter forEach loop
aTags.forEach(a => {
  //if(a.getAttribute('href')){
    if(a.getAttribute('href') !== null && a.getAttribute('href').includes('print')){
    printURL = a.getAttribute('href')
    // console.log('im inside if statement');
    }
  })



  // if window's current location !== printUrl =>
  if(window.location.href !== printURL){
    // console.log(printURL);
    location.assign(printURL);
  }
  



  
  // jumpToURL = printURL + <insert id here>

// navigate to class that matches the wprm class
// querySelectorAll for class "wprm-recipe-container"
// Element.classList
const classTags = document.querySelectorAll('wprm-recipe-container');
// another loop

// search for h3 for the ingredients using querySelectorAll
const hThreeTags = document.querySelectorAll('h3');
// OR check for the id name and somehow reload the page with the id name inserted to url

// print page
// a[href*=<...>] an element whos attribute (ie. a) who value contains at least one instance of the substring


// location.href property returns current url
// location.assign('new url') loads a new document











