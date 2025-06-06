import { useState, useEffect } from "react";

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

	useEffect(() => {

		async function getJSON(url) {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("HTTP error! status: ${response.status}");
				}
				const data = await response.json();
				console.log(data);
				return data;
			} catch (error) {
				console.error("Error fetching JSON:", error)
			}
		}

		const url = 'https://cardpress.us/card?username=' + attributes.userName;
		console.log( url );

		const data = getJSON(url)
			.then(jsonData => {
				console.log( jsonData.data );
			})

	}, []);
	return (
		<div { ...useBlockProps() }>Card</div>
	);
}
