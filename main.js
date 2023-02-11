let btn = document.querySelector('.btn');
let container = document.querySelector('.container');
let root = document.querySelector('.root')
let closeWindow = document.querySelector('.close')
let back = document.querySelector('.back')
root.style.cssText = `
    height: 250px;
    width: 500px;
    padding: 40px 20px;
    line-height: 20px;
    position: absolute;
    left: 35%;
    top: 35%;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 2px  4px 4px 5px #00000070;
    border-radius: 5%;
    background-color:white;
`;
let toggle = false
container.append(root)
root.style.display = 'none'
btn.addEventListener('click', () => {
    toggle = !toggle
    if(toggle === true){
        root.style.display = 'block'
        container.style.backgroundColor = '#00000070'
    }else{
        root.style.display = 'none'
        container.style.backgroundColor = '#fff'
    }
});

closeWindow.addEventListener('click',() => { 
    container.style.backgroundColor = '#0000000'
})
let theme = document.createElement('button')
theme.style.cssText= `
width: 200px;
height: 50px;
border-color: black;
border-radius: 15px;
text-align: center;
font-size: 15px;
font-style: italic;
font-weight: 500;
position: absolute;
left: 300px;
top: 100px;`

closeWindow.addEventListener('click', () => {
    root.style.display = 'none'
    container.style.backgroundColor = '#fff'
})
back.addEventListener('click', ()=>{
    root.style.display = 'none'
    container.style.backgroundColor = '#fff'
})

const btn1 = document.querySelector('.button1')


btn1.addEventListener('click', () => {
    toggle = !toggle
    if(toggle === true){
        container.style.backgroundColor = 'black';
        btn1.innerHTML = `
        <img class="img1" src="/images/images.png" alt="">
        `
        btn.style.color = 'black'
    
    }else{
        container.style.backgroundColor = 'white'
        btn1.innerHTML = '<svg  class="img2"xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"/></svg>'
     
    }

});


