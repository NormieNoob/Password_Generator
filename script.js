
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const complex_pas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const spl_char = '!@#$%^&*';
 
function perform(){
    if(document.getElementById('output')){
        document.getElementById('output').remove();
    }
    var len = document.getElementById('len').value;
    var level = document.getElementById('level').value;
    var pas = '';
    if(level == 0)
    {
        document.getElementById('errorlevel').innerHTML = '*Choose the level of complexity';
    }
    else if(level == 2)
    {
        document.getElementById('errorlevel').innerHTML = '';
        for (i=0;i<len;i++)
        {
            n=characters.length;
            pas += characters.charAt(Math.floor(Math.random()* n+1));
        }
    }
    else if (level == 3)
    {
        var check = false;
        document.getElementById('errorlevel').innerHTML = '';
        while (check==false){
            pas=''
            for (i=0;i<len;i++)
            {
                n=complex_pas.length;
                pas += complex_pas.charAt(Math.floor(Math.random()* n+1));
            }
            check = pas.split('').some(element => uppercase.includes(element)) && pas.split('').some(element => lowercase.includes(element)) && pas.split('').some(element => num.includes(element)) && pas.split('').some(element => spl_char.includes(element))
        }
    }

    var txt = document.createTextNode(pas)
    var h2 = document.createElement('h2');
    h2.setAttribute('id', 'output');
    h2.appendChild(txt);
    document.getElementById('print').appendChild(h2);
}

