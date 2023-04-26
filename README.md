# nimbus-site-mobile

Project technology stack
`Next v12, material-ui v5, typescript, redux-thunk, redux-toolkit`

## How to run the project:

1. Install dependencies

```
yarn
```

2. Create `.env` file using tabsData from `env.dist`

3. Starts up dev server with live updates

```
yarn dev
```

Project will start on [localhost:3000](http://localhost:3000)

## Coding Conventions:

- [JS Rules](https://docs.google.com/document/d/13V9r56MdJhhJyw6J7Exr0P6tlWtDRavC4ZQAU-dWOwA/edit#heading=h.vt2ymjyio3xa)
- [HTML + CSS Ruses](https://codeguide.academy/html-css.html)
- [React JSX by Airbnb](https://codeguide.academy/html-css.html)

## F.A.Q.

### WebStorm does not understand paths from the root (cannot resolve directory)

Open `File > Settings > Directories` click on `src` in the tree and put the label `Resource Root`

### How to set up auto-formatting of code in WebStorm?

Install the `JavaScript and TypeScript` plugin. Open `Setting > Keymap > Plugins > JavaScript and TypeScript > Fix ESLint Problems` double click on `Fix ESLint Problems` and assign a combination (for example `Ctrl + Alt + ;`).

### How to set up auto-formatting of code in VSCode?

Install the `ESLint` plugin. Open `Setting > Workspace > Extensions > ESLint`. Turn on the checkboxes about "enable". Perhaps we restart VSCode (or maybe it will work). Use the combination `Alt + Shift + F` to format the code.


## Break character (LF / CRLF)

The default line break is LF. If you are using Windows you need to go to

```
./git/config
```

and make sure autocorrect migration is disabled (autocrlf)

```
[core]
     autocrlf=false
```

Also in WebStorm you need to go to `Setting / Editor / Code Style` and enable `Line separator` in position `Unix and macOS (\n)`.

If by now GIT has managed to fix the breaks in all files, run `nmp run js:fix`

