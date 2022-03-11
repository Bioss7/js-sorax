var links,
    updatestate,
    updatebuttons,
    contentEl,
    navEl;

contentEl = document.querySelector('.content');
navEl = document.querySelector('.nav');

links = {
    main: "This is the <strong>main</strong> page",
    about: "This is the <strong>about</strong> page",
    downloads: "This is the <strong>downloads</strong> page",
};

updatestate = function(state){
    if(!state) return;
    contentEl.innerHTML = links[state.page];
    updatebuttons(state);
};

updatebuttons = function(state){
    [].slice.call(navEl.querySelectorAll('a'))
        .forEach(function(e){
            var classList = e.parentNode.classList;
            state.page === e.getAttribute('href')
            ? classList.add('active')
            : classList.remove('active')
        });
};

window.addEventListener('popstate', function(e){
    updatestate(e.state);
});

navEl.addEventListener('click', function(e){ 
    var state;
    if(e.target.tagName !== 'A') return;
    state = {
        page: e.target.getAttribute('href')
    };
    // Сохранить состояние в историю с помощью метода pushState() 3 аргумента: 
    // 1 аргумент это объект который описывает состояние
    // 2 аргумент описание
    // 3 относительная ссылка
    history.pushState(state, '', state.page);
    updatestate(state);
    e.preventDefault();
});