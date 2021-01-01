function next() {
    var pictures= ["download.jpg","sathish.jpg","amutha.jpg","guru.jpg","krish.jpg"];
    var names= ["","Sathish Kumar","Amutha Prabha","Gurunath","Krishith"];
    var i =0;
    function nextslide() {
    document.getElementById("image").src= pictures[i];
    document.getElementById("name").innerHTML= names[i];
    i++;
    }
}