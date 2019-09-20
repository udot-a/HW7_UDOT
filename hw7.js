// ************************* REQUIRED ******************************
var img = document.createElement('img');
img.src = './img/animal.jpg'
img.classList.add('img')
var paragraf = document.createElement('p');
paragraf.innerText = 'Click me please!!!'
paragraf.style = ` padding:20px;`
required.appendChild(paragraf);
paragraf.onclick = (event) => {
    paragraf.innerText = '';
    paragraf.appendChild(img);
}
img.onmouseenter = (event) => {
    img.classList.add('img-width');
}
img.onclick = (event) => {
    event.stopPropagation();
    img.classList.remove('img-width')
    img.remove();
    paragraf.innerText = 'Click me please!!!'
}
// ******************* ADDITIONAL #1 *******************************************

var collection = {
    name: 'div',
    props: {
        style: `position: fixed;
        top: 90px;
        left: 500px;
        border: dotted 1px yellow;
        background-color: #ff00ff50;
        display: block`
    }
}
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
        console.dir(this)
        this.firstChild && this.replaceWith(this.firstChild)
        this.remove();
        // this.style.zIndex = 0;
        // this.style.display = 'none'
    },
    mousemove(event) {
        event.stopPropagation();
        nameOfElem.innerText = `Текущий элемент: ${this.id}`

    }
}

function render(array, element, handlers, parent) {
    var elements = [];
    var elem_create = parent;
    var counter = 0;

    array.forEach(
        function (tag, index, arr) {
            elem_create = elem_create.appendChild(document.createElement(element.name))
            elements.push(elem_create)
            elements[counter].id = tag;
            elements[counter].setAttribute('style', element['props']['style'])
            elements[counter].style.width = `${400 - counter * 50}px`
            elements[counter].style.height = `${400 - counter * 50}px`
            elements[counter].style.zIndex = counter;
            for (let key in handlers)
                elements[counter].addEventListener(key, handlers[key]);
            counter++;
        }
    )
}

render(["first", "second", "third", "fourth"], collection, handler, additonalOne)

// ******************* ADDITIONAL #2 *******************************************
var collection = {
    name: 'div',
    props: {
        style: `position: fixed;
        top: 90px;
        left: 1000px;
        border: dotted 1px yellow;
        background-color: #ff00ff50;
        display: block`
    }
}
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
        this.firstChild && this.replaceWith(this.firstChild)
        this.remove();
    },
    mousemove(event) {
        event.stopPropagation();
        nameOfElemTwo.innerText = `Текущий элемент: ${this.id}`

    }
}
render([ 1, 2, 3, 4, 5, 6, 7], collection, handler2, additonalTwo)
