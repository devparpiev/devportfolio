// Typed animation

var typed = new Typed('.typing', {
	strings: [ '','Software Engineer', 'Web Developer', 'Graphic Designer' ],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
});

// Aside

const nav = document.querySelector('.nav'),
	navList = nav.querySelectorAll('li'),
	totalNavList = navList.length,
	allSection = document.querySelectorAll('.section'),
	totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
	const a = navList[i].querySelector('a');
	a.addEventListener('click', function() {
		// for (let i = 0; i < totalSection; i++) {
		// 	allSection[i].classList.remove('back-section');
		// }
		for (let j = 0; j < totalNavList; j++) {
			if (navList[j].querySelector('a').classList.contains('active')) {
				allSection[j].classList.add('back-section');
			}
			navList[j].querySelector('a').classList.remove('active');
		}
		this.classList.add('active');
		showSection(this);
		if (window.innerWidth < 1200) {
			asideSectionTogglerBtn();
		}
	});
}
// function showSection(element) {
// 	for (let i = 0; i < totalSection; i++) {
// 		allSection[i].classList.remove('active');
// 	}
// 	const target = element.getAttribute('href').split('#')[1];
// 	document.querySelector('#' + target).classList.add('active');
// }

// function updateNav(element){
//     for(let i=0; i<totalNavList; i++){
//         navList[i].querySelector('a').classList.remove('active');
//         const target = element.getAttribute('href').split('#')[1];
//         if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
//             navList[i].querySelector('a').classList.add('active');
//         }
//     }
// }
// document.querySelector('.hire-me').addEventListener('click', function() {
//     showSection(this);
//     updateNav(this);
// })

const navTogglerBtn = document.querySelector('.nav-toggler'),
	aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
	asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
	aside.classList.toggle('open');
	navTogglerBtn.classList.toggle('open');
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.toggle('open');
	}
}

//Scroll Btn


const scrollBtn = document.querySelector('.scroll-to-top');

const refreshBtnVisibility = () => {
	if (document.documentElement.scrollTop < 50) {
		scrollBtn.style.display = 'none';
	} else {
        
		scrollBtn.style.display = 'block';
	}
};

refreshBtnVisibility();

scrollBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	
});

document.addEventListener('scroll', (e) => {
	refreshBtnVisibility();
});
