# CreativeWeb
Website for AI use

The web using the canvas-sketch library and here is a link how to install [https://github.com/mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch/blob/master/docs/installation.md)

Option 3: Installing the CLI Locally (--save-dev)
If you prefer not to install your CLI tools globally, you can install the CLI locally in each project that you need it by saving it as a devDependency:

npm install canvas-sketch-cli --save-dev
Now, to run it in each project, you can add canvas-sketch commands to your npm run scripts, or use npx which will try to run the locally-installed version first:

npx canvas-sketch my-sketch.js --open
💡 If you've installed canvas-sketch-cli locally, you can then use npx to run the command in that project folder without needing to include the -cli suffix.
