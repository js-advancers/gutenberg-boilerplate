// register a basic block that is just returning some plain html inside the edit and save method
const { registerBlockType } = wp.blocks;

registerBlockType('jsadvancers/html-block', {
	title: 'Basic HTML',
	description: 'Basic block that returns html',
	icon: 'smiley',
	attributes: {},
	category: 'common',

	edit: props => {
		return <p className={props.className}>Cheers - it works! 🥂</p>;
	},
	save: props => {
		return <p className={props.className}>Cheers - it works! 🥂</p>;
	}
});
