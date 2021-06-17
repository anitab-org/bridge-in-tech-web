[![project chat](https://img.shields.io/badge/zulip-join_chat-brightgreen.svg?logo=zulip)](https://anitab-org.zulipchat.com/login/#narrow/stream/237630-bridge-in-tech)
[![Build Status](https://travis-ci.org/anitab-org/bridge-in-tech-web.svg?branch=develop)](https://travis-ci.org/anitab-org/bridge-in-tech-web)

# Bridge-In-Tech (frontend)

Bridge-In-Tech (BIT) is an application that allows industries/companies, mentors, and students to actively collaborate with one another.

This is the frontend client of Bridge-In-Tech which is a Reactjs web application that consumes the [BridgeInTech backend](https://github.com/anitab-org/bridge-in-tech-backend) REST API server. BIT backend server also consumes the Mentorship System (MS) backend server for some of its functionalities. Both BIT and MS backend servers are connected to a single PostgreSQL database.

## Setup

To start contributing to the project, set up the frontend environment on your local machine. As the BIT web application consumes BridgeInTech backend REST API which connects to Mentorship System (MS) backend REST API, the two backend servers (BIT and MS) need to be run for the BIT web application to work properly.

Contributors have the option to run a local BIT frontend server that connects to BIT and MS backend servers that are also run locally. Another option is to connect to the remote BIT backend on the Heroku server which already connects to the remote MS backend Heroku server that already modified to support BIT development (from this point onward will be called MS-for-BIT). Follow the instructions below to set up the development environment:

### Option 1: with BIT and MS backend servers also run locally

1. **IMPORTANT!!! You must setup the BIT backend server and postgresql database first before setting up the MS-for-BIT server on the next step**.
To do this, follow the instruction [here](https://github.com/anitab-org/bridge-in-tech-backend/blob/develop/.github/ENV_SETUP_INSTRUCTION.md). Once done, you can proceed to step 2 below. 
2. Setup MS-for-BIT server by following the setup instruction for Mentorship Backend [here](https://github.com/anitab-org/mentorship-backend) but using the codebase from Maya Treacy's fork repository [ms-backend-server](https://github.com/mtreacy002/mentorship-backend/tree/ms-backend-server) branch. 
To do this, run the following codes on the terminal after you fork and clone the MS backend repository:

```
$ git checkout -b bit-ms-backend-server develop
$ git pull https://github.com/mtreacy002/mentorship-backend.git ms-backend-server
```

Follow the rest of the setup instructions (providing the environment credentials) mentioned on the [MS README `Run app` section](https://github.com/anitab-org/mentorship-backend). **Note** Notice that since **BIT** already occupies **port 5000** of your localhost, the **MS** server is set to run on **port 4000** for this BridgeInTech project.

### Option 2: with BIT and MS backend servers run remotely on Heroku (NOTE: CURRENTLY UNAVAILABLE)

1. Go to `src/config.js` file
2. Comment out line 1 that sets `localhost` as the base REST API url for MS server
3. Uncomment line 2 to set the [BIT Heroku server](https://bridgeintech-bit-heroku-psql.herokuapp.com) as the base REST url for MS server

<img width="1348" alt="Screen Shot 2020-07-19 at 12 05 25 pm" src="https://user-images.githubusercontent.com/29667122/87865402-3e9f1580-c9b8-11ea-97e1-6dc24fdc970f.png">

**Important**

1. Heroku servers are currently unavailable because the free services we are using are not able to cope with BridgeInTech architecture. Detailed explanation about this can be found [here](https://medium.com/anitab-org-open-source/why-you-cant-use-heroku-free-dynos-in-multiple-servers-dependent-application-fa1cdd9e9e07?source=friends_link&sk=281bb76050f052c03c6772e9be275f67)

2. Even if we found the way to make Heroku servers work, please be aware that there are **drawbacks** if you chose to run the BIT and MS backend servers remotely (**option 2**):

- There will be a **significant delay** from the time when the request is made on the BIT web GUI to the time the response is received. This is because BIT Heroku makes calls to MS-for-BIT Heroku backend server for MS related functionalities. Both of these Heroku servers are running on [free `dynos`](https://www.heroku.com/dynos) that have limited capacity. When you run both BIT and MS-for-BIT servers locally, you will not have this time lag issue.
- The BIT Heroku backend server will only carry the latest code that have been approved and merged to the develop branch. This means, if you are working on a PR or testing an open PR, this **Option 2** (running remote BIT Heroku server) **MUST NOT BE USED**.

## Run the app

Now that you have set the MS backend, BIT backend and frontend servers, you can run BIT React application by following the steps below:

1. install dependencies by running the command below

```
$ npm install
```

2. run the app using the command below

```
$ npm start
```

3. go to the browser on http://localhost:3000/

**NOTE**:If you have chosen to use local BIT and MS backend servers, make sure you run both of them as well as the frontend server. If you chose the Heroku BIT backeend server, then go to `config.js` file and uncomment the Heroku server url and comment out the localhost url instead (see screenshot below).

<img width="1354" alt="Screen Shot 2020-07-22 at 11 03 19 pm" src="https://user-images.githubusercontent.com/29667122/88179650-931fea80-cc6f-11ea-818c-8e412432c926.png">

## UI Screenshots

**Home Section (About and Benefit)**

<img width="400" src="https://user-images.githubusercontent.com/45410599/107178599-7cb66200-69fa-11eb-86c0-366d69d7a133.png">
<img width="400p" src="https://user-images.githubusercontent.com/45410599/107178609-8213ac80-69fa-11eb-93b0-48fe51c4a666.png">

**Account Section (Login and Register)**

<img width="400" src="https://user-images.githubusercontent.com/45410599/107178624-8b9d1480-69fa-11eb-9779-b7d98335279d.png">
<img width="400" src="https://user-images.githubusercontent.com/45410599/107178627-8dff6e80-69fa-11eb-91dc-8f32ec16f590.png">

**My Space Section (Profile and Account)**

<img width="400" src="https://user-images.githubusercontent.com/45410599/107178635-95267c80-69fa-11eb-8469-78fe99187c95.png">
<img width="400" src="https://user-images.githubusercontent.com/45410599/107178639-96f04000-69fa-11eb-9817-7d5ecebe75fe.png">

## Documentation

Documentation for this project is hosted [here](https://bridge-in-tech-web.surge.sh/). We use **Docusaurus** for maintaining the documentation of the project.

## Contributing

**This project is under active development**

Please read our [Contributing Guidelines](.github/CONTRIBUTING.md), [Code of Conduct](.github/CODE_OF_CONDUCT.md) and [Reporting Guidelines](.github/REPORTING_GUIDELINES.md) thoroughly.

## Contributors

Thanks goes to these people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mtreacy002"><img src="https://avatars.githubusercontent.com/u/29667122?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maya Treacy</b></sub></a><br /><a href="#maintenance-mtreacy002" title="Maintenance">🚧</a> <a href="https://github.com/anitab-org/bridge-in-tech-web/commits?author=mtreacy002" title="Code">💻</a> <a href="https://github.com/anitab-org/bridge-in-tech-web/commits?author=mtreacy002" title="Documentation">📖</a> <a href="#userTesting-mtreacy002" title="User Testing">📓</a> <a href="https://github.com/anitab-org/bridge-in-tech-web/commits?author=mtreacy002" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Vuyanzi"><img src="https://avatars.githubusercontent.com/u/42730256?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vuyanzi</b></sub></a><br /><a href="#design-Vuyanzi" title="Design">🎨</a></td>
    <td align="center"><a href="http://rahulm2310.github.io/Portfolio"><img src="https://avatars.githubusercontent.com/u/54268438?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rahul Mohata</b></sub></a><br /><a href="https://github.com/anitab-org/bridge-in-tech-web/commits?author=Rahulm2310" title="Code">💻</a> <a href="#design-Rahulm2310" title="Design">🎨</a> <a href="https://github.com/anitab-org/bridge-in-tech-web/issues?q=author%3ARahulm2310" title="Bug reports">🐛</a> <a href="#mentoring-Rahulm2310" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/anitab-org/bridge-in-tech-web/pulls?q=is%3Apr+reviewed-by%3ARahulm2310" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
Contributions of any kind welcome!

## Branches

This repository has the following branches:

- **master**: This branch contains the deployment of the backend.
- **develop**: This contains the latest code. All the contributing PRs must be sent to this branch.

## Contact

If you have any questions or want to discuss something about this repo, feel free to join our [Zulip Community](http://anitab-org.zulipchat.com/)! If you are a new contributor, head over to this project's stream [#bridge-in-tech](https://anitab-org.zulipchat.com/#narrow/stream/237630-bridge-in-tech) on Zulip to see ongoing discussions.

## License

The project is licensed under the GNU General Public License v3.0. Learn more about it in the [LICENSE](LICENSE) file.
