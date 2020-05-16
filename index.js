function pressed()
{
    $(".second-div").addClass("second-div-1");
    
    var a=["Delhi","delhi","DELHI"];

    var b=[0,0,0];


    // CHECKING CONDITION FOR FIRST QUESTION //

    if($(".answer-1").val() == a[0] || $(".answer-1").val() == a[1] || $(".answer-1").val() == a[2])
    {
        b[0]=0;
    }
    else
    {
        b[0]++;
    }

    

    //CHECKING CONDITION FOR SECOND QUESTION // 


    if($(".option-1:checked").val() == "Chandigarh" )
    {
        b[1]=0;
    }
    else
    {
        b[1]++;
    }


    // CHECKING CONDITION FOR THIRD QUESTION //

    if($(".option-2:checked").val() == "Lucknow")
    {
        b[2]=0;
    }
    else
    {
        b[2]++;
    }
    
    
    // CONDITIONS FOR THE SECOND DIVISION //

    if(b[0] == 0 && b[1] == 0 && b[2] == 0)
    {
        $(".heading-2").text("You got 3 correct.");
        $(".heading-2-2").text("Well Done Great Job!");
        $("img").addClass("images");
        $("img").attr("src","https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif");
    }
    else
    if(b[0] == 1 && b[1] == 1 && b[2] == 1) 
    {
        $(".heading-2").text("You got 0 correct.");
        $(".heading-2-2").text("You really need to do better.");
        $("img").addClass("images");
        $("img").attr("src","https://media.giphy.com/media/mkiWxPS0VznG0/giphy.gif");
    }
    else
    if((b[0] == 1 && b[1] == 0 && b[2] == 0) || (b[0] == 0 && b[1] == 1 && b[2] == 0)  || (b[0] == 0 && b[1] == 0 && b[2] == 1))
    {
        $(".heading-2").text("You got 2 Correct");
        $(".heading-2-2").text("VERY GOOD!");
        $("img").addClass("images");
        $("img").attr("src","https://media.giphy.com/media/tIeCLkB8geYtW/giphy.gif");
    }
    else
    {
        $(".heading-2").text("You got 1 correct");
        $(".heading-2-2").text("You need to do hard work");
        $("img").addClass("images");
        $("img").attr("src","https://media.giphy.com/media/oOCbcGBJjlXJL8imGO/giphy.gif");
    }




    
}