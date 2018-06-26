class under{
  constructor(city){
this.city = city;


console.log(city)
  }
  
async getdata(){
const response = await fetch(`http://api.apixu.com/v1/forecast.json?key=f758c8a38d2e4b98935103730182506&q=${this.city}`)

const getdata = await response.json()

return getdata

}
changecity(city){
this.city = city;

}


}