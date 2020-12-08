import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selectors';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../preview-collection/collection-preview.component';

import './collections-overview.style.scss';

const CollectionOverview = ({ collections }) => (
	<div className='collection-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
