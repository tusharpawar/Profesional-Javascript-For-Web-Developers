<script>
function Person(){
}
    Person.prototype.name="Nicholas";
    Person.prototypeage=21;
    Person.prototype.job="SE";
    Person.prototype.sayName=function(){
    	alert(this.name);
    };


var person1=new Person();
person1.sayName();

var person2=new Person();
person2.sayName();
</script>
