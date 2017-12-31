# generator-jhipster-circleci-2
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]  [![devDependencies Status][devdep-image]][devdep-url] [![peerDependency Status][peerdep-image]][peerdep-url]
> JHipster module, used to create Circle CI configuration file of version 2

<div align="center">
    <a href="http://jhipster.github.io">
        <img src="https://github.com/jeantsai/generator-jhipster-circleci-2/raw/master/images/logo-jhipster.png">
    </a>
    <a href="https://circleci.com">
        <img src="https://github.com/jeantsai/generator-jhipster-circleci-2/raw/master/images/circleci.png">
    </a>
</div>

# Introduction

This is a [JHipster](http://jhipster.github.io/) module, to be used in a JHipster application to generate Circle CI configuration file (version 2).

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) module, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this module:

```bash
yarn global add generator-jhipster-circleci-2
```

To update this module:

```bash
yarn global upgrade generator-jhipster-circleci-2
```

## With NPM

To install this module:

```bash
npm install -g generator-jhipster-circleci-2
```

To update this module:

```bash
npm update -g generator-jhipster-circleci-2
```

# Usage

To generate Circle CI configuration file for current JHipster project, just run the following command from the project folder.
```bash
yo jhipster-circleci-2
```

> If encountered a error with messages similar to "No .yo-rc.json found. Or, it is not a valid JHipster project per information in .yo-rc.json.", etc.
>> Please make sure you are running this generator from inside the main folder of a JHipster project, and there is a .yo-rc.json carrying JHipster configurations. Normally, JHipster will run "yarn install" before the end of generating the scaffold for your. If not, please try to run it manually.


# License

MIT © [Jun Cai](https://github.com/jeantsai)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-circleci-2.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-circleci-2
[travis-image]: https://travis-ci.org/jeantsai/generator-jhipster-circleci-2.svg?branch=master
[travis-url]: https://travis-ci.org/jeantsai/generator-jhipster-circleci-2
[daviddm-image]: https://david-dm.org/jeantsai/generator-jhipster-circleci-2.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jeantsai/generator-jhipster-circleci-2
[devdep-image]: https://david-dm.org/jeantsai/generator-jhipster-circleci-2/dev-status.svg
[devdep-url]: https://david-dm.org/jeantsai/generator-jhipster-circleci-2?type=dev
[peerdep-image]: https://david-dm.org/jeantsai/generator-jhipster-circleci-2/peer-status.svg
[peerdep-url]: https://david-dm.org/jeantsai/generator-jhipster-circleci-2?type=peer
