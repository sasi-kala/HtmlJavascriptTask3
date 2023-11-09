 

 const inputtext = document.getElementById("input-text").value; 

 const button = document.getElementById("btn").addEventListener("click",
function(){
    var string = document.getElementById("input-text").value;
    palindrome(string);
}
);


function palindrome(string)
        {
            const splitarr = string.split('');

            const revArr = splitarr.reverse();

            const revString = revArr.join('');

            if(string == 0)
            {
                document.getElementById("result").innerHTML = "Enter a valid Word";
            }

             else if(string == revString)
            {
                document.getElementById("result").innerHTML = "<i>Yes</i>. It is a palindrome!";
            }
            else
            {
                document.getElementById("result").innerHTML = "<i>No</i>. It is not a Palindrome";
            }
            
        }

       
        