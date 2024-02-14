// script js file 
// loop through children of tbody
const children = $('tbody').children();
console.log(children.forEach);


let children_array = []
for(let i=0; i<children.length; i++){
    children_array.push(children[i]);
}

console.log(children_array);

// build an array of objects
const items = [];
children_array.forEach(element => {
    console.log(element.outerHTML);
    console.log(element.getAttribute('data-name'));
    const rowDetails = {
        name: element.getAttribute('data-name'),
        size: parseInt(element.getAttribute('data-size')),
        time: parseInt(element.getAttribute('data-time')),
        html: element.outerHTML
    };
    items.push(rowDetails);
});
console.log(items);


// sort status


