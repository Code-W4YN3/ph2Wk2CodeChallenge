# BotBattlr
This is a simple react application used to view, add and search for bank transactions

## Deliverables
As a user, I should be able to:

* See profiles of all bots rendered in `BotCollection`.
* Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
* Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
* Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

## Setup
* Fork and Clone this repository to your own github repository and local terminal respectively.
* Open the folder in the terminal.
* Run the command ``` json-server --watch db.json ```
* Run ``` npm start ``` to view the page in the browser

## Technologies used
* ReactJS
