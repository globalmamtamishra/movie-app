
// let movie=document.getElementById("movie").value

// console.log(movie)




async function getData(){
        let movie=document.getElementById("movie").value

        const url=`http://www.omdbapi.com/?s=${movie}&apikey=b22d4531`

         console.log(url)
    
    
    
        try{
    
    
    let res= await fetch(url);
    
    let data= await res.json()
    append(data.Search)
    console.log(data)
        }
        catch(err){
            console.log(err)
        }
    
    
     }
    
    
    
    
//  getData()


function append(data){

    
data.forEach(function(el){

    let container=document.getElementById("container")

    container.innerHTML=null

    let boxdiv=document.createElement("div")

    let img=document.createElement("img");

    img.src=el.Poster;
    let name=document.createElement("h2")

    name.innerText=el.Title;

    let date=document.createElement("p")

    date.innerText=`realease Data ${el.Year}`


    boxdiv.append(img,name,date);

    container.append(boxdiv)


})

}