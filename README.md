# Bridge-In-Tech (frontend)
Bridge-In-Tech (BIT) is an application that allows industries/companies, mentors, and students to actively collaborate with one another. 

This is the frontend client of Bridge-In-Tech which is a Reactjs web application that consumes the [BridgeInTech backend](https://github.com/anitab-org/bridge-in-tech-backend) REST API server. BIT backend server also consumes the Mentorship System (MS) backend server for some of its functionalities. Both BIT and MS backend servers are connected to a single PostgreSQL database.

## Contributing

**This project is under active development**

    

Please read our [Contributing Guidelines](.github/CONTRIBUTING.md), [Code of Conduct](.github/CODE_OF_CONDUCT.md) and [Reporting Guidelines](.github/REPORTING_GUIDELINES.md) thoroughly.

## Setup
To start contributing to the project, set up the frontend environment on your local machine. As the BIT web application consumes BridgeInTech backend REST API which connects to Mentorship System (MS) backend REST API, the two backend servers (BIT and MS) need to be run for the BIT web application to work properly. 

Contributors have the option to run a local BIT frontend server that connects to BIT and MS backend servers that are also run locally. Another option is to connect to the remote BIT backend on the Heroku server which already connects to the remote MS backend Heroku server that already modified to support BIT development (from this point onward will be called MS-for-BIT). Follow the instructions below to set up the development environment:


### Option 1: with BIT and MS backend servers also run locally 
1. **IMPORTANT!!! You must setup the BIT backend server and postgresql database first before setting up the MS-for-BIT server on the next step**.
To do this, follow the instruction [here](https://github.com/anitab-org/bridge-in-tech-backend/wiki/BIT-development-environment-setup). Once done, you can proceed to step 2 below. 
2. Setup MS-for-BIT server by following the setup instruction for Mentorship Backend [here](https://github.com/anitab-org/mentorship-backend) but using the codebase from Maya Treacy's fork repository [ms-backend-server](https://github.com/mtreacy002/mentorship-backend/tree/ms-backend-server) branch. 
To do this, run the following codes on the terminal after you fork and clone the MS backend repository:

```
$ git checkout -b bit-ms-backend-server develop
$ git pull https://github.com/mtreacy002/mentorship-backend.git ms-backend-server
```

Follow the rest of the setup instructions (providing the environment credentials) mentioned on the [MS README `Run app` section](https://github.com/anitab-org/mentorship-backend). **Note** Notice that since **BIT** already occupies **port 5000** of your localhost, the **MS** server is set to run on **port 4000** for this BridgeInTech project.

### Option 2: with BIT and MS backend servers run remotely on Heroku

1. Go to `src/config.js` file 
2. Comment out line 1 that sets `localhost` as the base REST API url for MS server
3. Uncomment line 2 to set the [BIT Heroku server](https://bridgeintech-bit-heroku-psql.herokuapp.com) as the base REST url for MS server

<img width="1348" alt="Screen Shot 2020-07-19 at 12 05 25 pm" src="https://user-images.githubusercontent.com/29667122/87865402-3e9f1580-c9b8-11ea-97e1-6dc24fdc970f.png">

**Important**
Please be aware that there are **drawbacks** if you chose to run the BIT and MS backend servers remotely (**option 2**):
* There will be a **significant delay** from the time when the request is made on the BIT web GUI to the time the response is received. This is because BIT Heroku makes calls to MS-for-BIT Heroku backend server for MS related functionalities. Both of these Heroku servers are running on [free `dynos`](https://www.heroku.com/dynos) that have limited capacity. When you run both BIT and MS-for-BIT servers locally, you will not have this time lag issue.
* The BIT Heroku baackend server will only carries the latest code that have been approved and merged to the develop branch. This means, if you are working on a PR or testing an open PR, this **Option 2** (running remote BIT Heroku server) **MUST NOT BE USED**.     

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


## Branches

This repository has the following branches:
- **master**: This branch contains the deployment of the backend.
- **develop**: This contains the latest code. All the contributing PRs must be sent to this branch.

## Contact

If you have any questions or want to discuss something about this repo, feel free to join our [Zulip Community](http://anitab-org.zulipchat.com/)! If you are a new contributor, head over to this project's stream [#bridge-in-tech](https://anitab-org.zulipchat.com/#narrow/stream/237630-bridge-in-tech) on Zulip to see ongoing discussions.

## License

The project is licensed under the GNU General Public License v3.0. Learn more about it in the [LICENSE](LICENSE) file.
