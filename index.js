
content = ""
AllButtons = document.querySelectorAll('button')
input = document.getElementById('input')

// Accessing all the buttons in the calci
for(let button = 0; button < AllButtons.length ; button++){
        //Target individual Buttons
        document.querySelectorAll('button')[button].addEventListener('click',function(){
                text = this.innerHTML
                checkButton(text)     
        });

}

const checkButton = (text) => {

      // Doing Every task based on the type of the buttons.
      if(text === 'C')
         content = ""
      
      else if(text === 'X')
        content = content.slice(0,content.length-1)
      
      else if(text === '.' && content != ''){
        let last = content.charAt(content.length-1)
          if( last >= '0' && last <= '9')
             content += "."
      }

      else if(text.charAt(0) >= '0' && text.charAt(0) <= '9')
         content += text

      else if(text !== '='){
        operators = ['/','*','-','+','%']
        if(operators.includes(text) && content != '' ){
            last = content.charAt(content.length-1)
            if(!operators.includes(last) && last !== '.')
               content += text

            else
              content = content.slice(0,content.length-1) + text
         }
    }

    
    else if(text == '='){
         if(content === ''){
            alert('Enter some Calculations')
             return;}
          let finalValue = eval(content)
          content = finalValue + ""


    }
     
    else{
        alert('Something went wrong!\nRefresh the page')
    }
       input.value = content
         
}
















  