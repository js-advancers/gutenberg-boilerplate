import { useSelect, useDispatch } from '@wordpress/data';

const edit = ( props ) => {
	const { attributes: { }, setAttributes } = props;

	const isSidebarOpened = useSelect( ( select ) => ( select( 'core/edit-post' ).isEditorSidebarOpened() ) );
	const dispachStuff = useDispatch( ( dispatch ) => {
		debugger;
		const { getBlockSelectionStart } = select( 'core/editor' );
		const { openGeneralSidebar, closeGeneralSidebar } = dispatch( 'core/edit-post' );

		return {
			openSidebar: () =>
				openGeneralSidebar( getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document' ),
			closeSidebar: () => closeGeneralSidebar,
		};
	} );

	console.log( isSidebarOpened );
	console.log( dispachStuff );
	return (
		<p>Hello World!</p>
	);
};

export default edit;
