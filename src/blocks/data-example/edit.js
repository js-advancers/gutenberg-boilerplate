import ToggleSidebarButton from './components/toggleSidebarButton';

const edit = ( props ) => {
	const { attributes: { }, setAttributes } = props;

	return (
		<p>Hello World!<ToggleSidebarButton /></p>
	);
};

export default edit;
