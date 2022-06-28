# @ergolabs/default-token-list

This package includes a JSON schema for token lists, and contains the default token list and token logos used in the ErgoDEX interface

## JSON Schema
The JSON schema represents the technical specification for a token list which can be used in a cross-chain dApp interface, such as the ErgoDEX Interface.

The JSON schema ID is https://ergodex.io/tokenlist.schema.json

## Semantic versioning
This repo includes a version field (in package.json), which follows [semantic versioning](https://semver.org/).

List versions must follow the rules:

- Increment major version when tokens are removed or if you've updated the `tokenlist.schema.json` file;
- Increment minor version when tokens are added;
- Increment patch version when tokens already on the list have minor details changed (name, ticker, logo URL, decimals).

Changing a token address or chain ID is considered both a remove and an add, and should be a major version update.

## Adding a token
To request we add a token file a [Token Request issue]().

### Disclaimer
Note filing an issue does not guarantee addition to this default token list. We do not review token addition requests in any particular order, and we do not guarantee that we will review your request to add the token to the default list.

## Adding a logo
We add all token logos that meet simple requirements.  
To request we add a logo file a [Logo Request issue]().

### Requirements for logos  
- SVG or PNG
- Size 64x64
- If you use PNG, remove white background
