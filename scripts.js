// First, we have to import the data from the data.js file
import { authors, genres,  books, BOOKS_PER_PAGE } from './data.js';


/*
 *
 * Retrieve HTML elements from the DOM and store them in
 * @type QuerySelector
 * Fix the variables that have been provided so the names are correct
 */
    


   // Dom elements for the list 
const dataListItems = document.querySelector('[data-list-items]');
const dataListMessage = document.querySelector('[data-list-message]');
const dataListButton = document.querySelector('[data-list-button]');
const dataListActive = document.querySelector('[data-list-active]');
const dataListBlur = document.querySelector('[data-list-blur]');
const dataListImage = document.querySelector('[data-list-image]');
const dataListTitle = document.querySelector('[data-list-title]');
const dataListSubtitle = document.querySelector('[data-list-subtitle]');
const dataListDescription = document.querySelector('[data-list-description]');
const dataListClose = document.querySelector('[data-list-close]');

//  Dom elements for the search 
const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const datasearchButton = document.querySelector("button.overlay__button.overlay__button_primary[form='search']");
const dataSearchForm = document.querySelector('[data-search-form]');
const dataSearchTitle = document.querySelector('[data-search-title]');
const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');
const dataSearchCancel = document.querySelector('[data-search-cancel]');
const dataHeaderSearch = document.querySelector('[data-header-search]');

// DOM Elements for the theme /settings
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]');
const dataSettingsForm = document.querySelector('[data-settings-form]');
const dataHeaderSettings = document.querySelector('[data-header-settings]');
const dataSettingsCancel = document.querySelector('[data-settings-cancel]');
const saveElement = document.querySelector('[data-settings-save]');
const root = window;

const matches = books; 

// Create Global constants where @PAGE sets current page to 1 and @RANGE array that set the range of books to be extracted to the first 36 books
const PAGE = 0;
const RANGE = [0, 36]; 

if (!matches || !Array.isArray(matches)) {
    throw new Error('Source required')};

if (!RANGE || RANGE.length < 2) {
    throw new Error('Range must be an array with two numbers')};


/************************************** BookList Preview **********************************/

// Create a function that takes a book object and returns a preview button element
const createPreviewElement = (book) => {
    const { author: authorId, id, image, title } = book;
  
    // create a new button element
    const preview = document.createElement("button");
    preview.classList = "preview";
    preview.setAttribute("data-preview", id);
    preview.innerHTML = `
          <img
              class="preview__image"
              src="${image}"
          />
          
          <div class="preview__info">
              <h3 class="preview__title">${title}</h3>
              <div class="preview__author">${authors[authorId]}</div>
          </div>
      `;
  
    return preview;
  };
  
  // Create a function that takes an array of books and a range of indices and returns a document fragment
  const createPreviewsFragment = (books, start, end) => {
    const fragment = document.createDocumentFragment();
     // Loop over the specified range of books
    for (let i = start; i < end; i++) {
        // Get the current book object
      const book = books[i];
      // If the book object exists, create a preview button element and add it to the document fragment
      if (book) {
        const preview = createPreviewElement(book);
        fragment.appendChild(preview);
      }
    }
    return fragment;
  };

  // function that renders a range of book previews based on the current page
  const renderPreviews = (page, increment) => {
    const start = RANGE[0] + page * BOOKS_PER_PAGE;
    const end = start + BOOKS_PER_PAGE + increment; 
    const fragment = createPreviewsFragment(matches, start, end);
    dataListItems.innerHTML = "";
    dataListItems.appendChild(fragment);
    dataListButton.innerHTML = /* html */
           `<span>Show more</span>`
  };

const showMore = () => {
    renderPreviews(PAGE, 36);
};

dataListButton.addEventListener('click', showMore);

renderPreviews(PAGE, 0); 


/*
 * Need to add click eventlistener for when a user clicks a book and would allow for a preview pop-up.
 * A preview on a book once it is clicked and provide descriptive info, title, subtitle and Image.
 * Need to target the close button so that a user is able to close the pop-up. 
 * 
 */


dataListItems.addEventListener("click", (event) => {
  // Creates an array of nodes that the event iterated through in the DOM (datalistItems). sets the condition for when to loop through
  const pathArray = Array.from(event.path || event.composedPath())
  let active = '';

  // Loops through each node
  for (let node of pathArray) {
      if (active){
          break;
      }
      // extract preview value from datalistItem attribute of the current node element. 
      const previewId = node?.dataset?.preview
      // Loop through the books array 
      for (const singleBook of books) {
          if (singleBook.id === previewId){
              active = singleBook
              break
          }
      } 
  }
  
  if (!active){
      return
  } 

  dataListActive.open = true
  dataListBlur.src, dataListImage.src = active.image 
  dataListTitle.textContent = active.title

  dataListSubtitle.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
  dataListDescription.textContent = active.description
}); 

// Need to make the close button on the preview pop up close by using an eventlisener
dataListClose.addEventListener("click",  () =>  { 
  dataListActive.close() 
})



/* ******************************************** SEARCH BUTTON FUNCTIONALITY *************************************************/

dataHeaderSearch.addEventListener('click',() => {
    dataSearchOverlay.showModal();
}); 


dataSearchCancel.addEventListener('click', () => {
    dataSearchOverlay.close();
    dataSearchForm.reset();
}); 

/*
 * Need to ensure that the input put into the datasearchtitle is saved into the localstorage
 * Ensure that it is included in the searchbutton logic so that it is functional when a user inputs a title
 * 
 * 
 */




/*
 * Need to make the genre dropdown  that will allow users to choose a genre they want
 * Ensure it displays the Genres from the imported Genre Object from the data.js file.
 * Need to save it in storage so that it is called 
 * Ensure that it is included in the searchbutton logic for when a user selects a book by genre
 * 
 * 
 */


const genreDropdown = document.createDocumentFragment();
const GenresOption = new Option('All Genres', 'any');
genreDropdown.appendChild(GenresOption);

Object.entries(genres).forEach(([id, name]) => {
  const option = new Option(name, id);
  genreDropdown.appendChild(option);
});

dataSearchGenres.appendChild(genreDropdown);

const updateLocalStorage = () => {
    const selectedGenre = genreDropdown.value;
    localStorage.setItem('Genre', selectedGenre)
}; 

dataSearchGenres.addEventListener('change', updateLocalStorage); 



/*
 * Need to make a author dropdown that will allow users to choose books by author name
 * Ensure it displays the Authors from the imported Authors Object from the data.js file.
 * Need to save it in storage so that it is called by the datasearchbutton event listener.
 * Ensure that it is included in the searchbutton logic for when a user selects a book by author
 * 
 * 
 */


const authorsDropdown = document.createDocumentFragment();
const AuthorOption = new Option('All Authors', 'any');
authorsDropdown.appendChild(AuthorOption);

Object.entries(authors).forEach(([id, name]) => {
  const option = new Option(name, id);
  authorsDropdown.appendChild(option);
});

dataSearchAuthors.appendChild(authorsDropdown);

const anotherLocalStorage = () => {
    const selectedAuthor = authorsDropdown.value;
    localStorage.setItem('Authors', selectedAuthor)
}; 

dataSearchAuthors.addEventListener('change', anotherLocalStorage); 



// Need to create an event listener for the when the search button is clicked
// Should be able to iterate through when the title, genre and author parameters have been chosen
// Possible create multiple if else conditions? 

datasearchButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const authorChoice = anotherLocalStorage.getItem('Authors');
    const genreChoice = updateLocalStorage.getItem('Genre'); 
    const formData = new FormData(authorChoice, genreChoice);
    const filters = Object.fromEntries(formData);
  
    const result = booksList.filter((book) => {
      const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
      const authorMatch = filters.author === 'any' || book.author === filters.author;
      const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);
  
      return titleMatch && authorMatch && genreMatch;
    });
  
    const display = document.querySelector('#search-result');
    display.innerHTML = '';
  
    if (result.length < 1) {
      const message = document.createElement('p');
      message.innerText = 'No results found.';
      display.appendChild(message);
    } else {
      result.forEach((book) => {
        const item = document.createElement('li');
        item.innerText = `${book.title}${book.author}`;
        display.appendChild(item);
      });
    }
  });






/*************************************************THEME AND SETTIINGS DISPLAY *********************************************************/



/* DISPLAY SETTINGS - FULLY FUNCTIONAL.
 * Theme Dark and Mode Themes of the code.
 * @type {onjects}, {event listeners}
 *
 */


// Set the default setting to day (initializes an object), if user's has a perference for dark color and device supports it, theme is set to night.
const dataSettingsTheme = { value: 'day' };
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dataSettingsTheme.value = 'night';
}

// When clicked, setting overlay is closed and form reset
dataSettingsCancel.addEventListener('click', () => {             
    dataSettingsOverlay.close();
    dataSettingsForm.reset();
}); 


// When clicked shows setting overlay with a form
dataHeaderSettings.addEventListener('click', () => {
     dataSettingsOverlay.showModal();
 })

// Crreated a css object for values day and night. 
const css = {
day : {
    dark: '10, 10, 20',
    light: '255, 255, 255',
},

night : {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}
}; 

// event listener to set the theme to day or night.
dataSettingsForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const storeForm = Object.fromEntries(formData); 

    if (storeForm.theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', css[storeForm.theme].dark);
        document.documentElement.style.setProperty('--color-light', css[storeForm.theme].light);
    } else if (storeForm.theme === 'day') {
        document.documentElement.style.setProperty('--color-dark', css[storeForm.theme].dark);
        document.documentElement.style.setProperty('--color-light', css[storeForm.theme].light);
    };
    
    // Need to save the choice by the client to local storage so it can be called when the saveElement is clicked.
    sessionStorage.setItem('theme', storeForm.theme);

    dataSettingsOverlay.close();
}); 

// Event listener for when the save button is clicked
saveElement.addEventListener('click', () => {
    const theme = sessionStorage.getItem('theme');
    if (theme === 'night') {
      root.document.documentElement.setAttribute('data-theme', 'night');
    } else if (theme === 'day') {
      root.document.documentElement.setAttribute('data-theme', 'day');
    }
  });

