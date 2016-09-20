<script>
	function Person(){

	}

	Person.prototype={
		constructor:Person,
		name:"Tushar",
		age:21,
		job:"SE",
		friends:["reshma","hemant"],
		sayName:function(){
			alert(this.name)
		}
	};

	var person1=new Person();
	var person2=new Person();

	person1.friends.push("ragini");

	alert(person1.friends);
	alert(person2.friends);
</script>
