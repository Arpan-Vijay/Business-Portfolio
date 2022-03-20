const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const scrollButton = document.querySelector('#scroll-top');

// to show and hide the items in the hamburger 
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// to change the background-color of the navigation bar
document.addEventListener('scroll',() => {
	let scroll_position = window.scrollY;
	if(scroll_position > 250) {
		header.style.backgroundColor = "#29323c";
	} else{
		header.style.backgroundColor = "transparent";
	} 
});

// to automaticallyclose the hamburger the moment you click on any list items

menu_item.forEach(item=>{
	item.addEventListener('click',()=>{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');	
	})
})

// Scroll Button
if(scrollButton){
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollButton.style.display = 'flex'
        }
        else{
            scrollButton.style.display = 'none'
        }
    })
    scrollButton.addEventListener('click', ()=> {
        window.scroll(0, 0)
    })
}