/* global describe before it */

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-vue-component:app', () => {
  before(() =>
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true }).toPromise()
  );

  it('creates files', () => {
    assert.file([
      'src/HelloWorld.vue',
      'src/index.js',
      'test/index.js',
      'test/specs/index.spec.js',
      'img/vue.png',
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.npmignore',
      '.npmrc',
      'circle.yml',
      'karma.conf.js',
      'LICENSE',
      'index.html',
      'favicon.ico',
      'package.json',
      'README.md',
      'docs/App.vue',
      'docs/main.js',
      'build/utils.js',
      'build/webpack.build.js',
      'build/webpack.build.min.js',
      'build/webpack.config.js'
    ]);
  });
});
