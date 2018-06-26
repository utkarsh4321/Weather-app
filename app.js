// Modal
const local = new storage()
const localget = local.getlocal()



const btn1 = document.getElementById('btn');
const ui = new UI()
const wheather = new under(localget.city,localget.state);
let head = document.getElementById('header');
head.innerHTML = `${localget.city} ${localget.state}`
wheather.getdata().then((data)=>{
  ui.showdata(data)
  // setInterval(lol,1000)
  



  
})


btn1.addEventListener('click',(e)=>{
  
const mod = document.getElementById('made');
const mod2 = document.querySelector('.btn2');
const form = document.querySelector('.my-form')
mod.style.display = 'block';

mod2.addEventListener('click',(e)=>{
mod.style.display = 'none';

})
document.querySelector('.col').addEventListener('click',(e)=>{
mod.style.display = 'none';

})
form.addEventListener('submit',add)
function add(e){
  let city = document.getElementById('city').value,
  state = document.getElementById('state').value,
  header = document.getElementById('header');
if(city === '' || state === ''){

  header.innerHTML = `${localget.city} ${localget.state}`
console.log('ram')

}else{
 
  header.innerHTML = `${city} ${state}`;
  
  wheather.changecity(city,state)

  //set location on to the local storage
  local.setlocal(city,state)
// API Work started
wheather.getdata(city).then((data)=>{

ui.showdata(data);

})

  e.target.city.value = '';
  e.target.state.value = '';
 
mod.style.display = 'none';
e.preventDefault()
}
}
})
// modal over




//API WORK STARTED














