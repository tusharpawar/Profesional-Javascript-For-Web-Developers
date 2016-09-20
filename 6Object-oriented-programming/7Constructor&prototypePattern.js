<script>
function Person(name,age,job){
	this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["reshma","hemant"]
}

Person.prototype={
	constructor: Person,
    sayName:function(){
    	alert(this.name);
    }
};

var person1=new Person("tushar",21,"ASE");
var person2=new Person("pushkar",20,"ASE");

person1.friends.push("ragini");
alert(person1.friends);
alert(person2.friends);


</script>
