<script>
var colors=["red","blue","green"];
alert(colors[0]);
colors[2]="black";  //will overide green
colors[3]="brown";  //add extra element

alert(colors.length);

colors.length=2;   //can set length , it atomatically deletes extra element
alert(colors[2])   //undefined
alert("after setting length:"+colors.length);

</script>
