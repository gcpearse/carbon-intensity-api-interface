# CarboMonitor

## Overview

The CarboMonitor API interface makes requests to the **Official Carbon Intensity API for Great Britain** to bring you up to date information about the country's carbon intensity.

The hosted version of this application can be accessed [here](https://carbomonitor.netlify.app).

CarboMonitor currently returns data from the API across three different sections:

### Current Carbon Intensity

This sections displays the current national carbon intensity, as well as the day's forecast reading. It specifies the time period and date of the reading using a utility function to parse timestamps in the response object.

### Current Generation Mix

This section provides a breakdown of the fuel sources currently being used to generate electricity nationwide. Results are sorted by percentage in descending order.

### Regional Search

Users can also take advantage of the Regional Search box to view the carbon intensity forecast for their region.

## Optimisation

The app is optimised for mobile, but also works well on desktop displays.

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

Please ensure you have installed Node.js.

### Installing Packages and Running the Project

Once you have cloned the repository on your local machine, please ensure you are in the root directory: `carbon-intensity-api-interface`.

You may then run the following commands:

```
npm install
```

This will install all required NPM packages.

```
npm run dev
```

This will run the app locally, typically on port 5173. Please check your terminal log for confirmation.
