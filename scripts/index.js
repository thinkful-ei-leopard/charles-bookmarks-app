// import {$,jQuery} from 'jquery';
import store from './store.js';
//************** Event Functions **************
function handleAddClick(){
  $('#new').click(function() {
    renderAddPage();
    handleCancelClick();
    handleNewSubmit();
    displayAddPage();
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
    renderBookmarks();
  });
}

function deleteBookmark(){
  $('body').on('click','#delete',function(e){
    $(e.currentTarget).closest('li').remove();
    //renderBookmarks();
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
        <select>
          <option value='1-star'>1 Star</option>
          <option value='2-star'>2 Star</option>
          <option value='3-star'>3 Star</option>
          <option value='4-star'>4 Star</option>
          <option value='5-star'>5 Stars</option>
        </select>
        <textarea rows='6' cols='40' placeholder='Add a description(optional)'>
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
    <select>
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
  return `    
  <ul id='bookmarks-list'>
  <li class='list-item'>
    <div class='list-item-bar'>
      <a href="#">
        <section class='name'>${store.store.bookmarks[0].title}</section> 
        <section class='rating'>${store.store.bookmarks[0].rating}</section>
      </a>
    </div>
    <div class ='list-item-expanded'>
    <form action="${store.store.bookmarks[0].url}" target="_blank">
    <input type="submit" class='visit' value="Visit Site" />
    <button type='button' id='delete'>Trash</button>
    </form>
      <p id='description'>
      ${store.store.bookmarks[0].description}
      </p>
    </div>  
  </li>
  <li class='list-item'>
    <div class='list-item-bar'>
      <a href="#">
        <section class='name'>${store.store.bookmarks[1].title}</section> 
        <section class='rating'>${store.store.bookmarks[1].rating}</section>
      </a>
    </div>
    <div class ='list-item-expanded'>
    <form action="${store.store.bookmarks[1].url}" target="_blank">
    <input type="submit" class='visit' value="Visit Site" />
    <button type='button' id='delete'>Trash</button>
    </form>
      
      <p id='description'>
      ${store.store.bookmarks[1].description}
      </p>
    </div>  
  </li>
  <li class='list-item'>
    <div class='list-item-bar'>
      <a href="#">
        <section class='name'>${store.store.bookmarks[2].title}</section> 
        <section class='rating'>${store.store.bookmarks[2].rating}</section>
      </a>
    </div>
    <div class ='list-item-expanded'>
      <form action="${store.store.bookmarks[2].url}" target="_blank">
      <input type="submit" class='visit' value="Visit Site" />
      <button type='button' id='delete'>Trash</button>
      </form>
      <p id='description'>
      ${store.store.bookmarks[2].description}
      </p>
    </div>  
  </li>
</ul>
  `;
}

function renderBookmarks(){
  $('#bookmarks').html(bookmarkHtml());
}

function main(){
  renderHomeScreen();
  handleBookmarkClick();
  deleteBookmark();
  renderBookmarks();
  console.log(store.store.bookmarks[0].title);
}
$(main);