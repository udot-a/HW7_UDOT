// ************************* REQUIRED ******************************
var img = document.createElement('img');
img.src = './img/animal.jpg'
img.classList.add('img')
var paragraph = document.createElement('p');
paragraph.innerText = 'Click me please!!!'
paragraph.style = ` padding:20px;`
required.appendChild(paragraph);
paragraph.onclick = (event) => {
    paragraph.innerText = '';
    paragraph.appendChild(img);
}
img.onmousemove = (event) => {
    img.classList.add('img-width');
}
img.onclick = (event) => {
    event.stopPropagation();
    img.classList.remove('img-width');
    img.parentNode.removeChild(img);
    paragraph.innerText = 'Click me please!!!'
}
// ******************* ADDITIONAL #1 *******************************************
var handler = {
    mouseover(event) {
        event.stopPropagation();
        this.style.backgroundColor = '#ffff0050';
    },
    mouseout(event) {
        event.stopPropagation();
        this.style.backgroundColor = '#ff00ff50';

    },
    click(event) {
        event.stopPropagation();
        this.firstChild && this.parentNode.replaceChild(this.firstChild, this)
        this.remove();
    },
    mousemove(event) {
        event.stopPropagation();
        nameOfElem.innerText = `Текущий элемент: ${this.title}`

    }
}
function render(array, handlers, parent, offset) {
    debugger
    var elements = [];
    var parent;
    for (var index=0; index<array.length; index++ ){
            parent = parent.appendChild(document.createElement('div'))
            elements.push(parent)
            elements[index].title = array[index];
            elements[index].style = `position: fixed;
                                    top: 90px;
                                    left: ${500+offset}px;
                                    border: dotted 1px yellow;
                                    background-color: #ff00ff50;
                                    width:${ 400 - index * 50 }px;
                                    height: ${ 400 - index * 50 }px;`
            for (let key in handlers) elements[index].addEventListener(key, handlers[key]);
    } 
}

render(["first", "second", "third", "fourth"], handler, additonalOne, 0)

// ******************* ADDITIONAL #2 *******************************************
var handler2 = {
    mouseenter(event) {
        // event.stopPropagation();
        this.style.backgroundColor = '#ffff0050';
    },
    mouseleave(event) {
        // event.stopPropagation();
        this.style.backgroundColor = '#ff00ff50';

    },
    click(event) {
        event.stopPropagation();
        this.firstChild && this.parentNode.replaceChild(this.firstChild, this)
        this.remove();
    },
    mousemove(event) {
        event.stopPropagation();
        nameOfElemTwo.innerText = `Текущий элемент: ${ this.title } `

    }
}
render([ 1, 2, 3, 4, 5, 6, 7], handler2, additonalTwo, 500)
