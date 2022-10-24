const {version} = require("../package.json");
const ergo = require("./tokens/ergo.json");
const cardano = require("./tokens/cardano.json");

function enrichTokens(tokens) {
    const network = tokens.network;
    return tokens.tokens.map(function(token) {
        return {
            network,
            ...token,
        }
    })
        // sort them by ticker for easy readability
        .sort(function(t1, t2) {
            return t1.ticker.toLowerCase() < t2.ticker.toLowerCase() ? -1 : 1
        })
}

module.exports = function buildTokenList() {
    const parsedVersion = version.split('.');

    return {
        name: 'SF Tokens',
        timestamp: new Date().toISOString(),
        version: {
            major: +parsedVersion[0],
            minor: +parsedVersion[1],
            patch: +parsedVersion[2],
        },
        tags: {},
        keywords: ['spectrum finance', 'tokens', 'default'],
        tokens: [...enrichTokens(ergo), ...enrichTokens(cardano)],
    };
}