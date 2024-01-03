
document.getElementById("up").addEventListener("click", function(){
    var d=document.getElementById("linkup").value;
    var x=document.getElementById("titleup").value;
    var y=document.getElementById("desc").value;
    var z='<div class="thumbnail"><center><iframe width="250" height="150" src=" '+d+' "></iframe></center><div class="caption"><p class="title">' +x+'</p><p><img src="img/e1.jpg"> Anonymous Elephant</p><p class="hashtag">'+y+'</p><p><button class="btn-warning" style="margin-right: 5px;">Like <i class="fa fa-thumbs-up"></i></button><button class="btn-success" style="margin-right: 5px;">Subscribe<i class="fa fa-heart"></i></button><button class="btn-danger" style="margin-right: 5px;">Report<i class="fa fa-flag"></i></button><button class="btn-info" style="margin-right: 5px;">Share<i class="fa fa-share"></i></button></p><form><textarea class="form-control">Comment...</textarea></form></div></div>'        
    document.getElementById("grid1").innerHTML+=z;
})