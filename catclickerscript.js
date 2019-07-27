let i=0, j = 0; 
let elem = [];
let cats = {
    name: ["Vivek", "Suganya", "Vishwesh", "Vishwesh1", "Vishwesh2"],
    image: ["vivek.jpg", "suganya.jpg", "vis1.jpg", "vis2.jpg","vis3.jpg"],
    clicked: 0
}
for(j=0;j<cats.name.length;j++)
{
document.getElementById("list_"+j).innerHTML=cats.name[j];
}

for(i=0;i<cats.name.length;i++)
{
     elem.push(document.getElementById("list_"+i));
   
      elem[i].addEventListener('click', ((imgs)=>{ 
        return function(){ document.getElementById("Displayarea").src="images/"+imgs;};
        })(cats.image[i]));
   
}