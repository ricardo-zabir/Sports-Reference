# Sports-Reference
Project meant to create Win/Loss table standings matrix according to JSON data 

## Technologies used

It was used TypeScript to write the solution. The TypeScript is later converted into JavaScript which is executed by Node.Js. There is a fs module being imported which is being responsible for writing the matrix in a txt file with name matrix.txt in the root of the folder.

## How is the solution built ?

There is a ``winLossData.json`` file in the root of the folder that contains information similar as to the one found in the website. That is being used as a form of validation, though if that JSON file is changed into a different file with same JSON structure, the program will still work fine. The core of the solution is on the ``main.ts`` file, using a aux func which is written in the ``writeFileAuxFunc.ts`` - that file is writting the matrix onto the text file ``matrix.txt``. The current content in the text file is the output of the program, and if necessary, feel free to delete that file and run the program again to generate same result.

The logic used in the solution is pretty straightforward. The matrix is being stored in a list of lists, each element of that list of lists is a line, and every element of that line - also a list - is either a number (value of W/L record) or string (team name). First step of the logic is filling the first row of the matrix, inserting as the first element the team abbreviation "Tm" and then iterating over the object keys present in the JSON file. 

After that, it was time to fill the rows regarding the team records. With that, a loop was created using the teams list used in the step before. In that iteration, for every team a row is created and in that row the first element is set as the team name and the later elements are being set as a result of another iteration of that teams list, now checking if team from first iteration is the same from team from second iteration and if so, only adding a '--' and if not, accessing the value present in the JSON object of team being iterated in the first iteration, accessing the property W (wins) of JSON object of the team being iterated in the second iteration.
##### The explaination above might be a little confusing but I am sure the code will answer any doubts, also I am available to answer any possible questions

As a last step, a last row is being written using the same values as first row and then that matrix is being sent to an auxiliar function which is performing a couple of adjustments just to make sure that the table is as readable as possible, though not a lot of time was spent on that, seen as the primary goal of this exercise was to showcase logic skills and data structures handling.


## How to Run

1. Clone the repository to your local machine.

   ``git@github.com:ricardo-zabir/Sports-Reference.git``

2. Enter the project folder.

   ``cd sportsReference``

3. Install the dependencies using npm.

   ``npm install``

4. Run the program by typing the following command.

   ``npm start``
### Any issues running the script, feel free to reach out at ricardofonseca.zabir@hotmail.com 
