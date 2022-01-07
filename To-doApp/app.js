


//------------------Mark todo Completed


// $('li').click(function(){
//     alert("li is clicked");
//     $(this).toggleClass('completed');
// })
//NOTE: ab yeh listner sirf jo ststicaclly lis present hai unpe lga hoga jp dynamic hai unpe lag hi
// nahi paya hoga to kyu na hum on ka use use like generally hum ul pe lga de vo to static hi rahega na

$('ul').on('click','li',function(){
    $(this).toggleClass('completed');

})


//-----------------Add todo
$('input[type="text"]').keypress(function(event){
    console.log("keypressed");
    
    if(event.keyCode==13 && $(this).val()!=""){
    const s= $(this).val();
    const todo =`<li><span><i class="fas fa-trash-alt"></i></span> ${s}</li>`;
    $('ul').append(todo);
    $(this).val("");
   }

})

//-------------------Remove todo

$('ul').on('click','span',(function(event){
    $(this).parent().fadeOut(800,function(){
           $(this).remove();
           //andar vla this li ko refer karega
    })
    
    
    event.stopPropagation();// event bubbling used to stop event bubbling
}));
// yhn pe event trigger span ki vavajh se hoga 
//



//=------------------------------------------Functioning of +button

$('h1').on('click','span',function(){
    $('input[type="text"]').fadeToggle(800);
})