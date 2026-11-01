async function github(){
    try{
        const response=await fetch("https://api.github.com/users");
        if(!response.ok){
            throw new Error("Data Not Fetched");
        }
        const data=await response.json();
        const parent=document.getElementById("first")
        for(let users of data){
            const element=document.createElement("div");
            element.classList.add("users");
            const img=document.createElement("img");
            img.src=users.avatar_url;

            const username=document.createElement('h2');
            username.textContent=users.login;
            
            const profilelink=document.createElement('a');
            profilelink.href=users.html_url;
            profilelink.textContent="visit profile..";
            element.append(img,username,profilelink);
            parent.append(element);
        }
    }
    catch(Error){
        console.log("error",Error);
    }
}
github();