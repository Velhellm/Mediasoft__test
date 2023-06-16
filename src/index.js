import './styles/index.scss';

const userStack = {
	language: 'JavaScript',
	framework: 'Angular'
}

const user = {
	name: 'Alexey',
	age: '43',
	...userStack
}

console.log(user)