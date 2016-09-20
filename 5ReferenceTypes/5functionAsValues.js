<script>
function getGreetings(name){
	return "hello "+name;
}
function Callsomefunction(name,value){
	return name(value);
}

var res=Callsomefunction(getGreetings,"tushar");
	alert(res);

</script>
