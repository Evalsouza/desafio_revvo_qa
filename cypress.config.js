const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://sandbox311.moodledemo.net',
        viewportHeight: 660,
        viewportWidth: 1200,
        restries: {
            runMode: 1,
            openMode: 0
        },

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
});
