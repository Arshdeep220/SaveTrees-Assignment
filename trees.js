var img = document.getElementById('myImage');
let currentImgIndex = 1;
const images = [ 
    'https://cdn.downtoearth.org.in/library/large/2022-09-15/0.08976900_1663241450_istock-1248915720-(1).jpg',
    'https://cdn.firstcry.com/education/2022/07/25190021/Essay-on-Save-Trees-10-Lines-Short-and-Long-Essay-For-Kids.jpg',
    'https://images.indianexpress.com/2018/08/1-save-tree-dreamstime.jpg',
    'https://fastread.in/images/uploads/save-tree-speech.jpg',
    'https://www.treehugger.com/thmb/aG-r6Gfm7seMVqjBoYxUVXMwUt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8860298334_509c5f9698_o-2fba9e1a26cc465bb9d4f9b659b2296d.jpg',
]; 
function changeImage(){
    let inputValue = document.getElementById("input").value;
    if(currentImgIndex >= images.length){
        currentImgIndex = 0;
    }
    img.src = images[currentImgIndex];
    currentImgIndex++;
    document.getElementById("input").value = " ";
    document.getElementById("heading").innerHTML= "<h3>" + inputValue + "</h3>";
}