const { __ } = wp.i18n;

const save = ( props ) => {
  const { className } = props;

	const { attributes: {} } = props;

	return (
    <div className={className}>
      <p>{__('Karen Data Block', 'gutenberg-boilerplate')}</p>

    </div>
	);
};

export default save;
