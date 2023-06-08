# The lane-db api documentation
I am following the Best Practices for REST API Design described in https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/ 
# Client response header requirements
Content-Type: application/json; charset=utf-8

# Server response header requirements
Content-Type: application/json; charset=utf-8

# Action conventions
* GET - retrieves resources
* POST - submits new data to the user
* PUT -  updates existing data
* DELETE - removes data
# error conventions
Common error HTTP status codes include:

* 400 Bad Request – This means that client-side input fails validation.
* 401 Unauthorized – This means the user isn’t not authorized to access a resource. It usually returns when the user isn’t authenticated.
* 403 Forbidden – This means the user is authenticated, but it’s not allowed to access a resource.
* 404 Not Found – This indicates that a resource is not found.
* 500 Internal server error – This is a generic server error. It probably shouldn’t be thrown explicitly.
* 502 Bad Gateway – This indicates an invalid response from an upstream server.
* 503 Service Unavailable – This indicates that something unexpected happened on server side (It can be anything like server overload, some parts of the system failed, etc.).
# Items exiting in the DB
The following items are maintained in the lane db. The db will be expanded over time. 
| Item | Description |
|------|-------------|
| User | These are the users of the database. they are various privs |

## Users
These calls handle users. Users must identifiy themselves (they authentication appears in every API call). Administration may add, modify, and delete users users
# contributors