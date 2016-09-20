<script>
function addTen(num){
	num+=10;
    return num;
}

var count=20;
var result=addTen(count);
alert("count:"+count);
alert("result:"+result);


function setName(obj){
	obj.name="Nicholas";
    
}
var person=new Object();
setName(person);
alert("Person:"+person.name);
</script>
