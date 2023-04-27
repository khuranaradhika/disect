# Di$ect
## Di$ect Installation Instructions
### Initial Steps
1. Visit our GitHub at https://github.com/khuranaradhika/disect
2. Click the (<> Code) button. A pop-up should appear, which has several options. Press the Download ZIP option.
3. Once downloaded, open your device’s file explorer and unzip the file. Instructions are provided below for each of Windows, MacOS, and Linux Ubuntu.
	- **Windows:** Open File Explorer and navigate to the Downloads folder. Locate the “disect-main.zip” and double-click it. This will expand the zip file into a folder.
	- **MacOS:** Open Finder and navigate to the Downloads folder. Locate the “disect-main.zip” and double-click it.
	- **Linux Ubuntu:** Open Finder and navigate to the Downloads folder. Locate the “disect-main.zip” and double-click it.
### Chrome Extension Installation
1. Now that our application’s contents are available on your device, open an instance of Chrome and type “`chrome://extensions`” into the address bar.
2. In the top right corner of this page, turn on Developer Mode by clicking the radio button in the top right corner of the page.
3. Near the top left corner of the page, click the "Load Unpacked" button. This will open up your device’s local file explorer. Navigate to the “disect” folder (which should still be in Downloads if you have not moved it) and double-click the client folder. The Di$ect Chrome extension is now installed on your Chrome browser.
### Express Server Installation
1. In order to install our server, you’ll first need to download Node.js and its package manager npm. Visit the [Node installation site](https://nodejs.org/download/release/v10.24.1/) and download version 10.24.1.
	- On Windows, download and run the .msi file with either the x32 or x64 architecture depending on your machine.
	- On MacOS, download and run the .pkg file.
2. This will install Node.js version 10.24.1 and npm version 6.14.12 on your device. The following describes the steps for the GUI that appears from the .pkg file.
	- Click “Continue” for the first page that appears (Introduction).
	- Click “Continue” for the second page (License).
		- Press “Agree” to the terms of service.
	- Let the program determine where to install Node. Hence, click “Install” for the next page (Installation Type).
		- Provide any authentication for your device if prompted.
	- Node.js and npm are now installed on your machine. Close the installation program.
3. Open up your device’s terminal application. On MacOS, open “Terminal. On Windows, open “Command Prompt”. On Ubuntu, open “Terminal”. Navigate to the “server” folder in the “disect” folder by typing “cd Downloads/disect/server” (assuming the disect folder is still in Downloads).
4. Now, type “npm i”. This will install all the required Node modules for our server.
5. Finally, type “npm run start”. This will start the server. If you see the lines “Server started on port 5000” and “MongoDB Connected…”, the server is running successfully.

If you have successfully gone through all the above steps, you have installed the Chrome extension on your Chrome browser and the server on your local machine.

# Licensing
[Open Supply Hub©](https://opensupplyhub.org/) listed under the [Creative Commons Sharealike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/legalcode) found at the [Open Supply Hub API](https://github.com/opensupplyhub/api). No modifications were made to the existing data collected by [Open Supply Hub©](https://opensupplyhub.org/).
