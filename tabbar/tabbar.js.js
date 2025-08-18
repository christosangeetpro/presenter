
function loadSongs() {
    const songList = document.getElementById('songs');
    songList.innerHTML = "";
    songs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.onclick = () => presentSong(song.lyrics);
        songList.appendChild(li);
    });
}


function convertToBengaliNumber(num) {
    const englishNumbers = ["0","1","2","3","4","5","6","7","8","9"];
    const bengaliNumbers = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
    return num.toString().split('').map(d => bengaliNumbers[englishNumbers.indexOf(d)]).join('');
}

function sortByTitle() {
    songs.sort((a, b) => a.title.localeCompare(b.title, 'bn'));
    loadSongs();
}

function sortByNumber() {
    songs.sort((a, b) => {
        let numA = parseInt(convertToEnglishNumbers(a.title.split('.')[0].trim())) || 0;
        let numB = parseInt(convertToEnglishNumbers(b.title.split('.')[0].trim())) || 0;
        return numA - numB;
    });
    loadSongs();
}