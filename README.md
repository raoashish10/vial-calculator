# Calculator
## Demo: 
[Hosted on Netlify - Click here to open](https://vial-calculator.netlify.app/)
## How to run:
**NOTE: Clone the repository: `git clone https://github.com/raoashish10/vial-calculator.git`**<br>
There are 2 ways to run the project:<br>
1. Using npm
<br>Steps:
    1. Change working directory: `cd vial-calculator`
    2. In the root directory, run the command:
    `npm install`
    3. To build the application: `npm run build`
    4. Serve the build: `serve -s build  `
    5. The app will be hosted on [http://localhost:3000/](http://localhost:3000/)

2. Using Docker
<br>Steps:
    1.  Change working directory: `cd vial-calculator`
    2. In the root directory, run the command: `docker build . -t vial-calculator`
    3. To run the application: `docker run -p 3000:3000 -d vial-calculator`
    4. The app will be hosted on [http://localhost:3000/](http://localhost:3000/)
## Features
- Browser-based user interface
- Number pad with digits 0-9 and decimal point linked with the keyboard (ENTER key or RETURN has not been linked due to certain bugs)
- Follows PEMDAS
- Operators:
    - Simple Arithmetic operators: + - / *
    - Additional operators: % ^ √
    - Memory operators: M+ M- MR MC
- History function

