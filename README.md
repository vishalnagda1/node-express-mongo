# Node Express Mongo

**Node Express Mongo** is a scaffolding or template to get started with a new Node Express project with Mongo DB connectivity using mongoose package. It also provides basic user authentication APIs and also demonstrates the use of persistence DB layer. The code linter and code formatter is also there for development environment.


## Requirements

##### **Prerequisites**

You should have at least a basic understanding of fundamental programming concepts and some experience with introductory [`Javascript`](https://developer.mozilla.org/en-US/docs/Web/JavaScript). And the knowledge of [`Mongo`](https://university.mongodb.com/), [`Express`](https://expressjs.com/) and [`Node JS`](https://nodejs.dev/) is an advantage.

#### **Installation**

Lastly, make sure you have the following installed.

- Latest version of [Node.js](https://nodejs.org/en/)
- Latest version of [NPM (Node Package Manage)](https://www.npmjs.com/get-npm)
- Latest version of [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Latest version of [git](https://git-scm.com/) (**This is optional. It requires only if you choose to clone project**)



### Getting Started

1. Either you can **clone** or **download** repository from GitHub.

   - Clone with HTTPS *(required [git](https://git-scm.com/) installed in your system)*

     ```shell
     git clone https://github.com/vishalnagda1/node-express-mongo.git
     ```

   - Clone with SSH *(required [git](https://git-scm.com/) installed in your system)*

     ```sh
     git clone git@github.com:vishalnagda1/node-express-mongo.git
     ```

   - [Download Zip](https://github.com/vishalnagda1/node-express-mongo/archive/master.zip)

2. Navigate to project directory in the terminal or command prompt.

   ```shell
   cd node-express-mongo
   ```

3. Install project dependencies
   
   **Note:** we're using [yarn](https://yarnpkg.com/getting-started/install), if you don't want to use it replace `yarn` with `npm`.

   ```shell
   yarn install
   ```

4. Create a `keys.js` file in `config` directory

   - If you are using **Windows** `Command Prompt` or `Powershell`

     ```powershell
     copy config/keys.sample.js config/keys.js
     ```

   - If you using `Mac` or `Linux`

     ```shell
     cp config/keys.sample.js config/keys.js
     ```

   **Note:** update `keys.js` file variables as per the requirements.

5. Run the project server

   - Run development server

     ```shell
     yarn start
     ```

   - Run production server

     ```shell
     yarn start-prod
     ```

6. Project server is running at:

   - The server is running at [http://localhost:8000](http://localhost:8000)



#### Contributing

1. Fork it ( https://github.com/vishalnagda1/node-express-mongo/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request.
