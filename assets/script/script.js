
$(document).ready(function(){

    // Welcome Message
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if(hourNow > 18){
        greeting = "Good Evening, ";
    } else if (hourNow > 12){
        greeting = "Good Afternoon, ";
    } else if (hourNow > 0){
        greeting = "Good Morning, ";
    } else {
        greeting = "Welcome, ";
    }

    $(".welcome").prepend(greeting);


//**************************************** FEEDING GUIDE
    // Global variables

    let gend, neutCheck, proteinNeeds2, dpnString, weightString, exe2, dpnString2;


       /*(unsure where this is used)>>if(exe2 > 0){
            $("#exeFinalMsg").show();
        }else{
            $("#exeFinalMsg").hide();
        }*/
    
    
        $("#guide").hide();
        $("#hideShowGender").hide();
    
        $("#showGuide").on("click", function(){
            $("#guide").toggle();
        });

        $("#socialGuide").on("click", function(){
            $("#guide").toggle();
        });

    // Reset forms       
        $("#formReset").on("click", function(){
            $("#genderMsg").hide();
            $("#hideShowGender").hide();
            $("#et").hide();
            $("#neuteredMsg").hide();
            //NOTE: tried resetting name value (#pName) to 0 on click to avoid adding the below commands.
            $("#weightName").text(`How much does your puppers weigh? `);
            $("#basedOnInputsoFar").text(`Base on your input so far, your pupper's daily protein needs are : `);
            $("#etInputSoFar").text(`Using your input so far, your pupper's daily excercise needs are :`);
            $("#neuteredGivenName").text(`Is your puppers neutered? `);
            $("#givenNameFinal").text(`Looks your puppers will need : `);
            $("#bagName").text(`How big is your pupper's food bag? `);
            $("#proteinRangeName").text(`What's the protein range of your pupper's food? `);
            $("#onOff").text(`Is your puppers walked on or off leash ? `); //ARE WE USING THIS ???
        });

    // Updating pet name
    $(document).on("blur", "#pName", function(){
        let givenName = $("#pName").val();

        if(givenName.length > 0){
            $("#basedOnInputsoFar").text(`Based on your input so far, `+ givenName +`'s daily protein needs are : `);
        }else{
            $("#basedOnInputsoFar").text(`Base on your input so far, your pupper's daily protein needs are : `);
        }

        if(givenName.length > 0){
            $("#etInputSoFar").text(`Using your input so far, `+ givenName +`'s daily excercise needs are :`);
        }else{
            $("#etInputSoFar").text(`Using your input so far, your pupper's daily excercise needs are :`);
        }

        if(givenName.length > 0){
            $("#neuteredGivenName").text(`Is `+ givenName + ` neutered ? `);
        }else{
            $("#neuteredGivenName").text(`Is your Puppers neutered ? `);
        }

        if(givenName.length > 0){
            $("#givenNameFinal").text(`Looks like `+ givenName + ` will need : `);
        }else{
            $("#givenNameFinal").text(`Looks your puppers will need : `);
        }

        if(givenName.length > 0){
            $("#weightName").text(`How much does `+ givenName + ` weigh ? `);
        }else{
            $("#weightName").text(`How much does your puppers weigh ? `);
        }

        if(givenName.length > 0){
            $("#bagName").text(`How big is `+ givenName + `'s' food bag ? `);
        }else{
            $("#bagName").text(`How big is your pupper's food bag ? `);
        }

        if(givenName.length > 0){
            $("#proteinRangeName").text(`What's the protein range of `+ givenName + `'s' food ? `);
        }else{
            $("#proteinRangeName").text(`What's the protein range of your pupper's food ? `);
        }
        if(givenName.length > 0){
            $("#onOff").text(`Is `+ givenName + ` walked on or off leash ? `);
        }else{
            $("#onOff").text(`Is your puppers walked on or off leash ? `);
        }
    }); 

    // GENDER SCRIPT
    $(document).on( "change", '.genderOptions', function(){
        let gendmsg;
        gend =$(' #gender option:selected ').attr("id");
        
        if(gend === "noChoiceGender"){
            gendmsg = " ";
            $("#genderMsg").removeClass().addClass("genderOptions");
            $("#hideShowGender").hide();
        } else if(gend === "male"){
            gendmsg = "Oh who's a good boy !";
            $("#genderMsg").removeClass().addClass("blue");
            $("#hideShowGender").show();
            $("#pNameQuestion").text("What's his name ?");
        } else if (gend === "female"){
            gendmsg = "Oh who's a good girl !";
            $("#genderMsg").removeClass().addClass("customPurpleDark");
            $("#hideShowGender").show();
            $("#pNameQuestion").text("What's her name ?");
        }else { 
            gendmsg = "Not working ";           
        }

        $("#genderMsg").text(gendmsg);
        
    });

    //NEUTERED SCRIPT
    $(document).on( "change", '.neuteredOptions', function(){
        let neutmsg, neut;
        neut =$(' #neutered option:selected ').attr("id");
        gend =$(' #gender option:selected ').attr("id");
        
        
        if(neut === "noChoiceNeutered"){
        neutmsg = " ";
        $("#neuteredMsg").removeClass().addClass("neuteredOptions");
        } else if(neut === "yesNeutered" && gend === "male"){
            neutmsg = `It's much healthier for him.`;
            $("#neuteredMsg").removeClass().addClass("blue");
        }else if(neut === "yesNeutered" && gend === "female"){
            neutmsg = `It's much better for her.`;
            $("#neuteredMsg").removeClass().addClass("customPurpleDark");
        }else if (neut === "yesNeutered"){
            neutmsg = `Great Stuff, it's much better for them.`; 
            $("#neuteredMsg").removeClass().addClass("green");
        }else if (neut === "noNeutered"){
            neutmsg = "You should really consider neutering.";
            $("#neuteredMsg").removeClass().addClass("red");
        }else { 
            neutmsg = "Not working ";
            
        }
        $("#neuteredMsg").text(neutmsg);

    });

    // WEIGHT SCRIPT 1
    $(document).on( "change", '.weightOptions', function(){
    let wtmsg, weig;
    weig =$(' #weight option:selected ').attr("id");

    if(weig === "noChoiceWeight"){
        wtmsg = " ";
    $("#weightmsg").removeClass().addClass("weightOptions");
    } else if(weig === "small"){
        wtmsg = "Such a little puppers !";
        $("#weightmsg").removeClass().addClass("blue");
    } else if (weig === "medium"){
        wtmsg = "Sounds like a Scamp !";
        $("#weightmsg").removeClass().addClass("green");
    }else if (weig === "large"){
        wtmsg = "More of them to cuddle !";
        $("#weightmsg").removeClass().addClass("blue");
    }else if (weig === "xLarge"){
        wtmsg = "You've got a bear on your hands !";
        $("#weightmsg").removeClass().addClass("green");
    }else { 
        wtmsg = "not working";       
    }
    $("#weightmsg").text(wtmsg);

    });

    // DAILY PROTEIN NEEDS 
    $(document).on("change", ".weightOptions", function(){
        let proteinNeeds1, dpnMsg;
        proteinNeeds1 = $(" #weight option:selected").val();
        neutCheck = $(' #neutered option:selected ').attr("id");
        dpnString= $("#weight2").val().length;
        

        if(neutCheck === "yesNeutered" && dpnString > 0 && proteinNeeds1 > 0 ){
            proteinNeeds2 = (parseFloat(proteinNeeds1) * .9);
            dpnMsg = ` (Neutering decreases food by 10% ! )`;
            $("#dpn").removeClass().addClass("green");
        }else if(neutCheck === "noNeutered" && dpnString > 0 && proteinNeeds1 > 0 ){
            proteinNeeds2 = parseFloat(proteinNeeds1) ;
            dpnMsg = ` (Neutering would reduce food by 10% ! )`;
            $("#dpn").removeClass().addClass("red");
        }else{
            proteinNeeds2 = parseFloat(proteinNeeds1);
            dpnMsg = " ";
            $("#dpn").removeClass();
        }

        $("#weight2").val( proteinNeeds2 + ` %`);
        $("#dpn").text(dpnMsg);

    });
    
    //GRAMS PER DAY
    $(document).on("change", ".proteinOptions", function(){
        let bag, protein, needsTotal, needsTotalMsg;
        bag = $("#weight3 option:selected").val();
        protein = $("#weight4 option:selected").val();
        needsTotalMsg = " grams of your food brand per day";
        dpnString= $("#weight2").val().length;
        weightString =$(' #weight option:selected ').val();
        
        if(bag > 0 && protein > 0 && dpnString > 0 && weightString >0 ){
        needsTotal = ((parseFloat(bag) * parseFloat(protein)) * proteinNeeds2);
        }else{
            needsTotal = " " ;
            needsTotalMsg = " ";
        }

        $("#weight5").text(needsTotal + needsTotalMsg);

    });
//**************************************** EXCERCISE GUIDE

//EXCERCISE TIME
$(document).on("change", ".weightOptionsET", function(){
    let proteinNeeds1, etMsg;
    proteinNeeds1 = $(" #weight option:selected").val();
    neutCheck = $(' #neutered option:selected ').attr("id");
    dpnString2= $("#weightET").val().length;
    

    if(neutCheck === "yesNeutered" && dpnString2 > 0 && proteinNeeds1 > 0 ){
        exe2 = (parseFloat(proteinNeeds1) * .9);
        etMsg = ` (Neutering has decreased excercise by 10% ! )`;
        $("#et").removeClass().addClass("green");
    }else if(neutCheck === "noNeutered" && dpnString2 > 0 && proteinNeeds1 > 0 ){
        exe2 = parseFloat(proteinNeeds1) ;
        etMsg = ` (Neutering would reduce excercise by 10% ! )`;
        $("#et").removeClass().addClass("red");
    }else{
        exe2 = parseFloat(proteinNeeds1);
        etMsg = " ";
        $("#et").removeClass();
    }

    $("#weightET").val( exe2 + ` mins twice per day`);
    $("#et").text(etMsg);

});

//******************************* CONTACT FORM


//clear form
 $("#SubmitButton").on("blur", function(){
     $('#contactForm').find("input[type=text]").val("");
     $('#contactForm').find("input[type=email]").val("");
 });


});