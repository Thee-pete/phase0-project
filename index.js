
function submit() {
    alert('Your message has been submitted. We will reply as soon as possible');
    }
    document.getElementById("submitBtn").addEventListener("click", submit);

 function hello() {
    alert('Visit my github page https://github.com/Thee-pete?tab=repositories');
    }
    document.getElementById("viewBtn").addEventListener("click", hello);
    $(document).ready(function(){
        $("form").submit(function(){
            alert("Your message has been submitted. We will reply as soon as possible");
        });
    });