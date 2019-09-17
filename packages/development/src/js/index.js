import "./vendor";

class ClassProp {
	static hello = async () => {
		fetch("https://rickandmortyapi.com/api/character")
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
	};
}

ClassProp.hello();
console.log("data");
