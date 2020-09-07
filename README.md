After starting the python server, uncomment the function call 'ask12345' and pass the interval in seconds as the parameter.
The 'ask12345' function will send a GET request every s seconds to http://localhost:12345/ and print a string comprising of:
-character of the response (failed/succeeded)
-total requests since starting the server
-number and percentage of success responses.