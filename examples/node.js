const monif, {discord} = require('../dist/index');

monif({
    discord: {
        url: 'URL HERE!'
    }
})

discord(() => {console.log('HELLO WORLD')})