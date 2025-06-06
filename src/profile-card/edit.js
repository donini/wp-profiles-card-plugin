import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [data, setData] = useState([]);
	const url = 'https://cardpress.us/json?username=' + attributes.userName;
	useEffect(() => {
		// Fetch JSON data from the URL using axios
		axios.get(url)
			.then( (response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch( (error) => {
				console.error('Error fetching data:', error);
			});
	}, []);
	return (
		<div { ...useBlockProps() }>
			<ProfileCard data={data} />
		</div>
	);
}
