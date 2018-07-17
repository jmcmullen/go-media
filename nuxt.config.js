const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
    head: {
        title: 'go-media-nuxt',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js technical challenge for GoMedia',
            },
        ],
    },

    loading: { color: '#3B8070' },
});
