<script>

function add(c,d){
	 total=c+d;
    return total;
}

var result=add(10,20);
alert(total); // total is global varriable as it is declared without var

function add(a,b){
	var sum=a+b;
    return sum;
}

var result=add(10,20);
alert(sum); // causes an error sum is not defined bcoz sum is local to function




</script>
