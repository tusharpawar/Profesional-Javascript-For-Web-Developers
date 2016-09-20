<script>
function Person(name,age,job){
	this.name=name;
    this.age=age;
    this.job=job;
    
    //methods
    if(typeof this.sayName != "function"){
    	Person.prototype.sayName=function(){
        	alert(this.name);
        };
    }
}

var friend=new Person("pushkar",21,"ASE");
friend.sayName();


</script>
