document.getElementById('completed-1').addEventListener('click', function () {
    const completed1 = document.getElementById('completed-1')
    completed1.disabled = true;
    completed1.style.backgroundColor = 'grey';
    const history = document.getElementById('history')
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');  // Get hours (00-23)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes (00-59)
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds (00-59)

    const time = `${hours}:${minutes}:${seconds}`;
    const title1 = document.getElementById('title-1').innerText

    history.innerHTML = `You have Completed The Task ${title1} at ${time}`

})
document.getElementById('history-btn').addEventListener('click',function() {
document.getElementById('history').innerText=''
})
document.getElementById('completed-2').addEventListener('click', function () {
    const completed2 = document.getElementById('completed-2')
    completed2.disabled = true;
    completed2.style.backgroundColor = 'grey';
    const history = document.getElementById('history')
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');  // Get hours (00-23)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes (00-59)
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds (00-59)

    const time = `${hours}:${minutes}:${seconds}`;
    const title2 = document.getElementById('title-2').innerText

    history.innerHTML = `You have Completed The Task ${title2} at ${time}`

})
document.getElementById('history-btn').addEventListener('click',function() {
document.getElementById('history').innerText=''
})
document.getElementById('completed-3').addEventListener('click', function () {
    const completed3 = document.getElementById('completed-3')
    completed3.disabled = true;
    completed3.style.backgroundColor = 'grey';
    const history = document.getElementById('history')
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');  // Get hours (00-23)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes (00-59)
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds (00-59)

    const time = `${hours}:${minutes}:${seconds}`;
    const title3 = document.getElementById('title-3').innerText

    history.innerHTML = `You have Completed The Task ${title3} at ${time}`

})
document.getElementById('history-btn').addEventListener('click',function() {
document.getElementById('history').innerText=''
})
document.getElementById('completed-4').addEventListener('click', function () {
    const completed4 = document.getElementById('completed-4')
    completed4.disabled = true;
    completed4.style.backgroundColor = 'grey';
    const history = document.getElementById('history')
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');  // Get hours (00-23)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes (00-59)
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds (00-59)

    const time = `${hours}:${minutes}:${seconds}`;
    const title4 = document.getElementById('title-4').innerText

    history.innerHTML = `You have Completed The Task ${title4} at ${time}`

})
document.getElementById('history-btn').addEventListener('click',function() {
document.getElementById('history').innerText=''
})
document.getElementById('completed-5').addEventListener('click', function () {
    const completed5 = document.getElementById('completed-5')
    completed5.disabled = true;
    completed5.style.backgroundColor = 'grey';
    const history = document.getElementById('history')
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');  // Get hours (00-23)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes (00-59)
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds (00-59)

    const time = `${hours}:${minutes}:${seconds}`;
    const title5 = document.getElementById('title-5').innerText

    history.innerHTML = `You have Completed The Task ${title5} at ${time}`

})
document.getElementById('history-btn').addEventListener('click',function() {
document.getElementById('history').innerText=''
})