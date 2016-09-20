<script>
function factorial(num){
	if(num<=1){
    	return 1;
    }
    else{
    	return num*arguments.callee(num-1);
	}
}

alert(factorial(3));
</script>
