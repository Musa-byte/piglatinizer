$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("button").click(function(){
        $(".output").text("");
        var sentence =$(".input").val();
        var words = sentence.split(' ');
        var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
        words.forEach(function(word){
            var firstLetter=word[0].toLowerCase();
            if (vowels.includes(firstLetter)) {
                console.log(true);
                var vowelWord= word + "ay ";
                $('.output').append(vowelWord);
            }
            else(vowels.includes(firstLetter))
                  console.log(false);


        });



    });


});
