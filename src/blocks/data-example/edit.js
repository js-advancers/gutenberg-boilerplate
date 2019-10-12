import ToggleSidebarControl from './components/toggleSidebarControl';

const edit = ( props ) => {
	const {
		attributes: { },
	} = props;

	return (
		<p>
            Hello World!<ToggleSidebarControl />
		</p>
	);
};

export default edit;
