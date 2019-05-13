# TodoApp
This is a simple Todo App using the Angular Framework

## How to Run

1. Open the directory in your terminal 

2. Start the server 

> type `ng serve` in the terminal 

3. View in web browser

> open `http://localhost:4200/` 

> REMINDER: (The app will automatically reload if you change any of the source files)


## Abilities & Features

* A user can create a new Todo item and it will show in the UI and be pseudo-sent to the JSON Placeholder API
* A user can toggle a Todo item's completion status in the UI and (for non-user made Todos) in JSON Placeholder API
* A user can delete a Todo item in UI and in JSON Placeholder API


## Notable Technologies/Functions/Methods

| Technology/Function  | Purpose                                                                                                                               |
| -------------------- |:-------------------------------------------------------------------------------------------------------------------------------------:|
| JSON Placeholder     | Receive Toodos, to mark a Todo as complete and to delete Todos                                                                        |
| Http Client Module   | Make GET Req (fetch Todos), DELETE Req (delete a Todo item), POST Req (create a Todo item) and PUT Req (toggle the completion status) |

* This is first time using Angular 
* Todo creation and update is sent to JSON Placeholer API (however, because it is not a backend that allows for editing, for user-made todos, toggle complete only works in the UI and not backend)


## Future Implementation(s)

* A user should have an account to save their Todo item's
* Find a way for any/all todo(s) to be allowed to be marked as complete on backend (and not just in the UI)
* The UI should look more welcoming and less tragic
* Implement Testing 
