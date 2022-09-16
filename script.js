   //^<button id="add">+</button>
    //^<button id="subtract">-</button>
    //^<button id="mult-2">x2</button>
    //^<button id="div-2">/2</button>
    //^<button id="mult-5">x5</button>
    //^<button id="div-5">/5</button>

        //^ Create a new variable called 'total' and assign it the div with the id of 'total'

        const total = document.getElementById('total')
        const plus = document.getElementById('add')
        const subt = document.getElementById('subtract')
        const x2 = document.getElementById('mult-2')
        const Div2 = document.getElementById('/2')
        const x5 = document.getElementById('mult-5')
        const div5 = document.getElementById('/5')

        //& 
        //^Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5) // Example:    //   function add(){
        //^ update the value of the total variable textContent
        //^ use an alert to alert the user

        // ^ Attach Functions to Buttons
        //^ creating a pad
        function display(val){

            document.getElementById('result').value += val
        
            return val
        
        }
        function solve(){

            let x = document.getElementById('result').value
        
            let y = eval(x);
        
            document.getElementById('result').value = y
        
            return y
        
        }
        function clearScreen(){

            document.getElementById('result').value = ''
        
        }

        






