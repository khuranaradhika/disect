### Database Setup ###
The following steps ensure a connection to our MongoDB database provided you can access the appopriate credentials.
1. Create `default.json` in `disect/server/config`. Copy and paste the URI to our MongoDB database as follows, replacing <URI>.
```json
{
  "mongoURI": "<URI>"
}
```
Our URI is private for security reasons. You can request access by emailing one of the administrators.
  
2. To check that Node.js has connected to the database, run `npm run start` in your terminal from the `disect/server` directory. If successful, you should see `"MongoDB connected"` in your terminal. 
3. To ensure you can read from the database, uncomment lines 15 and 16 in `disect/server/db.js`. This will retrieve an arbitrary charity from our list of charities and print its name.
  
### API Confirmation ###
After starting our express server on your local machine using the `npm run start` script, you can check to see if our API is accessible using an http client. For example,
  1. Run `npm run start`. 
  2. Run `curl http://localhost:5000/api/charities/Environmentall Friendly`. You should something similar to the following output:
  ```
  TODO
  ```
 
