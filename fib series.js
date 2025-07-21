<html>
<head>
<script type="text/javascript">
function fun()
{var a=document.getElementById('demo').value;
var d=0;
var e=1;
var f;
var x=0;
for(var i=1;i<=a;i++)
{f=d+e;
d=e;
e=f;
x=x+" "+d;
}
 document.getElementById('memo').value=x;
}
</script>
</head>
<body>
<form>
<input type="text" id="demo" size="40" placeholder="enter no. of series" ><br>
<input type="text" id="memo" size="40" placeholder="result of fib series appear here">
</form>
<button type="button" onclick="fun()">click</button>
</body>
</html>