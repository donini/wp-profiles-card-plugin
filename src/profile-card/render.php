<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if (!function_exists('get_badge_type_class')) {
    function get_badge_type_class($class_string) {
        if (preg_match('/badge-([a-zA-Z-]+)/', $class_string, $matches)) {
            return $matches[1];
        }
        return '';
    }
}

// Get the profile data from attributes
$username = $attributes['username'] ?? 'psykro';
$profile_data = $attributes['profileData'] ?? null;

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="wp-profile-card">
        <?php if (!$profile_data): ?>
            <div class="wp-profile-placeholder">
                <p>No profile data available</p>
            </div>
        <?php else: ?>
            <div class="wp-profile-header">
                <div class="wp-profile-avatar">
                    <img src="<?php echo esc_url($profile_data['avatar']); ?>" alt="<?php echo esc_attr($profile_data['name']); ?>" />
                </div>
                <div class="wp-profile-info">
                    <div class="wp-profile-activity">WordPress Activity</div>
                    <h3 class="wp-profile-name"><?php echo esc_html($profile_data['name']); ?></h3>
                    <p class="wp-profile-username">User: @<?php echo esc_html($username); ?></p>
                    <p class="wp-profile-member-since">Member Since: <?php echo esc_html($profile_data['memberSince']); ?></p>
                </div>
            </div>

            <?php if (!empty($profile_data['badges'])): ?>
                <div class="wp-profile-badges">
                    <?php foreach ($profile_data['badges'] as $badge): ?>
                        <?php $badge_type = get_badge_type_class($badge['class']); ?>
                        <div class="wp-profile-badge <?php echo $badge_type ? 'badge-' . esc_attr($badge_type) : ''; ?>">
                            <div class="wp-profile-badge-icon">
                                <span class="<?php echo esc_attr($badge['class']); ?>"></span>
                            </div>
                            <span class="wp-profile-badge-label"><?php echo esc_html($badge['name']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        <?php endif; ?>
    </div>
</div>
