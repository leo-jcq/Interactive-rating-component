let selectedButton;

function choice(button) {
    selectedButton = button;

    let buttons = document.getElementsByClassName('ratingButton')
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color = 'var(--medium-grey)';
        buttons[i].style.background = 'var(--medium-blue)';
    }

    let modifButton = document.getElementById(button);
    modifButton.style.color = 'var(--white)';
    modifButton.style.background = 'var(--light-grey)';
}

function submitChoice() {
    if (selectedButton != null) {
        let state = document.getElementsByClassName('state');
        state[0].style.display = 'none';
        state[1].style.display = 'flex';

        document.getElementById('feedBackText').innerHTML = 'You selected ' + selectedButton + ' out of 5';
    } else {
        alert('Please select a grade');
    }
}