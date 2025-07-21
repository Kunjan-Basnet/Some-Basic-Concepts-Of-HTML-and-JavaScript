<html>
<head>
<script type="text/javascript">
function insRow(){
let x=document.getElementById('myTable').insertRow(1);
let y=x.insertCell(0);
let z=x.insertCell(1);
let a=x.insertCell(2);
y.innerHTML="FOSP";
z.innerHTML="Open Source";
}
</script>
</head>
<body>
<table border="1" ID="myTable">
<tr>
<td>c++</td>
<td>OOP C++</td>
</tr>
<tr>
<td>c</td>
<td>c programming</td>
</tr>
</table>
<button type="button" onclick="insRow()">click</button>
</body>
</html>
