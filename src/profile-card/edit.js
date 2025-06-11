import { useState, useEffect } from "react";
import axios from "axios";

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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

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
	const { userName } = attributes;
	const [profileData, setProfileData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchProfileData = async (user) => {
		if (!user) return;
		
		setIsLoading(true);
		setError('');
		
		try {
			const response = await axios.get(`https://cardpress.us/json?username=${user}`);
			
			if (response.data && response.data.name) {
				setProfileData(response.data);
				setAttributes({ profileData: response.data });
			} else {
				setError('User not found or no data available');
				setProfileData(null);
				setAttributes({ profileData: null });
			}
		} catch (err) {
			setError('Failed to fetch user data');
			setProfileData(null);
			setAttributes({ profileData: null });
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProfileData(userName);
	}, [userName]);

	const getBadgeTypeClass = (classString) => {
		const badgeMatch = classString.match(/badge-([a-zA-Z-]+)/);
		return badgeMatch ? badgeMatch[1] : '';
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Profile Settings', 'profile-card')}>
					<TextControl
						label={__('WordPress Username', 'profile-card')}
						value={userName}
						onChange={(value) => setAttributes({ userName: value })}
						help={__('Enter a WordPress.org username', 'profile-card')}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="wp-profile-card">
				{isLoading && (
					<div className="wp-profile-loading">
						<p>{__('Loading profile...', 'profile-card')}</p>
					</div>
				)}

				{error && (
					<div className="wp-profile-error">
						<p>{error}</p>
					</div>
				)}

				{profileData && !isLoading && (
					<>
						<div className="wp-profile-header">
							<div className="wp-profile-avatar">
								<img src={profileData.avatar} alt={profileData.name} />
							</div>
							<div className="wp-profile-info">
								<div className="wp-profile-activity">WordPress Activity</div>
								<h3 className="wp-profile-name">{profileData.name}</h3>
								<p className="wp-profile-username">User: @{userName}</p>
								<p className="wp-profile-member-since">Member Since: {profileData.memberSince}</p>
							</div>
						</div>

						{profileData.badges && profileData.badges.length > 0 && (
							<div className="wp-profile-badges">
								{profileData.badges.map((badge, index) => {
									const badgeType = getBadgeTypeClass(badge.class);
									
									return (
										<div key={index} className={`wp-profile-badge ${badgeType ? `badge-${badgeType}` : ''}`}>
											<div className="wp-profile-badge-icon">
												<span className={badge.class}></span>
											</div>
											<span className="wp-profile-badge-label">{badge.name}</span>
										</div>
									);
								})}
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
