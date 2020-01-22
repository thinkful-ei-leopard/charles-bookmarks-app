import store from './store.js';
import index from './index.js';

const bookmarkURL = 'https://thinkful-list-api.herokuapp.com/charles/bookmarks';

// const blogData = JSON.stringify({
//   title: 'Testmark 3',
//   url: 'https://www.testmark.com',
//   desc: 'dolorum tempore deserunt',
//   rating: 3  
// });

const create = function(blogData){
  fetch(bookmarkURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
};

const deleteBookmark = function(id) {
  return fetch(bookmarkURL+id, {
    method: 'DELETE'
  });
};

// const getBookmarks = function(){
//   fetch(bookmarkURL)
//     .then(response => response.json())
//     .then(responseJson => store.store.bookmarks = responseJson) 
//     .then(index.renderBookmarks())
//     .then(console.log(store.store.bookmarks));
    
// };

// console.log(getBookmarks);

// const test = function(){
//   return store.store.bookmarks;
  
// };
// console.log(store.store.bookmarks);


// const storeBookmarks = function(responseJson){
//   for(let i=0; i < responseJson.length; i++){
//     return {
//       title: responseJson[i].title,
//       rating: responseJson[i].rating,
//       desc: responseJson[i].desc
//     };
//   }
// };

// storeBookmarks();

function main(){
  // getBookmarks();
}
$(main);


export default{
  // getBookmarks,
  bookmarkURL,
  create,
  deleteBookmark
};