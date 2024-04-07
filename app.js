const enterbutton = document.querySelector('.enter-button');
const loadercontainer = document.getElementById('loaderContainer');
const loadergif = document.querySelector('.loader-gif');

enterbutton.addEventListener('click', (event)=>{
event.preventDefault();

loadercontainer.style.display = 'flex';
setTimeout(() =>{
	loadercontainer.style.display = 'none';
	window.location.href = 'components/home.html'
},3000)

});

enterbutton.addEventListener('mouseover', ()=>{
	enterbutton.style.transform = 'scale(1.6)';
});
enterbutton.addEventListener('mouseout', ()=>{
	enterbutton.style.transform = 'scale(1)';
})