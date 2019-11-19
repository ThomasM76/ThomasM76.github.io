function open_bar()
{
    document.getElementById('sidebar').style.width = "22em";
    document.getElementById('button_sidebar').style.marginLeft = "22em";
    document.getElementById('button').onclick = close_bar;
    document.getElementById('button').src = "https://imgur.com/xlivtO9.png";
}

function close_bar()
{
    document.getElementById('sidebar').style.width = "0";
    document.getElementById('button_sidebar').style.marginLeft = "0";
    document.getElementById('button').onclick = open_bar;
    document.getElementById('button').src = "https://imgur.com/V4OMgPG.png";
}