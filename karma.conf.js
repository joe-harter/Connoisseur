module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: ['angular.min.js',  'ui-bootstrap-tpls-0.7.0.min.js','spec/angular-mocks.js', 'app.js', 'model/*', 'spec/*'  ],
        browsers: ['Chrome'],
        plugins: ['karma-jasmine','karma-chrome-launcher'],
        logLevel: config.LOG_INFO,
        singleRun: true
    });
};
