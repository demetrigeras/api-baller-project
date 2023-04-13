# api-baller-project

I made an API from the Ball dont lie API https://www.balldontlie.io/home.html#introduction. I love basketball and wanted to scrub data  the names of the players and which teams they play for. Its random players from different teams but please note that it does not include all the players and thats its not up to date with current data. 

This API lists the following information:

-First name of the player,
-Last name of the player
-Team they play for
-The city that they are playing in

#How it works 

The below link will take you to the api of random players and the which teams they play for or use to play for.


NOTE: This site will be easier to view if you have a JSON viewer extension installed on your browser to display/"pretty" the large datasets in your browser. I use the JSON Viewer Extension on Google Chrome.

```https://ball-doesnot-lie.herokuapp.com/bball 

##Looking up a Team and which players play for that team.

```https://ball-doesnot-lie.herokuapp.com/bball/team/full_name of team

For Example:
```https://ball-doesnot-lie.herokuapp.com/bball/team/New York Knicks

This will show you which players play or played for that team

##Looking up the first name of a player. Please note that most players most likely will not be in this API.

```https://ball-doesnot-lie.herokuapp.com/bball/firstname/first name of the player

For Example: 
```https://ball-doesnot-lie.herokuapp.com/bball/firstname/Ron

This will show all the players name Ron. It should look like this:

{
  "_id": "6436e6be086f5509eba28c9d",
  "first_name": "Ron",
  "last_name": "Baker",
  "team": [
    {
      "city": "New York",
      "full_name": "New York Knicks",
      "_id": "6436e6be086f5509eba28c9e"
    }
  ],
  "__v": 0
}







