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

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

 const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

 const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

// slice the first 36 books to show

fragment = document.createDocumentFragment()
extracted = books.slice(0, 36)

// // loop over the extracted books and create previews for each one
for ( i = 0 ; extracted.length; i++) {
    const preview = createPreview {
        author,
        id,
        image,
        title
    }
    fragment.appendChild(preview)
}


dataListItems.appendChild(fragment)


const genres = document.createDocumentFragment()

const element = document.createElement('option')
element.value = 'any'
element = 'All Genres'
genres.appendChild(element)


for ([id, name]; Object.entries(genres); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}


dataSearchGenres.appendChild(genres)


authors = document.createDocumentFragment()


element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

// loop over the authors object and create an option element for each one
for ([id, name]; Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}

dataSearchAuthors.appendChild(authors)


dataSettingsTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'



/*
 * Ceate a List of Books
 *
 * 
 */


// Create a CSS variable and create a object
const css = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',},
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',}
}

// Make V a const var and fixed the ternary expression used a colon instead of | for true case.
const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
document.documentElement.style.setProperty('--color-dark', css[v].dark);
document.documentElement.style.setProperty('--color-light', css[v].light);



dataListButton = "Show more (books.length - BOOKS_PER_PAGE)"


dataListButton.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)


dataListButton.innerHTML = /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

dataSearchCancel.click() { dataSearchOverlay.open === false }


dataSettingsCancel.click() { querySelect(dataSettingsOverlay).open === false }
dataSettingsForm.submit() { actions.settings.submit }
dataListClose.click() { data-list-active.open === false }

dataListButton.click() {
    document.querySelector('[data-list-items]').appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
    actions.list.updateRemaining()
    page = page + 1
}

dataHeaderSearch.click() {
    data-search-overlay.open === true ;
    data-search-title.focus();
}

dataSearchForm.click(filters) {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
        }

        if titleMatch && authorMatch && genreMatch => result.push(book)
    }

    if display.length < 1 
    data-list-message.class.add('list__message_show')
    else data-list-message.class.remove('list__message_show')
    
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

        fragment.appendChild(element)
    }
    
    dataListItems.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    dataListButton.disabled = initial > 0

    dataListButton.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    dataSearchOverlay.open = false
}

dataSettingsOverlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    dataSettingsOverlay.open === false
}


// Event 
dataListItems.click() {
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
