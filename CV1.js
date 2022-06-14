var languages = 0;
var skill = 0;
var exp = 0;
var edu = 0;
function edit()
{
    document.getElementById("input_form_div").style.display = "inline-block";
}

//=========================================================================

function check_lang()
{
    languages = document.getElementById("lang_num").value;
    if (languages>=6 || languages<=0)
    {
        document.getElementById("lang_error").innerHTML = "There Must Be languages 1-5";
        document.getElementById("lang_ok").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("lang_error").innerHTML = "";
        document.getElementById("lang_ok").style.visibility = "visible";
    }
}

function make_languages()
{
    let counter = 0;
    let x = document.getElementById("lang");
    
    let row = "<li style='font-family: Georgia;font-size: 15px'>Enter "+languages+" Language/Languages: </li></ br>";   
    x.innerHTML+=row;

    for (counter = 0; counter < languages; counter++)
    {
        row = "<li><input type='text' id='lang" + counter + "' /></li>";
        x.innerHTML+=row;
    }

    document.getElementById("lang_ok").style.display = "none";
}

//=======================================================

function check_skill()
{
    skill = document.getElementById("skill_num").value;
    if (skill>=6 || skill<=0)
    {
        document.getElementById("skill_error").innerHTML = "There Must Be Skills 1-5";
        document.getElementById("skill_ok").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("skill_error").innerHTML = "";
        document.getElementById("skill_ok").style.visibility = "visible";
    }
}

function make_skill()
{
    let counter = 0;
    let x = document.getElementById("skill");
    
    let row = "<li style='font-family: Georgia;font-size: 15px'>Enter "+skill+" Skill/Skills: </li>";   
    x.innerHTML+=row;

    for (counter = 0; counter < skill; counter++)
    {
        row = "<li><input type='text' id='skill" + counter + "' /></li></ br>";   
        x.innerHTML+=row;
    }

    document.getElementById("skill_ok").style.display = "none";
}

//=======================================================

function check_exp()
{
    exp = document.getElementById("exp_num").value;
    if (exp>=6 || exp<=0)
    {
        document.getElementById("exp_error").innerHTML = "There Must Be Experiences 1-5";
        document.getElementById("exp_ok").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("exp_error").innerHTML = "";
        document.getElementById("exp_ok").style.visibility = "visible";
    }
}

function make_exp()
{
    let counter = 0;
    let x = document.getElementById("exp");
    
    let row = "<li style='font-family: Georgia;font-size: 15px'>Enter "+exp+" Experience/Experiences: </li>";   
    x.innerHTML+=row;

    for (counter = 0; counter < exp; counter++)
    {
        row = "<li><input type='text' id='exp" + counter + "' /></li></ br>";   
        x.innerHTML+=row;
    }

    document.getElementById("exp_ok").style.display = "none";
}

//=======================================================

function check_edu()
{
    edu = document.getElementById("edu_num").value;
    if (edu>=6 || edu<=0)
    {
        document.getElementById("edu_error").innerHTML = "There Must Be Educations 1-5";
        document.getElementById("edu_ok").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("edu_error").innerHTML = "";
        document.getElementById("edu_ok").style.visibility = "visible";
    }
}

function make_edu()
{
    let counter = 0;
    let x = document.getElementById("edu");
    
    let row = "<li style='font-family: Georgia;font-size: 15px'>Enter "+edu+" Education/Educations: </li>";   
    x.innerHTML+=row;

    for (counter = 0; counter < edu; counter++)
    {
    
        row = "<li><input type='text' id='edu" + counter + "' /></li></ br>";   
        x.innerHTML+=row;
    }

    document.getElementById("edu_ok").style.display = "none";

}


function reset()
{
    document.getElementById("input_form_div").style.display = "none";
}

function fillCv()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("add").value;
    var phone = document.getElementById("phn").value;
    var email = document.getElementById("eml").value;
    var summary = document.getElementById("summary").value;
    var lang = [];
    var skills = [];
    var education = [];
    var experience = [];
    for (var i = 0; i < languages; i++)
    {
        lang[i]=document.getElementById("lang" + i).value;
    }
    for (var i = 0; i < skill; i++)
    {
        skills[i]=document.getElementById("skill" + i).value;
    }
    for (var i = 0; i < edu; i++)
    {
        education[i]=document.getElementById("edu" + i).value;
    }
    for (var i = 0; i < exp; i++)
    {
        experience[i]=document.getElementById("exp" + i).value;
    }

    document.getElementById("firstname").innerHTML = fname;
    document.getElementById("lastname").innerHTML = lname;
    document.getElementById("address").innerHTML = address;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("summary_para").innerHTML = summary;
    for (var i = 0; i < languages; i++)
    {
        if (i == 0)
        {
            document.getElementById("lang_list").innerHTML = "<li>" + lang[i] + "</li>";
        }
            
        else
        {
            document.getElementById("lang_list").innerHTML += "<li>" + lang[i] + "</li>";
        }    
    }

    for (var i = 0; i < skill; i++)
    {
        if (i == 0)
        {
            document.getElementById("skills_list").innerHTML = "<li>" + skills[i] + "</li>";    
        }
        
        else
        {
            document.getElementById("skills_list").innerHTML += "<li>" + skills[i] + "</li>";
        }
        
    }
    for (var i = 0; i < exp; i++)
    {
        if (i == 0)
        {
            document.getElementById("exp_list").innerHTML = "<li>" + experience[i] + "</li>";    
        } 
        
        else
        {
            document.getElementById("exp_list").innerHTML += "<li>" + experience[i] + "</li>";
        }
        
    }

    for (var i = 0; i < edu; i++)
    {
        if (i == 0)
        {
            document.getElementById("edu_list").innerHTML = "<li>" + education[i] + "</li>";
        }
         
        else
        {
            document.getElementById("edu_list").innerHTML += "<li>" + education[i] + "</li>";    
        }
    }
    

    
    document.getElementById("input_form_div").style.display = "none";
}