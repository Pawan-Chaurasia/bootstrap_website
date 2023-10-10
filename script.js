let currentSelectedNav = document.getElementById('home');
function onNavItemClick(id){
    const navItem = document.getElementById(id);
    currentSelectedNav?.classList.remove('active');                 // the optional chaining operator ?. is a safeguard that prevents the code from throwing an error if currentSelectedNav is not defined. If currentSelectedNav is defined, the code will continue executing, removing the 'active' class from the element's classList. If currentSelectedNav is null or undefined, the code will simply do nothing and not raise an error.
    currentSelectedNav = navItem;
    currentSelectedNav.classList.add('active');

};
// const searchButton = document.getElementById('search-button');
// const searchText = document.getElementById('search-text');

// searchButton.addEventListener('click',()=>{
//     const query = searchText.value;
//     if (!query) return;                                //checks if the query is empty or falsy. If the query is empty (no text has been entered), the return statement will exit the current function or block of code.
//     fetchNews(query);
//     currentSelectedNav?.classList.remove('active');
//     currentSelectedNav = null;
// });