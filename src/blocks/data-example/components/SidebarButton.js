const { __ } = wp.i18n;
const { Button } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

const SidebarButton = ({ isSidebarOpen, openSidebar, closeSidebar
  }) => {

  return (

      isSidebarOpen ? (
        <Button
          className="is-button is-default"
          onClick={() => {
            closeSidebar();
            console.log("close");
          }}
        >
            {__('Close Sidebar', 'gutenberg-boilerplate')}
        </Button>
      ) : (
        <Button
          className="is-button is-default"
          onClick={() => {
            openSidebar();
            console.log("open")
          }}
          >
            {__('Open Sidebar', 'gutenberg-boilerplate')}
        </Button>
      )

  );
};


export default compose([
  withSelect(select => {
    return {
      isSidebarOpen: select('core/edit-post').isEditorSidebarOpened(),
    };
  }),
  withDispatch(dispatch => {
    return {
      openSidebar: () => dispatch('core/edit-post').openGeneralSidebar('edit-post/block'),
      closeSidebar: () => dispatch('core/edit-post').closeGeneralSidebar(),
    };
  })
])(SidebarButton);
