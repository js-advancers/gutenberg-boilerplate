const { __ } = wp.i18n;
import SidebarButton from './components/SidebarButton';

const edit = ( props ) => {

  const { className } = props;

	const { attributes: { }, setAttributes } = props;

	return (
    <div className={className}>
      <p>{__('Karen Data Block', 'gutenberg-boilerplate')}</p>
      <SidebarButton />
    </div>
	);
};

export default edit;
