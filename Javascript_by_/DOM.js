// DOM --> DOCUMENT OBJECT MODEL 
// HTML ELEMeNT ---> Js Object can be manipulated directly
/*
    <h1 style="background-color:orange; color: brown;" id="first" >Strike is coming</h1>
        |
        |
    js object ]
    {
        tagname:"h1",
        id:"first",
        style{
            backgrounf-color:"orange",
            color:"brown"
        }
        textcontent:"Strike is Coming"

    }
    ab agr is object mein manipulation krna hai to woh mein js ki help se kr pyuga easily...

*/
// browser converts html element to objects of js directly.
// some syntx to convert 

// const temp=window.document.getElementById("first")

// console.dir(temp) viewing object 

/*
    window global object hai created by browser
    window object mein boht saari functionalities hai  jo usefual hai while interacting with html elemnts/ webpages.
    window prefix lgana is not mendatory automatically add hojata hai i can directly write 
    console.log()
    document.getElemntById("ID");

    Window -- Browser
    |
    |
    Document --repn my entire html document 
    |           in form of object.
    |
    Html File --- head / Body

    head-- meata/title

    body --H1/H2

    this is what dom tree looks like 

*/

// document.getElementById() is method to access element using its id 

/*
const temp=document.getElementById("first")
undefined
temp.innerHTML
'Strike is coming on <span style="display: none;">\n      18 October  \n    </span>'
temp.textContent
'Strike is coming on \n      18 October  \n    '
temp.textContent
'Strike is coming on \n      18 October  \n    '

*/


