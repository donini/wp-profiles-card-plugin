# Contributing to WP Profiles Card Plugin

Thank you for contributing! This WordPress Gutenberg block displays profile cards from [CardPress.us](https://cardpress.us/).

## Quick Start

### Prerequisites
- Node.js 20+
- WordPress 6.7+
- PHP 7.4+
- Local WordPress environment

### Setup

#### 1. Fork & Clone
```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR-USERNAME/wp-profiles-card-plugin.git
cd wp-profiles-card-plugin
```
*Creates a local copy of your forked repository*

#### 2. Install Dependencies
```bash
npm install
```
*Downloads all required packages (React, WordPress scripts, etc.)*

#### 3. Configure Git Remotes
```bash
git remote add upstream https://github.com/donini/wp-profiles-card-plugin.git
git remote -v
```
*Sets up connection to original repository for syncing updates*

#### 4. Start Development
```bash
npm start
```
*Launches development server with hot reload - changes appear instantly*

### Available Commands

#### Development
```bash
npm start
```
*Starts development server with automatic compilation and browser refresh*

#### Building
```bash
npm run build
```
*Creates optimized production files in `/build` directory*

#### Code Quality
```bash
npm run lint:js      # Check JavaScript for errors and style issues
npm run lint:css     # Check CSS/SCSS for errors and style issues  
npm run format       # Auto-fix code formatting issues
```

#### WordPress Specific
```bash
npm run packages-update    # Update WordPress packages to latest versions
npm run plugin-zip        # Create installable plugin zip file
```

## Contributing Process

### 1. Sync & Create Branch

#### Update Your Fork
```bash
git checkout main
git pull upstream main
git push origin main
```
*Syncs your fork with latest changes from main repository*

#### Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```
*Creates and switches to a new branch for your changes*

**Branch Naming Guide:**
- `feature/add-search` - new features
- `fix/loading-issue` - bug fixes
- `docs/update-readme` - documentation
- `style/improve-design` - styling changes
- `refactor/clean-code` - code improvements

### 2. Development Workflow

#### Make Your Changes
- Edit files in `/src` directory
- Test in WordPress admin (Gutenberg editor)
- Follow existing code patterns

#### Run Quality Checks
```bash
npm run lint:js && npm run lint:css
```
*Ensures code meets project standards*

#### Test Your Build
```bash
npm run build
```
*Verifies your changes compile without errors*

### 3. Commit Your Work

#### Stage Files
```bash
git add .                    # Stage all changes
# OR
git add src/profile-card/    # Stage specific directory
```
*Prepares your changes for commit*

#### Create Commit
```bash
git commit -m "Add: brief description of change

- Specific detail about what was added/fixed
- Another detail about the implementation
- Any important notes for reviewers"
```
*Records your changes with descriptive message*

#### Push to Your Fork
```bash
git push origin feature/your-feature-name
```
*Uploads your branch to GitHub*

### 4. Submit Pull Request

#### Create PR on GitHub
1. Go to your fork on GitHub
2. Click **"Compare & pull request"** button
3. Fill out the form:
   - **Title**: Clear, descriptive summary
   - **Description**: What you changed and why
   - **Issues**: Link related issues with `#123`
   - **Screenshots**: For any UI changes

#### PR Template Example
```
## What This PR Does
Brief description of the changes

## Changes Made
- [ ] Added new feature X
- [ ] Fixed bug Y
- [ ] Updated documentation

## Testing
- Tested in WordPress 6.7+
- Verified responsive design
- Checked browser compatibility

## Screenshots
(if applicable)
```


## Testing Guide

### 1. WordPress Testing

#### Add Block to Editor
```bash
# Start development server first
npm start
```
1. Open WordPress admin → Posts/Pages → Add New
2. Click **+** → Search "Profile Card"
3. Add block and enter a username
4. Preview the post

#### Test Different Scenarios
- Valid usernames from CardPress.us
- Invalid/non-existent usernames
- Special characters in usernames
- Very long usernames

### 2. Frontend Testing

#### Check Display
- View published post/page
- Test on different screen sizes
- Verify SVG renders correctly
- Check loading states

#### Browser Testing
```bash
# Open in multiple browsers
npm start  # Then test in Chrome, Firefox, Safari, Edge
```

### 3. Code Quality Checks

#### Run All Linting
```bash
npm run lint:js     # JavaScript syntax and style
npm run lint:css    # CSS/SCSS formatting
npm run format      # Auto-fix minor issues
```

#### Verify Build
```bash
npm run build       # Must complete without errors
```
*Production build should create optimized files*

#### WordPress Standards
- Block should appear in inserter
- No console errors
- Follows Gutenberg patterns
- Accessible markup

## Project Structure
```
wp-profiles-card-plugin/
├── src/profile-card/
│   ├── edit.js          # Block editor component
│   └── editor.scss      # Editor styles
├── build/               # Compiled assets
├── profile-card.php     # Main plugin file
└── package.json         # Dependencies
```

## Key Technologies
- WordPress Gutenberg Blocks
- React with Hooks
- SCSS
- Axios for API calls
- WordPress Scripts

## After Your PR is Merged

### Cleanup Process

#### Switch to Main Branch
```bash
git checkout main
```
*Returns to main development branch*

#### Update Local Repository
```bash
git pull upstream main
```
*Downloads latest changes including your merged PR*

#### Remove Feature Branch
```bash
git branch -d feature/your-feature-name              # Delete local branch
git push origin --delete feature/your-feature-name   # Delete remote branch
```
*Cleans up branches that are no longer needed*

#### Update Your Fork
```bash
git push origin main
```
*Syncs your fork with the latest main branch*

## Need Help?
- Check [existing issues](https://github.com/donini/wp-profiles-card-plugin/issues)
- Open new issue for bugs/features
- Review [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)

## License
GPL-2.0-or-later

---

Thanks for making this project better! 🚀 