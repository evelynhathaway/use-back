<div align="center">

<img alt="Use Back icon" width="128" height="128" align="center" src=".github/icon.png"/>

# Use Back

**React Router DOM hook for navigating back without leaving your website**

[![npm version](https://badgen.net/npm/v/use-back?icon=npm)](https://www.npmjs.com/package/use-back)
[![check status](https://badgen.net/github/checks/evelynhathaway/use-back/main?icon=github)](https://github.com/evelynhathaway/use-back/actions)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

A native ESModule React hook for navigating back one location using React Router DOM, defaulting to navigating home instead of leaving your web application.

## Installation

```bash
npm install use-back
```

**Note:** This package is a native ESModule that requires React Router DOM v6 as a peer dependency.

## Usage

```tsx
import {useBack} from "use-back";

const BackButton = () => {
	const {hasBack, handleBack} = useBack();
	return (
		<button type="button" onClick={handleBack}>
			{hasBack ? "Go Back" : "Go Home"}
		</button>
	);
};
```

### `useBack([defaultPath])`

**Returns**: `{handleBack, hasBack}` Object containing an event handler that navigates back, and a boolean that indicates whether the handler will navigate back or to the default path

| Parameter   | Type     | Default | Description                                                                 |
| ----------- | -------- | ------- | --------------------------------------------------------------------------- |
| defaultPath | `string` | `"/"`   | Fallback path to navigate to for when there is not a previous history entry |

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
