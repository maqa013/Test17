// // JavaScript 

//  const h1 = document.querySelector('h1')
//  const btn = document.querySelector('button')
// // h1.style='display:none'

// // JQuery
//  $('h1').hide()

// $('button').click(function(){
//      $('h1').hide()
// })
// $()


// $('.btn1').click(function(){
//     $('ul li:first').css({
//         'background': 'red',
//         'color':'white',
//         'display':'inline'
//     })
// })


// $('.btn2').click(function(){
//     $('ul li:first-child').css({
//         'backgroun': 'red',
//         'display':'inline'
//     })
// })



$('input').keypress(function(){
    $('div').text($(this).val())
})
