
    

    function confi(){
        let name = document.getElementById('name').value ;
        let phone = document.getElementById('phone').value ;
        let email = document.getElementById('email').value ;
        
        
        if (name === "" || phone === "" || email === "") {
            document.getElementById('error-message').style.display = "block"; //Display the error message
            return false; // Cancelled the submission

        } else {
            return true; // Autorized the submission
        }

        }


        document.querySelector('.submit').addEventListener('click', function() {
            if (confi()) {
                // Redirect to a new  page
                window.location.href = "confirmation.html";
            }
            });


   

            //CLOSE FUNCTION

            function closeFunc(){
                window.location.href="home.html"
            }