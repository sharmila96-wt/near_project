 

## Installation

Beyond having npm and node (latest versions), you should have Rust installed. I recommend nightly because living on the edge is fun.

https://rustup.rs/

### Don't forget to install the wasm32 target:

`rustup target add wasm32-unknown-unknown`

Also recommend installing near-cli globally

`npm i -g near-cli`

Everything else can be installed via:
`yarn`


## NEAR Config

There is only one config.js file found in `src/config.js`, this is also used for running tests.

Using `src/config.js` you can set up your different environments. Use `REACT_APP_ENV` to switch environments e.g. in `package.json` script `deploy`.

## Running Tests

You can run unit tests in the Rust contracts themselves, but it may be more useful to JS tests against testnet itself.

Note: to run the app and server tests make sure you install and start the server.
- yarn && yarn start

Commands:
- `test` will simply run app tests against the contract already deployed. You can mess around with `app.test.js` and try different frontend stuff
- `test:deploy` - will deploy a new dev account (`/neardev`) and deploy a new contract to this account, then run `test`
- `test:server` - will test the server, make sure you start it (see "Note" above)
- `test:unit` - runs the rust unit tests

If you've changed your contract or your dev account has run out of funds use `test:deploy`, if you're updating your JS tests only then use `test`.

## Test Utils

There are helpers in `test/test-utils.js` that take care of:
1. creating a near connection and establishing a keystore for the dev account
2. creating test accounts each time a test is run
3. establishing a contract instance so you can call methods

You can change the default funding amount for test accounts in `src/config.js`

## Using the NEAR Config in your app

In `src/state/near.js` you will see that `src/config.js` is loaded as a function. This is to satisfy the jest/node test runner.

You can destructure any properies of the config easily in any module you import it in like this:
