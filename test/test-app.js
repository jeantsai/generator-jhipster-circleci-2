const path = require('path');
const fse = require('fs-extra');
const assert = require('chai').assert;
const yeomanAssert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster circleci-2', () => {
    describe('happy path', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/default'), dir);
                })
                .on('end', done);
        });

        it('generate files', () => {
            yeomanAssert.file('.circleci/config.yml');
        });
    });

    describe('missing .yo-rc.json', () => {
        it('throw error and recommend to run yarn manually', (done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/missing.yo-rc.json'), dir);
                })
                .on('error', (err) => {
                    assert.include(err.message, 'Missing .yo-rc.json');
                    done();
                });
        });
    });

    describe('already exist', () => {
        beforeEach(() => {
            this.circleci = helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/existing.circleci.yml'), dir);
                });
        });

        describe('user choose to override existing files', () => {
            beforeEach((done) => {
                this.circleci
                    .withPrompts({ override: true })
                    .on('end', done);
            });

            it('override existing files', () => {
                yeomanAssert.fileContent('.circleci/config.yml', /version/);
            });
        });

        describe('user choose to keep existing files', () => {
            beforeEach((done) => {
                this.circleci
                    .withPrompts({ override: false })
                    .on('end', done);
            });

            it('keep existing files', () => {
                yeomanAssert.noFileContent('.circleci/config.yml', /version/);
            });
        });
    });
});
