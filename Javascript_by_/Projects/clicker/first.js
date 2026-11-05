const body=document.querySelector('body');

body.addEventListener('click',(e)=>{
    // iss event object ke pass sab kuch rehta hai har coordinate khaa kya hua hai 
    const circleElement=document.createElement('div');
    circleElement.classList.add('circle');
    const color=[
        '#E6B8A2','#D9A5B3','#C9A0DC','#A7C7E7','#A8D5BA',
        '#F4C2C2','#F6D6AD','#B8C0FF','#BDE0FE','#CDEAC0',
        '#FFC8DD','#D8B4E2','#A0C4FF','#CAFFBF','#FDFFB6',
        '#FFD6A5','#FFADAD','#9BF6FF','#BDB2FF','#FFC6FF',
        '#B7E4C7','#95D5B2','#F1C0E8','#E2C2FF','#F9C6C9'
    ];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
    circleElement.style.top=`${e.clientY}px`;
    circleElement.style.left=`${e.clientX}px`;
    circleElement.textContent='HI'

    body.append(circleElement);
})