let Access_Key = "qrZSerz0XETmtA406D_D4NzMz42lRknwfzXT5Hvmvqs";
//item of which we have to search image
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("serchbtn");
let showData = document.querySelector("showdata");

const getData = async (searchValue)=>{
  let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue } &client_id=${Access_Key}`);
  let jsonData = await fetching.json();
  // console.log(jsonData.results);

  jsonData.results.forEach(function(data){
    console.log(data.urls.small);

    let div = document.createElement("div");
    div.classList.add("card");
    showData.appendChild(div);
    
    div.innerHTML = `
    <img src= ${data.urls.small} alt="">
    <a href=""></a>`
  })
}

getData()

searchBtn.addEventListener("click",function(){
  let searchValue = searchInput.value;
  getData(searchValue)
})