/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const nav_list = document.getElementById('navbar__list');
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
// check if section in viewport or not
//
secInview = (elem) => {
	const window_height = window.innerHeight;
	const section_bound = elem.getBoundingClientRect();
	return (section_bound.top >= 0 && section_bound.bottom <= window.innerHeight);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
buildlist = () => {
	for (let section of sections) {
		let list_item = document.createElement('li');
		let section_id = section.getAttribute('id');
		let section_name = section.getAttribute('data-nav');
		list_item.classList.add('navbar__list__item');
        list_item.classList.add(section_id);
		list_item.innerHTML = `<a href="#${section_id}" class="menu__link">${section_name}</a>`;
		nav_list.appendChild(list_item);
	}
}


// Add class 'active' to section when near top of viewport
//Aslo,
// Add an active state to your navigation items when a section is in the viewport.
activeSec = () => {
const list_link = document.querySelectorAll('li');
	for (let sec of sections) {
		if (secInview(sec)){
            for (let link of list_link){
            if (link.classList.contains(sec.id))
                link.classList.add('active_link');
            }
			sec.classList.add('active');
        }
		else
            {
			sec.classList.remove('active');
                for (let link of list_link){
                    if (link.classList.contains(sec.id))
                     link.classList.remove('active_link');
            }
            }
        
	}
}
// Scroll to anchor ID using scrollTO event

scrollTolink = () => {
	let link_list = 'a[href^="#"]';
	const list_link = document.querySelectorAll(link_list);
	for (let link of list_link) {
		link.addEventListener('click', function () {
			//to prevent the link from following the URL in href
			event.preventDefault();
			//used .hash to get the hash and what follow it i.e #section1
			let link_dest = link.hash;
			document.querySelector(link_dest).scrollIntoView({
				behavior: "smooth"
			});
		});
	}
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
//based on event listner onload
window.onload = buildlist();

// Scroll to section on link click
scrollTolink();

// Set sections as active when scrolling
document.addEventListener('scroll', activeSec);

//bk to top btn // and hide nav bar while not scrolling
//
var mybutton = document.getElementById("myBtn");
const navbar =  document.getElementById('navbar');
let timer;
window.onscroll = () =>{
        navbar.style.top = "0";
        clearTimeout(timer);
        timer = setTimeout( hide , 4000 ); 
        scrollFunction();
}

let hide = () =>{
    navbar.style.top = "-100px";
}
scrollFunction = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
toTop = () =>{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


//toggle
 toggleFunction = () => {
    if (nav_list.classList.contains("active"))
        nav_list.classList.remove("active");
    else
        nav_list.classList.add("active");
}
 const toggle =  document.getElementsByClassName("toggle");
toggle[0].addEventListener('click',toggleFunction, false);