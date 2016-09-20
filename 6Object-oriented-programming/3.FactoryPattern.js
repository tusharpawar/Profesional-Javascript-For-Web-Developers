<script>
function createPerson(name,age,job){
	var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
    	alert(this.name);
    };
    return o;
}

var person1=createPerson("tushar",21,"ASE");
var person2=createPerson("reshma",24,"SE");
person1.sayName();
person2.sayName();
</script>
