const chalk = require('chalk');
const packagejs = require('../../package.json');
const semver = require('semver');
const BaseGenerator = require('generator-jhipster/generators/generator-base');

module.exports = class extends BaseGenerator {
    // noinspection JSUnusedGlobalSymbols
    get initializing() {
        return {
            readConfig() {
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error('Missing .yo-rc.json or not a valid JHipster per data inside the .yo-rc.json.');
                }
            },
            displayLogo() {
                // it's here to show that you can use functions from generator-jhipster
                // this function is in: generator-jhipster/generators/generator-base.js
                this.printJHipsterLogo();

                // Have Yeoman greet the user.
                this.log(`\nWelcome to the ${chalk.bold.yellow('JHipster circleci-2')} generator! ${chalk.yellow(`v${packagejs.version}\n`)}`);
            },
            checkJhipster() {
                const currentJhipsterVersion = this.jhipsterAppConfig.jhipsterVersion;
                const minimumJhipsterVersion = packagejs.dependencies['generator-jhipster'];
                if (!semver.satisfies(currentJhipsterVersion, minimumJhipsterVersion)) {
                    this.warning(`\nYour generated project used an old JHipster version (${currentJhipsterVersion})... you need at least (${minimumJhipsterVersion})\n`);
                }
            }
        };
    }

    // noinspection JSUnusedGlobalSymbols
    prompting() {
        if (this.fs.exists(this.destinationPath('.circleci/config.yml'))) {
            const prompts = [
                {
                    type: 'confirm',
                    name: 'override',
                    message: 'Would you like to override existing Circle CI configuration file?',
                    default: true
                }
            ];

            const done = this.async();
            this.prompt(prompts).then((props) => {
                this.props = props;
                // To access props later use this.props.someOption;

                done();
            });
        } else {
            this.props = {
                override: true
            };
        }
    }

    // noinspection JSUnusedGlobalSymbols
    writing() {
        if (this.props.override) {
            this.fs.copy(
                this.templatePath('circleci.yml'),
                this.destinationPath('.circleci/config.yml')
            );
            this.log('Circle CI configuration file has been created successfully.');
        }
    }

    // noinspection JSUnusedGlobalSymbols
    end() {
        this.log('End of circleci-2 generator');
    }
};
