# CarboMonitor

## Overview

The CarboMonitor API interface makes requests to the **Official Carbon Intensity API for Great Britain** to bring you up to date information about the country's carbon intensity.

CarboMonitor currents returns data from the API across three different sections:

### Current Carbon Intensity

This sections displays the current national carbon intensity, as well as the day's forecast reading. It specifies the time period and date of the reading using a utility function to parse timestamps in the response object.

### Current Generation Mix

This section provides a breakdown of the fuel sources currently being used to generate electricity nationwide. Results are sorted by percentage in descending order.

### Regional Search

Users can also take advantage of the Regional Search box to view the carbon intensity forecast for their region. If a user make a bad request, an error message is shown but they are able to try again.

## Optimisation

The app is optimised for mobile, but also works well on desktop displays.

This is a standalone mini project that may be updated in the future.

## Local Setup Instructions

### Cloning the Repository

Begin by clicking on the **CODE** button above and copying the URL. Then, navigate to the directory into which you would like to clone the repository, and run this command:

```
git clone <URL>
```

To push changes from your cloned local version to a personal repository on GitHub, you will first need to create a new GitHub repository. 

Initialise the repository <u>without</u> a `README`, `gitignore`, or `licence`.

Then, copy the URL of your new repository and run the following commands:

```
git remote set-url origin <NEW_URL>
git branch -M main
git push -u origin main
```

### Prerequisites

Please ensure you have installed Node.js. Certain versions of Node may not be able to run this project, so if you encounter any issues, that may be the cause of the problem. At the time of writing, `v18.17.1` is working well, but `v20.6.0` is not.

### Installing Packages and Running the Project

Once you have cloned the repository on your local machine, please ensure you are in the root directory: `carbon-intensity-api-interface`.

You may then run the following commands:

```
npm install
```

This will install all required NPM packages..

```
npm run dev
```

This will run the app locally, typically on port 5173. Please check your terminal log for confirmation.