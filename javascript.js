function openNav() {
  document.getElementById("nawigacja").classList.add('opened');
}

function closeNav() {
  document.getElementById("nawigacja").classList.remove('opened');
}

var timesClicked = 0;

function openmusic() {
    
    if (timesClicked==0) {
document.getElementById("music").classList.add('openedmusic');
        document.getElementById("musicbutton").classList.add('openedbutton');
        timesClicked++;
} else {
    document.getElementById("music").classList.remove('openedmusic');
    document.getElementById("musicbutton").classList.remove('openedbutton');
    timesClicked--;
}
}