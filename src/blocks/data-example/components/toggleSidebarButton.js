import { Button } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const ToggleSidebarButton = ( {
	isSidebarOpened,
	openSidebar,
	closeSidebar,
} ) => {
	return (
		isSidebarOpened ? (
			<Button className="is-button is-primary" onClick={ closeSidebar }>
				Close Sidebar
			</Button>
		) : (
			<Button className="is-button is-primary" onClick={ openSidebar }>
				Open Sidebar
			</Button>
		)
	);
};

const toggleSidebarHOC = ( component ) => compose(
	withSelect( ( select ) => {
		return {
			isSidebarOpened: select( 'core/edit-post' ).isEditorSidebarOpened(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		return {
			openSidebar: () => dispatch( 'core/edit-post' ).openGeneralSidebar( 'edit-post/block' ),
			closeSidebar: () => dispatch( 'core/edit-post' ).closeGeneralSidebar(),
		};
	} )
)( component );

export default toggleSidebarHOC( ToggleSidebarButton );
