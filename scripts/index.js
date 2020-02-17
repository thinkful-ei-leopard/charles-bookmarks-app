// import {$,jQuery} from 'jquery';
import store from './store.js';
import api from './api.js';
// import '/styles/styles.css';

//************** Event Functions **************
function handleAddClick(){
  $('#new').click(function() {
    renderAddPage();
    handleCancelClick();
    handleNewSubmit();
  });
}

function handleCancelClick(){
  $('#cancel').click(function(e) {
    console.log('cancel click working');
    $(e.currentTarget).closest('#content').find('#float-box').toggle();
  });
}

function handleNewSubmit(){
  $('#create').click(function(event) {
    event.preventDefault();
    $(event.currentTarget).closest('#content').find('#float-box').toggle();
    console.log('submit click working');
    console.log($('#description').val());
    let bookmark = {
      title: $('#newTitle').val(),
      desc: $('#info').val(),
      url: $('#newBookmark').val(),
      rating: $('#submit-rating').val()
    };
    console.log(api.create(bookmark));
    bookmark.expanded = false;
    store.store.bookmarks.push(bookmark);
    console.log(store.store.bookmarks);
    renderBookmarks();
  });
}

function deleteBookmark(){
  $('body').on('click','.delete',function(e){
    $(e.currentTarget).closest('li').remove();
    console.log(e.currentTarget);
    renderBookmarks();
  });
  
}

function handleBookmarkClick(){
  $('body').on('click','.list-item-bar',function(e){
    $(e.currentTarget).closest('li').find('.list-item-expanded').toggle();
  });
}

function displayAddPage(){
  $('body').on('click','#new',function(e){
    console.log('display add page running');
    $(e.currentTarget).closest('#content').find('#float-box').toggle();
    
  });
}

function getBookmarks(){
  fetch(api.bookmarkURL)
    .then(response => response.json())
    .then(responseJson => store.store.bookmarks = responseJson) 
    .then(responseJson => renderBookmarks())
    .then(responseJson => console.log(store.store.bookmarks));   
}


//************* Render Functions ***************
function renderExpandedView(){
  
}

function renderAddPage(){
  console.log('add page running');
  $('#float-box').html(`
  <section id='add-content'>
    <h2 id='add-header'>My Bookmarks</h2>
    <section id='add-forum'>
      <form id='linkInput'>
        Add New Bookmark <input type='text' name='newBookmark' id='newBookmark' placeholder='http://samplelink.com' value=''><br>
      </form>
      <form id='titleRating'>
        Title <input type='text' name='newtitle' id='newTitle' placeholder='Name Your Bookmark' value=''><br>
        <select id='submit-rating'>
          <option value='1'>1 Star</option>
          <option value='2'>2 Star</option>
          <option value='3'>3 Star</option>
          <option value='5'>4 Star</option>
          <option value='5'>5 Stars</option>
        </select>
        Add a description(optional)
        <textarea id='info' rows='6' cols='40'>
        </textarea>
        <section id='submitSection'>
          <button type='button' id='cancel'>Cancel</button>
          <button type='submit' id='create'>Create</button>
        </section>
      </form>
    </section> 

    </section>
  `);
}

function renderHomeScreen(){
  console.log('render function running');
  $('body').html(`<section id='content'>
  <h1 id='header'>My Bookmarks</h1>
  <section id='options'>
    <button type='button' id='new'>+New</button>
    <select id=''>
      <option value='1-star'>1 Star+</option>
      <option value='2-star'>2 Star+</option>
      <option value='3-star'>3 Star+</option>
      <option value='4-star'>4 Star+</option>
      <option value='5-star'>5 Stars</option>
    </select>
  </section> 
  <section id='bookmarks'>
    
  </section>
  <section id='float-box'>
  </section>
</section>`);
  handleAddClick();
}

function bookmarkHtml(){
  let booksList = '<ul id=\'bookmarks-list\'>';
  for (let i=0; i < store.store.bookmarks.length; i++){
    booksList+= `<li class='list-item'>
    <div class='list-item-bar'>
      <a href="#">
        <section class='name'>${store.store.bookmarks[i].title}</section> 
        <section class='rating'>${store.store.bookmarks[i].rating}</section>
      </a>
    </div>
    <div class ='list-item-expanded'>
    <form action="${store.store.bookmarks[i].url}" target="_blank">
    <input type="submit" class='visit' value="Visit Site" />
    <button type='button' class='delete'>Trash</button>
    </form>
      <p class='description'>
      ${store.store.bookmarks[i].desc}
      </p>
    </div>  
  </li>`;
  }
  booksList+='</ul>';
  return booksList;
}

function renderBookmarks(){
  $('#bookmarks').html(bookmarkHtml());
}

function main(){
  renderHomeScreen();
  handleBookmarkClick();
  deleteBookmark();
  getBookmarks();
  // renderBookmarks();
  displayAddPage();
}
$(main);

export default{
  renderHomeScreen,
  handleBookmarkClick,
  deleteBookmark,
  renderBookmarks,
  displayAddPage
};