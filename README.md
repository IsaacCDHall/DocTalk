
# DocTalk
## Description

_This application uses the Better Doctors API to allow users to search for doctors in Portland._

## Specs

1. Takes in search form inputs as variables to call methods upon.
2. Queries the BetterDoctor API using the search terms.
3. Waits for response and stores parsed response as variable (if received without error).
4. Displays a message if search results are empty.
5. Loops over response array, prints appropriate information to DOM.

## Installation and Setup

1. Clone this repository
2. Make a file called .env in the root directory. Sign up for the Better Doctor API to get a key, and place it in this file like this:
exports.apiKey=KEYGOESHERE
3. Install Dependencies using this command: npm i
4. Start web app with command: npm run start
5. Other commands include: npm run build, npm run lint, npm run test
### License
This project is licensed under the MIT license, Copyright (c) 2019 [Isaac Hall](/LICENSE.md)

For more information see LICENSE.md.
