/**
 * This data will be inserted in twig templates,
 * You can use it like this: `{{ title }}`
 */

const data = {
	title: "Twig starter",

	posts: [
		{
			title: "First post",
			author: "John Doe",
			img: "blog1.jpg",
			excerpt: "Some small description.",
		},
		{
			title: "Second post",
			author: "John Doe",
			img: "blog2.jpg",
			excerpt:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad inventore laudantium optio illum laboriosam.",
		},
		{
			title: "Third post",
			author: "John Doe",
			img: "blog3.jpg",
			excerpt: "Ad inventore laudantium optio illum laboriosam.",
		},
		{
			title: "Fourth post",
			author: "John Doe",
			img: "blog4.jpg",
			excerpt: "Some small description.",
		},
		{
			title: "Fifth post",
			author: "John Doe",
			img: "blog5.jpg",
			excerpt: "Some small description.",
		},
	],
};

module.exports = data;
