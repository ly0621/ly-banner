define(function() {
    var uli = document.querySelectorAll('ul>li')
    var oli = document.querySelectorAll('ol>li');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var num = 0;
    for (var i = 0; i < oli.length; i++) {
        (function(i) {
            oli[i].onclick = function() {
                for (var j = 0; j < oli.length; j++) {
                    uli[j].style.display = 'none';
                    oli[j].classList.remove('active');
                }
                uli[i].style.display = 'block';
                this.classList.add('active');
            }
        })(i)
    }
    prev.onclick = function() {
        num--;
        if (num < 0) num = oli.length - 1;
        for (var i = 0; i < oli.length; i++) {
            oli[i].classList.remove('active');
            uli[i].style.display = 'none';
        }
        uli[num].style.display = 'block';
        oli[num].classList.add('active');
    }
    next.onclick = function() {
        num++;
        if (num > oli.length - 1) num = 0;
        for (var i = 0; i < oli.length; i++) {
            oli[i].classList.remove('active');
            uli[i].style.display = 'none';
        }
        uli[num].style.display = 'block';
        oli[num].classList.add('active');
    }
    autoplay();

    function autoplay() {
        setInterval(function() {
            num++;
            if (num > oli.length - 1) {
                num = 0;
            }
            for (var i = 0; i < oli.length; i++) {
                uli[i].style.display = 'none';
                oli[i].classList.remove('active');
            }
            uli[num].style.display = 'block';
            oli[num].classList.add('active');
        }, 1000)
    }

})