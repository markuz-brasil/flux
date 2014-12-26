##### Features
| [ES6](https://github.com/sebmck/6to5)| [Browserify](http://browserify.org/)| [Web Stater Kit](https://github.com/google/web-starter-kit)| [Jade](http://jade-lang.com/)| [LESS](http://lesscss.org/)| [SASS](https://github.com/sass/node-sass)| [Mocha](http://mochajs.org/)
|--- |--- |--- |--- |--- |--- |--- |--- |---

#### What is this ?
This is my interpretion of the flux archtecture. I use an Injector instace as an alias for a a dispatcher. Famo.us instead of react and some other crazy patterns. 

This is still a work in progress and far away of being ready. This is just my pet project.

#### Quickstart

```
npm install --global gulp
```

This will install Gulp globally. Depending on your user account, you may need to gain elevated permissions using `sudo` (i.e `sudo npm install --global gulp`). Next, clone this repo and install the local dependencies flux requires:

```sh
git clone --depth=1 https://github.com/markuz-brasil/flux.git
cd flux
npm install
```

That's it! You should now have everything needed to begin hacking on flux.

#### Gulp Commands

You can now use Gulp with the following commands to stay productive during development:

##### Build & Optimize

```sh
gulp
```

##### Watch For Changes & Automatically Refresh Across Devices

```sh
# minimal dev mode (faster)
gulp watch serve dev

# full build mode (longer)
gulp watch serve build
```

Now direct your browser to `http://localhost:3000/`

#### License
[MIT](https://github.com/markuz-brasil/flux/blob/master/LICENSE)
