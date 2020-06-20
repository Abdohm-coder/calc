$(function(){

    $("#9").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 9;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 9;
        }
    });
    $("#8").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 8;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 8;
        }
    });
    $("#7").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 7;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 7;
        }
    });
    $("#6").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 6;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 6;
        }
    });
    $("#5").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 5;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 5;
        }
    });
    $("#4").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 4;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 4;
        }
    });
    $("#3").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 3;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 3;
        }
    });
    $("#2").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 2;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 2;
        }
    });
    $("#1").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 1;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 1;
        }
    });
    $("#0").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += 0;
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + 0;
        }
    });
    $("#dot").click(function(){
        if(document.clac.textview.value == ""){
            document.clac.textview1.value += ".";
        }else{
            document.clac.textview.value = "";
            document.clac.textview1.value = "" + ".";
        }
    });

    //--------------------------------------

    $("#sup").click(function (){
        var exp = document.clac.textview1.value;
        document.clac.textview1.value = exp.substring(0, exp.length-1);
    });
    $("#plus").click(function(){
        if(document.clac.textview.value == "" || document.clac.textview.value == "undefined"){
            document.clac.textview1.value += "+";
        }else{
            document.clac.textview1.value = document.clac.textview.value + "+";
            document.clac.textview.value = "";
        }
    });
    $("#mins").click(function(){
        if(document.clac.textview.value == "" || document.clac.textview.value == "undefined"){
            document.clac.textview1.value += "-";
        }else{
            document.clac.textview1.value = document.clac.textview.value + "-";
            document.clac.textview.value = "";
        }
    });
    $("#moins").click(function(){
        if(document.clac.textview.value == "" || document.clac.textview.value == "undefined"){
            document.clac.textview1.value += "*";
        }else{
            document.clac.textview1.value = document.clac.textview.value + "*";
            document.clac.textview.value = "";
        }
    });
    $("#sur").click(function(){
        if(document.clac.textview.value == "" || document.clac.textview.value == "undefined"){
            document.clac.textview1.value += "/";
        }else{
            document.clac.textview1.value = document.clac.textview.value + "/";
            document.clac.textview.value = "";
        }
    });
    $("#delete").click(function(){
        document.clac.textview1.value = "";
        document.clac.textview.value = "";
        
    });

    //-----------------------------
    var count = 0;
    $("#sum").click(function() {
        try{
            console.log(document.clac.textview1.value);
        }
        catch(error){
            alert("can't");
        }
        if(document.clac.textview1.value == ""){
            document.clac.textview.value = "0";
        }else{
        document.clac.textview.value = eval(document.clac.textview1.value);
        if(document.clac.textview.value !== "" && document.clac.textview.value !== "undefined"){
            count += 1;
        }
        console.log(count);
    }
    });

    //-------------------------------

    $("#scientific").click(function(){
        $(this).css({
            transform: 'scale(1.08)'
        });
        $("#standard").css({
            transform: 'scale(1)'
        });
        $(".calc").animate({
            width:'310px'
        });
        $(".fa").show();
    });
    $("#standard").click(function(){
        $(this).css({
            transform: 'scale(1.08)'
        });
        $("#scientific").css({
            transform: 'scale(1)'
        });
        $(".calc").animate({
            width:'250px'
        });
        $(".fa").hide();
    });

    //--------------------------------

    $("#cos").click(function(){
        document.clac.textview.value = Math.cos(document.clac.textview1.value);
    });
    $("#sin").click(function(){
        document.clac.textview.value = Math.sin(document.clac.textview1.value);
    });
    $("#tan").click(function(){
        document.clac.textview.value = Math.tan(document.clac.textview1.value);
    });
    $("#x").click(function(){
        document.clac.textview.value = Math.pow(document.clac.textview1.value, 2);
    });
    $("#surr").click(function(){
        if(document.clac.textview.value == 0){
            document.clac.textview.value = "لا يمكن القسمة على 0";
        }else{
        document.clac.textview.value = 1/ document.clac.textview1.value;
    }
    });  
});
