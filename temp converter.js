<html>
<head>
<script type="text/javascript">
function myfunc(degree)
{var ce=document.getElementById('d');
var fe=document.getElementById('e');
if(degree=="c")
{q=9*ce.value/5+32;
fe.value=q;
}
else
{w=(fe.value-32)*5/9;
ce.value=w;
}
}
</script>
</head>
<body>
<form>
<input type="text" id="d" onkeyup="myfunc('c')"><label>degree centigrade</label><br>convert<br>
<input type="text" id="e" onkeyup="myfunc('z')"><label>degree farenheit</label>
</form>
</body>
</html>