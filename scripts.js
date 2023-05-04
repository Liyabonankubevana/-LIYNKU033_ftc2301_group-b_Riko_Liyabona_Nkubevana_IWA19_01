// First, we have to import the data from the data.js file
import { authors, genres,  books, BOOKS_PER_PAGE } from './data'

const matches = books;
const page = 1;

// Need to create variables
const range = [0, 36]; 

/*
*
*Retrieve elements from the DOM and store them in variables
*Fix the variables that have been provided so the names are correct
*/

const dataListItems = document.querySelector('[data-list-items]');
const dataListButton = document.querySelector('[data-list-button]');
const dataListClose = document.querySelector('[data-list-close]');
const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const dataSearchCancel = document.querySelector('[data-search-cancel]');
const dataSettingsForm = document.querySelector('[data-settings-form]');
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]');
const dataSettingsCancel = document.querySelector('[data-settings-cancel]');
const dataHeaderSearch = document.querySelector('[data-header-search]');
const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');



if (!matches || !Array.isArray(matches)) {throw new Error('Source required')};

if (!range || range.length < 2) {throw new Error('Range must be an array with two numbers')};


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




/*
 * THE CSS SECTION OF THE CODE 
 *
*/

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

 const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

// Create a CSS variable and create a object


const data = (event) => {
    event.preventDefault();
    const css = {
        day: {
            dark: '10, 10, 20',
            light: '255, 255, 255',},
        night: {
            dark: '255, 255, 255',
            light: '10, 10, 20',}
    }
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
}
// Make V a const var and fixed the ternary expression used a colon instead of | for true case.
// const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
// document.documentElement.style.setProperty('--color-dark', css[v].dark);
// document.documentElement.style.setProperty('--color-light', css[v].light);

// dataSettingsOverlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     dataSettingsOverlay.open === false
// }

// dataSettingsTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'

/*
*
*Different section
*
*/

// Data list event listener 
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


// Search engine 

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
    

    dataListItems.innerHTML = ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
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


// Data list event listener 

dataListItems.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
