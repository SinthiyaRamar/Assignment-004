 var CapitalLetter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var smallLetter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var number=['1','2','3','4','5','6','7','8','9','0'];
 var specialCharacter=['!','@','#','$','%','^','&','*'];
 let showPassWord;
 let strengthvalue;
 let strengthbox1=document.getElementById("strengthBox1");
 let strengthbox2=document.getElementById("strengthBox2");
 let strengthbox3=document.getElementById("strengthBox3");
 let strengthbox4=document.getElementById("strengthBox4");



 document.addEventListener('DOMContentLoaded',function(){
    let password=document.getElementById("showPassword");
     let passwordValue="";
     let passwordlength=document.getElementById("length").value;
     var rangeValue=document.getElementById("length").value;
    var rangeText=document.getElementById("rangelength");
    rangeText.innerText=rangeValue;
    strengthvalue=document.getElementById("strengthValue");
    strengthvalue.innerText="STRONG";
    if(strengthvalue.innerText == "STRONG"){
        strengthBox1.style.backgroundColor="#99eda4";
        strengthBox2.style.backgroundColor="#99eda4";
        strengthBox3.style.backgroundColor="#99eda4";
        strengthBox4.style.backgroundColor="#99eda4";
        

    }
      
     for(let i=0; i<passwordlength; i++){
     
        var letters=[CapitalLetter,specialCharacter,number,smallLetter];
        var LettersRandom=Math.floor(Math.random()*letters.length);
        var letterlength=letters[LettersRandom].length;
        var letterArray=letters[LettersRandom];
        // console.log(letterlength);
        var characterRandom=Math.floor(Math.random()*letterlength);
        passwordValue+=letterArray[characterRandom];

    }
    showPassWord=document.getElementById("passwordText");
    showPassWord.innerText=passwordValue;

 });

function generatePassWord(){
    
    let passwordLength=document.getElementById("length").value;
    var passwordvalues="";
    var str=0;
 
        // console.log(passwordLength);
        var checkBox1=document.getElementById("checkbox1").checked;
        var checkBox2=document.getElementById("checkbox2").checked;
        var checkBox3=document.getElementById("checkbox3").checked;
        var checkBox4=document.getElementById("checkbox4").checked;
    
        var Letters=[];
      
        
        if(checkBox1){
          Letters.push(CapitalLetter);
             str+=1;
        }
        if(checkBox2){
            Letters.push(smallLetter);
            str+=1;
       }
       if(checkBox3){
        Letters.push(number);
        str+=1;
       }
       if(checkBox4){
         Letters.push(specialCharacter);
         str+=1;
       }
       if(str==4){
        strengthvalue=document.getElementById("strengthValue");
        strengthvalue.innerText="STRONG";
        strengthBox1.style.backgroundColor="#99eda4";
        strengthBox2.style.backgroundColor="#99eda4";
        strengthBox3.style.backgroundColor="#99eda4";
        strengthBox4.style.backgroundColor="#99eda4";
       }

       if(str==3){
        strengthvalue=document.getElementById("strengthValue");
        strengthvalue.innerText="MEDIUM";
        strengthBox1.style.backgroundColor="#F8CD65";
        strengthBox2.style.backgroundColor="#F8CD65";
        strengthBox3.style.backgroundColor="#F8CD65";
        strengthBox4.style.backgroundColor="#18171F";
       }
   
       if(str==2){
        strengthvalue=document.getElementById("strengthValue");
        strengthvalue.innerText="WEAK";
        strengthBox1.style.backgroundColor="#FB7C58";
        strengthBox2.style.backgroundColor="#FB7C58";
        strengthBox3.style.backgroundColor="#18171F";
        strengthBox4.style.backgroundColor="#18171F";
       }
       
       if(str==1){
        strengthvalue=document.getElementById("strengthValue");
        strengthvalue.innerText="TOOWEAK";
        strengthBox1.style.backgroundColor="#F64A4A";
        strengthBox2.style.backgroundColor="#18171F";
        strengthBox3.style.backgroundColor="#18171F";
        strengthBox4.style.backgroundColor="#18171F";
       }

       for(let j=0; j<passwordLength; j++){
       var LettersRandomValue=Math.floor(Math.random()*Letters.length);
       var letterLength=Letters[LettersRandomValue];
    //    console.log(letterLength);
    //    console.log(Letters[LettersRandomValue]);
         letterLength=letterLength.length;
        
       var LetterArray=Letters[LettersRandomValue];
       // console.log(letterlength);
       var characterRandom=Math.floor(Math.random()*letterLength);

       passwordvalues+=LetterArray[characterRandom];
             console.log(passwordvalues)
    }

    showPassWord=document.getElementById("passwordText");
    showPassWord.innerText="";
    showPassWord.innerText=passwordvalues;
}function rangeValue(){
    var rangeValue=document.getElementById("length").value;
    var rangeText=document.getElementById("rangelength");
    rangeText.innerText=rangeValue;
    console.log(rangeValue);
}
function copy(){
    navigator.clipboard.writeText(showPassWord.innerText);
}