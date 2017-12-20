/* global describe, beforeEach, it */

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster generator circleci-2', () => {
    describe('Test with default case', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/default'), dir);
                })
                .withPrompts({ override: true })
                .on('end', done);
        });

        it('creates files', () => {
            assert.file(['.circleci/config.yml']);
        });
    });
});
