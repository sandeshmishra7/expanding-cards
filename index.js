var imgItem = document.querySelectorAll('.img-item');

imgItem.forEach(function(e){
    e.addEventListener('click', function(){
        remove();
        e.classList.add('active');
    })
});

function remove() {
    imgItem.forEach(function(e){
        e.classList.remove('active');
    })
}