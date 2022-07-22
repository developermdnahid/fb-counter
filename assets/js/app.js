// get element
const fiverr_form = document.getElementById('fiverr');
const alerm = document.getElementById('alerm');
const stop_alerm = document.getElementById('stop_alerm');
const per = document.getElementById('per');
const perVal = document.getElementById('perVal');
const counter = document.querySelector('.counter');
const bar = document.querySelector('.bar');

let count ;





// submit fiverr form
fiverr_form.onsubmit = (e) =>{
  e.preventDefault();

  clearInterval(count)

  // get form val
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());
  const {date,time} = Object.fromEntries(form_data.entries());

  // time val
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);

  count = setInterval( () => {
  
    futureTimeCountDown(date,time,counter,count,alerm);
    let per = counterPer(start_time , end_time);

    if( per > 0 && per < 30 ){
      bar.style.backgroundColor = `red`;
    }else if( per > 30 && per < 70 ){
      bar.style.backgroundColor = `blue`;
    }else{
      bar.style.backgroundColor = `green`;
    }

    per && (bar.style.display = 'block');
    bar.style.width = `${ 100 - per }%`;

    perVal.innerHTML = `${100 - per}%`;

 } ,1000);

}

// stop alerm

stop_alerm.onclick = (e) => {
  e.preventDefault();
  alerm.pause();
}



