console.log('Linear Search');
var findingAudio = new Audio('Finding.mp3');
var findedAudio = new Audio('Finded.mp3');
var mouseclick = new Audio('Mouseclick.mp3');
var count = 0;

async function linearSearch(array, n, val) {
    for (let i = 0; i < n; i++) {
        await waitcount(delay); // Ensure 'waitcount' and 'delay' are defined
        if (array[i].innerHTML == val) {
            count++;
            console.log(count);
            findingAudio.pause();
            findedAudio.play();
            array[i].style.background = 'green';
            array[i].style.color = '#fcfcfc';
            const step = document.querySelector('.step');
            step.innerHTML = `${count}`; // Use backticks for string interpolation
            return i;
        }
        findingAudio.play();
        array[i].style.background = 'red';
        array[i].style.color = 'white';
        count++;
    }
    return -1;
}

const linear = document.querySelector('#linear_Search');
linear.addEventListener('click', async () => {
    console.log('Linear');
    mouseclick.play();
    const array1 = document.querySelectorAll('.bars');
    
    let barArray = []; // Renamed for clarity
    array1.forEach((element) => {
        barArray.push(element);
    });
    console.log(barArray);

    const val = document.querySelector('#searchingVal').value;
    if (val != '') {
        searchText.innerHTML = `Linear Searching..`; // Use backticks for string interpolation
        console.log(parseInt(val));
        
        const description = document.querySelector('#description');
        description.style.display = 'flex';
        const section = document.querySelector('#fullbody');
        section.style.height = '184vh';
        
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();

        var ind = await linearSearch(barArray, barArray.length, parseInt(val));
        
        const index = document.querySelector('.index');
        if (ind != -1) {
            searchText.innerHTML = `Searching Complete`; // Use backticks for string interpolation
            index.innerHTML = `${val} is present at index no. ${ind}`; // Use backticks for string interpolation
        } else {
            searchText.innerHTML = `Not Found!!`; // Use backticks for string interpolation
            index.innerHTML = `${val} is not present in the Array!!`; // Use backticks for string interpolation
            findingAudio.pause();
        }

        enableNewArrayBtn();
    } else {
        alert('Please put Searching Value first!!😕😕'); // Fixed typo in "Please"
    }
});
