let input = document.getElementsByClassName('input')[0],
    output = document.getElementsByClassName('output')[0];
    voc = {
        name: 'Sorax',
        title: 'JavaScript Tuts',
        resource: 'Yotube'
    };

// input.addEventListener('keyup', function(){
//     output.innerHTML = this.value.replace(
//         /\{\{\w*}\}/g, "Some string"
//     );
// }, false);

// Запоминающая группа
input.addEventListener('keyup', function(){
    output.innerHTML = this.value.replace(
        /\{\{(\w*)\}\}/g, function(match, value){
            return voc[value];
        }
    );
}, false);
