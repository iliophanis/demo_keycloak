# Icons

> An Icons react library

## How To Use It

* Add the icon to assets folder
* Run command (generate automatically React Typescript Components from svg)
	*	```
		yarn run generate
		```

## React-scripts

#### Lint Project using eslint
```
yarn run lint --fix
```

#### Create React Typescript Components from svg icons (using svgr library - https://react-svgr.com/)
```
yarn run generate
```
#### Create build folder using rollup.js (module bundler for JavaScript) * This running automatically in pipeline when push in master and release
```
yarn run build
```

#### Run Storybook in port 9099 to preview the icons
```
yarn run storybook
```

## Folder Structure


``` 
├── assets (all svg icons eg.exported from Figma)
├── build (library folder with ready to publish files with esm format)
├── src
├──── icons (create dynamically using yarn run generate)
├──── stories
├────── {name}.stories.tsx (eg. Icons storybook having all icons)
├──── index.tsx (export icons)
├──── index.spec.tsx (test for svg icon)
├── .svgrcc.js (configuration file for svgr, there you can add multiple plugins eg. @svgr/babel-plugin-remove-jsx-attribute)
├── rollup.config.js (configuration file for rollup using to build library)
├── .eslintrc.js (configuration file for eslint)
```
## Installation

```
yarn add @cambridgeassessment/ui-react-icons
```

## Usage

```js
import { OpenTranscript } from '@cambridgeassessment/ui-react-icons';

function App() {
	return (
		<>
			<OpenTranscript style={{ fontSize: '24px' ,color:'blue'}} />
		</>
	);
}
```

## options (eg. make icons accessible for screen reader)

```js
<OpenTranscript
	style={{ fontSize: '32px',color:'red' }}
	title="my title"
	titleId="my-title-id"
/>
```

## License

cambridgeassessment
