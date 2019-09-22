import { Button } from '@wordpress/components';
import { useSelect, dispatch } from '@wordpress/data';

const ToggleSidebarButton = () => {
	const [ isSidebarOpened, toggleSidebar ] = useSidebarToggle();
	return (
		<Button isPrimary isDefault onClick={ toggleSidebar }>
			{ isSidebarOpened ? 'Close' : 'Open' } Sidebar
		</Button>
	);
};

const useSidebarToggle = () => {
	const isSidebarOpened = useSelect( ( select ) => select( 'core/edit-post' ).isEditorSidebarOpened() );
	const openSidebar = () => dispatch( 'core/edit-post' ).openGeneralSidebar( 'edit-post/block' );
	const closeSidebar = () => dispatch( 'core/edit-post' ).closeGeneralSidebar();
	const toggleSidebar = isSidebarOpened ? closeSidebar : openSidebar;

	return [ isSidebarOpened, toggleSidebar ];
};

export default ToggleSidebarButton;
