import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import edit from './edit';
import save from './save';

registerBlockType( 'arvernus/slide-video', {
	...metadata,
	edit,
	save,
} );
