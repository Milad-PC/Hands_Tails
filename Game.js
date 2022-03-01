var butt = document.getElementsByTagName('button');
var statusLbl = document.getElementsByClassName('Status')[0].getElementsByTagName('label')[0];
var CoinArray = ['Heads', 'Tails']
var WinCounter = 0;
var LoseCounter = 0;

butt[0].addEventListener('click', tossCoin);
butt[1].addEventListener('click', tossCoin);

function tossCoin(e) {
    let toss = Math.floor(Math.random() * 2);
    console.log('Player : ' + e.target.innerText + '\nComputer : ' + butt[toss].innerText);
    if (CoinArray[toss] == e.target.innerText) {
        WinCounter += 1;
        console.log('%c WIN!! ', 'color: green');
        ShowStatus(true);
    } else {
        LoseCounter += 1;
        console.log('%c Lose!! ', 'color: red');
        ShowStatus(false);
    }
    ShowResult();
}

function ShowResult() {
    document.getElementById('ComputerWin').innerHTML = LoseCounter;
    document.getElementById('UserWin').innerHTML = WinCounter;
}

function ShowStatus(val) {
    if(val === true){
        statusLbl.className='alert-success';
        statusLbl.innerHTML="WIN"
    }
    if(val === false){
        statusLbl.className='alert-danger';
        statusLbl.innerHTML="LOSE"
    }
}