<script>
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
    	alert(this.name);
    };
}

var person1=new Person("tushar",21,"ASE");
var person2=new Person("reshma",24,"SE");
person1.sayName();
person2.sayName();
</script>
