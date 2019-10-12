import { ToggleControl } from '@wordpress/components';
import { useSelect, dispatch } from '@wordpress/data';

// This toggle opens or closes the sidebar on the editor

const ToggleSidebarControl = () => {
	const [ isSidebarOpened, toggleSidebar ] = useSidebar();

	return (
		<ToggleControl
			label="Open Sidebar"
			checked={ isSidebarOpened }
			onChange={ toggleSidebar }
		/>
	);
};

const useSidebar = () => {
	const isSidebarOpened = useSelect( ( select ) =>
		select( 'core/edit-post' ).isEditorSidebarOpened()
	);
	const openSidebar = () =>
		dispatch( 'core/edit-post' ).openGeneralSidebar( 'edit-post/block' );
	const closeSidebar = () => dispatch( 'core/edit-post' ).closeGeneralSidebar();
	const toggleSidebar = isSidebarOpened ? closeSidebar : openSidebar;
	return [ isSidebarOpened, toggleSidebar ];
};

export default ToggleSidebarControl;
