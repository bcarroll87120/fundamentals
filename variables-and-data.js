let obj = {
	key1: "value",
	key2: 3,
	boolean: true,
	obj2: {
		obj2key1: "value of inner object",
	},
};

console.log(obj.obj2.obj2key1);