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

export default compose(
	withSelect( ( select ) => {
		return {
			isSidebarOpened: select( 'core/edit-post' ).isEditorSidebarOpened(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { openGeneralSidebar, closeGeneralSidebar } = dispatch( 'core/edit-post' );

		return {
			openSidebar: () =>
				openGeneralSidebar( 'edit-post/block' ),
			closeSidebar: closeGeneralSidebar,
		};
	} )
)( ToggleSidebarButton );
