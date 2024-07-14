var addNewGame = document.getElementById('add-new-game');
console.log(addNewGame);

var newgameContainer = document.querySelector('.new-game');
console.log(newgameContainer);

var closeButton = document.querySelector('.new-game i');
console.log(closeButton);

var add = document.getElementById('add');
console.log(add);

var input = document.querySelector('input');
console.log(input);

var allGamesContainer = document.querySelector('.games');
console.log(allGamesContainer);



function createDivisions(newGameName) {
    if (allGamesContainer.style.display === 'none') {
        allGamesContainer.style.display = 'block';

        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'game');

        var newheading = document.createElement('h1');
        newheading.textContent = newGameName;


        var removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'remove');

        removeButton.textContent = 'Remove';

        newDiv.appendChild(newheading);
        newDiv.appendChild(removeButton);

        allGamesContainer.appendChild(newDiv);
    }

    else {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'game');

        var newheading = document.createElement('h1');
        newheading.textContent = newGameName;


        var removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'remove');

        removeButton.textContent = 'Remove';

        newDiv.appendChild(newheading);
        newDiv.appendChild(removeButton);

        allGamesContainer.appendChild(newDiv);
    }
}




addNewGame.addEventListener('click', function () {
    newgameContainer.style.display = 'flex';
});


closeButton.addEventListener('click', function () {
    newgameContainer.style.display = 'none';
});


add.addEventListener('click', function () {
    if (input.value.trim() === '') {
        newgameContainer.style.display = 'none';
    }
    else {
        var inputvalue = input.value;
        console.log(inputvalue);
        createDivisions(inputvalue);
        input.value = '';
        newgameContainer.style.display = 'none';
    }
});



allGamesContainer.addEventListener('click', function (event) {
    var targettedElement = event.target;

    console.log(targettedElement);

    if (targettedElement.classList.contains('remove')) {
        targettedElement.parentNode.style.display = 'none';
    }

    var allChilds = allGamesContainer.children;
    console.log(allChilds);

    var allHidden = true;
    Array.prototype.forEach.call(allChilds, (child) => {
        if (child.style.display !== 'none') {
            allHidden = false;
        }
    })

    if (allHidden) {
        allGamesContainer.style.display = 'none';
    }
})