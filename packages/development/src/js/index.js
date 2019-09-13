import "./vendor";

const pepe = "pepe";

class ClassProp {
	static hello = () => {
		console.log(pepe);
	};
}

console.log(ClassProp.hello());
