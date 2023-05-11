# :computer: DCISM Web-based Meeting Scheduler - Program Run Guide

## ✏️ Setting up the Project

1. Ensure that [XAMPP](https://www.apachefriends.org/index.html) has already been installed in the system.


2. Ensure that the latest version of [Node JS](https://nodejs.org/en/download/) has been already installed.
	 To verify the installation of Node JS, enter this command in the command prompt or terminal
    ```
    node -v 
    ```
	 ❕ This should show the NodeJs version that is currently installed.


3. Ensure that [Git](https://git-scm.com/downloads) is installed on the computer.
	 To verify the installation of Git, enter this command in the command prompt or terminal
    ```
    git --version 
    ```

	 ❕ This should show the version number of Git that is currently installed.


4. Create a new folder in the computer's local drive and name it as 'scheduler-module'.


5. Clone the GitHub repository using Git Bash.
	Open Git Bash and place the path to the newly created folder with this command
    ```
    cd "<path of folder named 'scheduler-module'>" 
    ```
	
    Clone the repository with this command using the repository URL
    ```
    git clone "https://github.com/Andre-Victorio/scheduler-module.git" --branch backend
    ```
	 
   ⚠️To verify that the repository has been cloned, use `ls` command. It should display `scheduler-module/` in the current working directory.


6. Open the command prompt or terminal then cd to the root of the project. Then install the dependencies.
 	
    ```
    cd <location of this project>
    npm install --legacy-peer-deps
    ```


7. Open XAMPP Control Panel and start running both `Apache and MySQL` servers.


8. In phpMyAdmin, `http://localhost/phpmyadmin/`, create a database named `scheduler-module-db` and import 
the SQL source file found in the project folder: `scheduler-module-db.sql`.


9. Finally, run both client and server components of the web application.
	  ```
    //To run client-side application
    npm run client 
    
    //To run server-side application
	  npm run server
   ```
	
