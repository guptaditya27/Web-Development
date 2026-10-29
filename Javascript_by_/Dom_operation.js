const newele = document.createElement('h2');
newele.textContent = 'strike is coming';
newele.id = 'second';
// select elemnt
const ele = document.getElementById('first');
ele.before(newele);

const newele2 = document.createElement('h2');
newele2.textContent = 'Diwali aane wali hai ';
newele2.id = 'third';
newele2.className = 'Diwali';
newele2.className += ' Holi';
// ek element ke multiplre class names ho skte hai to whii +=" holi" .diwali, .holi class name mil jyega newele2 ko.
// alternate mtd to do so
newele2.classList.add('rakhi');
// can remove also
newele2.classList.remove('rakhi');
ele.after(newele2);
newele2.style.backgroundColor = 'pink';
newele2.style.color = 'blue';

// creating a list elemnt and appending it to ul existing
const list = document.createElement('li');
const list2 = document.createElement('li');
const list3 = document.createElement('li');
const list4 = document.createElement('li');
list4.textContent = 'Shahi Tukda';
list.textContent = 'milk';
list2.textContent = 'bread';
list3.textContent = 'Egg';
const unordlist = document.getElementById('unordered');
unordlist.append(list);
unordlist.append(list2);
unordlist.prepend(list3);
// want to attach shahi tukda after bread mtd's to do it // or adding element after specific item
unordlist.children[2].after(list4);

//console.log(newele2);

const arr=["paan",'gilori','supari'];
// for(let val of arr){
//     const l=document.createElement('li');
//     l.textContent=val;
//     unordlist.append(l);
// }
// its not that much optimised mtd to manipulate our ui.

// altenate mtd.
const fragment=document.createDocumentFragment();

for(let val of arr){
    
    const l=document.createElement("li");
    l.textContent=val;
    fragment.append(l);
}
unordlist.append(fragment);

// isey ui pe load nhi padega and ek baar mein sab update ho jyega

// elemnt.remove() used to delete that item 


 