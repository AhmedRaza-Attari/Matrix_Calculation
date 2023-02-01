function addition() {
    let arr1_first = Number(document.getElementById('arr1_first').value); 
    let arr1_second = Number(document.getElementById('arr1_second').value); 
    let arr1_third = Number(document.getElementById('arr1_third').value); 
    let arr1_fourth = Number(document.getElementById('arr1_fourth').value);
    let arr1_fifth = Number(document.getElementById('arr1_fifth').value);
    let arr1_sixth = Number(document.getElementById('arr1_sixth').value);
    let arr1_seventh = Number(document.getElementById('arr1_seventh').value);
    let arr1_eighth = Number(document.getElementById('arr1_eighth').value);
    let arr1_nineth = Number(document.getElementById('arr1_nineth').value); 

    let arr2_first = Number(document.getElementById('arr2_first').value); 
    let arr2_second = Number(document.getElementById('arr2_second').value); 
    let arr2_third = Number(document.getElementById('arr2_third').value); 
    let arr2_fourth = Number(document.getElementById('arr2_fourth').value);
    let arr2_fifth = Number(document.getElementById('arr2_fifth').value);
    let arr2_sixth = Number(document.getElementById('arr2_sixth').value);
    let arr2_seventh = Number(document.getElementById('arr2_seventh').value);
    let arr2_eighth = Number(document.getElementById('arr2_eighth').value);
    let arr2_nineth = Number(document.getElementById('arr2_nineth').value); 

    let result = document.getElementsByClassName("result");
    result[0].className += " show";

    let showResultDiv = document.querySelector(".showResult").querySelectorAll(".resArr");
    let count = 0;


    let arr1 = [
        [arr1_first, arr1_second, arr1_third],
        [arr1_fourth, arr1_fifth, arr1_sixth],
        [arr1_seventh, arr1_eighth, arr1_nineth]
    ]

    let arr2 = [
        [arr2_first, arr2_second, arr2_third],
        [arr2_fourth, arr2_fifth, arr2_sixth],
        [arr2_seventh, arr2_eighth, arr2_nineth]
    ]
    
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (!arr3[i]) arr3[i] = [];
            arr3[i][j] = (arr1[i][j]) + (arr2[i][j]);
            showResultDiv[count++].innerHTML = (arr1[i][j]) + (arr2[i][j]);
        }
    }

    console.log("arr1" , arr1);
    console.log("arr2" , arr2);
    console.log("arr3" , arr3);
    console.log("count", count);



    
    // console.log(arr1_first);    
    // console.log(arr1_second);    
    // console.log(arr1_third);    
    // console.log(arr1_fourth);    
    // console.log(arr1_fifth);    
    // console.log(arr1_sixth);    
    // console.log(arr1_seventh);    
    // console.log(arr1_eighth);    
    // console.log(arr1_nineth);    

    // console.log(arr2_first);    
    // console.log(arr2_second);    
    // console.log(arr2_third);    
    // console.log(arr2_fourth);    
    // console.log(arr2_fifth);    
    // console.log(arr2_sixth);    
    // console.log(arr2_seventh);    
    // console.log(arr2_eighth);    
    // console.log(arr2_nineth);    
}

function subtraction() {
    let arr1_first = Number(document.getElementById('arr1_first').value); 
    let arr1_second = Number(document.getElementById('arr1_second').value); 
    let arr1_third = Number(document.getElementById('arr1_third').value); 
    let arr1_fourth = Number(document.getElementById('arr1_fourth').value);
    let arr1_fifth = Number(document.getElementById('arr1_fifth').value);
    let arr1_sixth = Number(document.getElementById('arr1_sixth').value);
    let arr1_seventh = Number(document.getElementById('arr1_seventh').value);
    let arr1_eighth = Number(document.getElementById('arr1_eighth').value);
    let arr1_nineth = Number(document.getElementById('arr1_nineth').value); 

    let arr2_first = Number(document.getElementById('arr2_first').value); 
    let arr2_second = Number(document.getElementById('arr2_second').value); 
    let arr2_third = Number(document.getElementById('arr2_third').value); 
    let arr2_fourth = Number(document.getElementById('arr2_fourth').value);
    let arr2_fifth = Number(document.getElementById('arr2_fifth').value);
    let arr2_sixth = Number(document.getElementById('arr2_sixth').value);
    let arr2_seventh = Number(document.getElementById('arr2_seventh').value);
    let arr2_eighth = Number(document.getElementById('arr2_eighth').value);
    let arr2_nineth = Number(document.getElementById('arr2_nineth').value); 

    let result = document.getElementsByClassName("result");
    result[0].className += " show";

    let showResultDiv = document.querySelector(".showResult").querySelectorAll(".resArr");
    let count = 0;


    let arr1 = [
        [arr1_first, arr1_second, arr1_third],
        [arr1_fourth, arr1_fifth, arr1_sixth],
        [arr1_seventh, arr1_eighth, arr1_nineth]
    ]

    let arr2 = [
        [arr2_first, arr2_second, arr2_third],
        [arr2_fourth, arr2_fifth, arr2_sixth],
        [arr2_seventh, arr2_eighth, arr2_nineth]
    ]
    
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (!arr3[i]) arr3[i] = [];
            arr3[i][j] = (arr1[i][j]) + (arr2[i][j]);
            showResultDiv[count++].innerHTML = (arr1[i][j]) - (arr2[i][j]);
        }
    }

    console.log("arr1" , arr1);
    console.log("arr2" , arr2);
    console.log("arr3" , arr3);
    console.log("count", count);



    
    // console.log(arr1_first);    
    // console.log(arr1_second);    
    // console.log(arr1_third);    
    // console.log(arr1_fourth);    
    // console.log(arr1_fifth);    
    // console.log(arr1_sixth);    
    // console.log(arr1_seventh);    
    // console.log(arr1_eighth);    
    // console.log(arr1_nineth);    

    // console.log(arr2_first);    
    // console.log(arr2_second);    
    // console.log(arr2_third);    
    // console.log(arr2_fourth);    
    // console.log(arr2_fifth);    
    // console.log(arr2_sixth);    
    // console.log(arr2_seventh);    
    // console.log(arr2_eighth);    
    // console.log(arr2_nineth);    
}






