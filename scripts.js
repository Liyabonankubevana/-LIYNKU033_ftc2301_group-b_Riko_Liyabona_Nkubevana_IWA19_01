// First, we have to import the data from the data.js file
import { authors, genres,  books, BOOKS_PER_PAGE } from './data.js';


/*
*
* Retrieve HTML elements from the DOM and store them in
* @type QuerySelector
* Fix the variables that have been provided so the names are correct
*/
    
const dataHeaderSearch = document.querySelector('[data-header-search]');
    
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


const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const datasearchButton = document.querySelector("button.overlay__button.overlay__button_primary[form='search']");
const dataSearchForm = document.querySelector('[data-search-form]');
const dataSearchTitle = document.querySelector('[data-search-title]');
const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');
const dataSearchCancel = document.querySelector('[data-search-cancel]');

const dataSettingsOverlay = document.querySelector('[data-settings-overlay]');
const dataSettingsForm = document.querySelector('[data-settings-form]');
const dataHeaderSettings = document.querySelector('[data-header-settings]');
const dataSettingsTheme = document.querySelector('[data-settings-theme]');
const dataSettingsCancel = document.querySelector('[data-settings-cancel]');
const saveElement = document.querySelector('[data-settings-save]');


const matches = books;
let page = 1;

// // Need to create variables
const range = [0, 36]; 

if (!matches || !Array.isArray(matches)) throw new Error('Source required');

if (!range || range.length < 2) throw new Error('Range must be an array with two numbers');


/*
 * Ceate a List of Books
 *
 * 
 */

dataSearchAuthors.appendChild(authors)

let fragment = document.createDocumentFragment(books, 0, BOOKS_PER_PAGE)
let extracted = books.slice(0, 36)

const UpDateButton = () => {
    const remaining = books.length - (page * BOOKS_PER_PAGE);
    const remainingText = remaining > 0 ? `(${remaining})` : '';
    const buttonText = `Show more ${remainingText}`;
    
    dataListButton.disabled = !(remaining > 0);
    dataListButton.innerHTML = buttonText;
};

const initializePreview = ({authors, id, image, title }) => {
    const booksExtract = document.createElement('button')         
    booksExtract.classList = 'preview'
    booksExtract.setAttribute('data-preview', id)

    booksExtract.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[id]}</div>
        </div>
    `

    return booksExtract
};

dataListItems.appendChild(fragment) 

const createPreviewsList = (list)=>{
    list.map((book)=>{
        const {author, image, id, title } = book
        const preview = createPreview({
            author,
            id,
            image, 
            title
        })
        fragment.appendChild(preview)
    })
    dataListItems.appendChild(fragment)
    UpDateButton();
}

//Calling the CreatePreviews to show the first 36 books
createPreviewsList(extracted);

const DropFragment = (items, dropdownText) => {
    const fragment = document.createDocumentFragment()
    const dropdown = document.createElement('option')
    dropdown.value = 'any';
    dropdown.innerText = dropdownText;
    dropdown.selected = true;
    fragment.appendChild(dropdown);
  
    const itemArray = Object.entries(items);
  
    itemArray.map((item)=>{
        const option = document.createElement('option')
        option.value = item[0]
        option.innerText = item[1]
        fragment.appendChild(option)
    })
  
    return fragment
  }
  
  // Create Genres drop-down
const genresFragment = DropFragment(genres, 'All Genres')
dataSearchGenres.appendChild(genresFragment)
  
// Create Authors drop-down
const authorsFragment = DropFragment(authors, 'All Authors')
dataSearchAuthors.appendChild(authorsFragment)
    
  
// Create handler for when show more is pressed
dataListButton.addEventListener("click", ()=> {
    const firstIndex = page * BOOKS_PER_PAGE;
    const lastIndex =(page + 1 ) * BOOKS_PER_PAGE;
    createPreviewsFragment(firstIndex, lastIndex)
});

dataSearchCancel.addEventListener("click", ()=>{
    dataSearchOverlay.open = false;
});
// EventListener handling when button is closed
dataListClose.addEventListener("click", ()=>{
    dataListActive.open = false;
});

// Previews functions when button is pressed

const createPreviewsFragment = (oldBooks, newBooks ) => {
    const newExtractedBook = books.slice(oldBooks, newBooks)
    page = page + 1
    createPreviewsList(newExtractedBook)
};

dataHeaderSearch.addEventListener("click", ()=>{
    dataSearchOverlay.open = true ;
}); 


/*
 * Filtering Book Search event listener
 *
 * 
 */

datasearchButton.addEventListener("click",(event) => {
    event.preventDefault();

    const formData = new FormData(dataSearchForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const genre = formData.get('genre');
    let result = [];

    if ((author !== "any" || genre !== "any") && title.trim() !== "") {
        // Filter by title, author, and genre
        result = books.filter((book) => {
          return book.title.toLowerCase().includes(title.toLowerCase()) &&
            book.author === author &&
            book.genres.includes(genre);
        });
      } else if (author !== "any" && genre !== "any") {
        // Filter by author and genre only
        result = books.filter((book) => {
          return book.author === author &&
            book.genres.includes(genre);
        });
      } else if (author !== "any") {
        // Filter by author only
        result = books.filter((book) => {
          return book.author === author;
        });
      } else if (genre !== "any") {
        // Filter by genre only
        result = books.filter((book) => {
          return book.genres.includes(genre);
        });
      } else {
        // Filter by title only
        result = books.filter((book) => {
          return book.title.toLowerCase().includes(title.toLowerCase());
        });
      }
});


// List item 

dataListItems.addEventListener("click", (event)=> {
  
    // pathArray shows all the dom elements that event passed from target to root 
    pathArray = Array.from(event.path || event.composedPath())

    // active will store the book object 
    let active;

    for (const node of pathArray) {

        //previewId stores the id of the book preview
        const previewId = node?.dataset?.preview

        if (active){
            break;
        } 
        
        // iterating over the books object
        for (let singleBook of books) {

            if (singleBook.id === previewId) {
                active = singleBook
            } 
        } 
    }
    
    if (!active) return

    
   
    
    dataListActive.setAttribute('open', 'true');
    dataListBlur.setAttribute('src', active.image);
    dataListImage.setAttribute('src', active.image);
    dataListTitle.textContent = active.title;  

   
   
    //Convert string format date to Date Object
    const publishDate = new Date(active.published)
    dataListSubtitle.textContent = `${authors[active.author]} (${publishDate.getFullYear()})`;
    
    
    dataListDescription.textContent = active.description;
});



/*
 * Theme Dark and Mode Themes of the code.
 *
 */



dataSettingsTheme.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

const css = {
day : {
    dark: '10, 10, 20',
    light: '255, 255, 255',
},

evening : {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}
}; 


// event listener to set the theme to day or night.
dataSettingsForm.addEventListener( 'submit', (event) => {
    // event.preventDefault();

    const formData = new FormData(event.target);
    const storeForm = Object.fromEntries(formData);

    if (storeForm.theme === 'evening') {
        document.documentElement.style.setProperty('--color-dark', `rgb(${css.evening.dark})`);
        document.documentElement.style.setProperty('--color-light', `rgb(${css.day.light})`);
    } else if (storeForm.theme === 'day') {
        document.documentElement.style.setProperty('--color-dark', `rgb(${css.evening.dark})`);
        document.documentElement.style.setProperty('--color-light', `rgb(${css.day.light})`);
      
    };
    
    dataSettingsOverlay.close();
}); 

saveElement.addEventListener('click', () =>{})
// Event listener to press the cancel button
    dataSettingsCancel.addEventListener('click', () => {             
    dataSettingsOverlay.close();
  
}); 

datasett

// To click the setting tab
dataHeaderSettings.addEventListener('click', () => {
     dataSettingsOverlay.showModal();
 })
