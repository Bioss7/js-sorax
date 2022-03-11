var links;

contentEl = document.querySelector('.content');

links = {
    main: "This is the <strong>main</strong> page",
    about: "This is the <strong>about</strong> page",
    downloads: "This is the <strong>downloads</strong> page",
};

updatestate = function(){
    // обрезаю 1 символ #
    var content = links[location.hash.slice(1)];
    contentEl.innerHTML = content || "Page not found";
};

window.addEventListener('hashchange', updatestate);
window.addEventListener('load', updatestate);