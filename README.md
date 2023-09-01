# Atelier e-commerce website Frontend


## Table of Contents
- [About](#about)
- [Installation](#installation)
- [Features](#features)

## About

Atelier is an e-commerce website serving customer with millions of fashion products. Following the business requirement, our team of four organized our workflow with ticketing system with Trello. Each member was assigned to a subcomponent.
We followed agile methodology to maintain steady pace for our development process using Trello board as our ticketing system. We held daily stand up meetings and stand downs every two days to track each member's progress to make sure we are keeping up with deadlines and requirements.

Our challenge was to get familiar with new technologies such as SASS. We achieved this by not using other external libraries and using its vanila features to implement each components.

## Tech Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![REACT](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Installation
1. Install dependency
```
npm install
```
2. make a Build file
```
npm run build
```
3. configure .env file with defined port number as PORT and API Token as AUTH
4. start server by
```
npm run server
```

## Features
### Overview
Overview shows the details and its pictures to the customers.
![chrome_waIP3dIfkX](https://github.com/TeamStrongHR/Atelier/assets/109112742/868f82ed-15f7-4993-a4e8-9eebbc6338a4)
Customers can browse different photos on by clicking the thumbnail on the left or clicking the arrow button on the photos. Each styles are displayed as thumbnails on the right side and can be selected by simply clicking on it.
If the customer wants to view the photos in detail, they can do so by clicking the expand button and moving their mouse cursor around the picture as displayed above.

### Related Items
related items section displays products related to the current product that the customers are browsing.
![pKT5lb6Qqq](https://github.com/TeamStrongHR/Atelier/assets/109112742/7da65f0f-e3a8-481c-8f3f-982f4778213c)
You can navigate the related products by clicking them and compare the current product by clicking the star.
Another feature is adding product to "Your Outfits" by clicking the gray box with "+ Add this Outfit" and removed them by clicking the x button on the top right corner.

### Ratings and Review
Ratings and Review shows other customers' reviews and also lets them post their own reviews.
![chrome_93uKMd95kB](https://github.com/TeamStrongHR/Atelier/assets/109112742/011d244d-b5b1-474b-bed2-513e4b2cc377)
You can browse more reviews by clicking more reviews button and scroll down.
![chrome_kXc0MhUJ7A](https://github.com/TeamStrongHR/Atelier/assets/109112742/5d834b3c-11b7-419c-bc05-6532e1923982)
To post a review, click write review button. A modal will pop up where you can write your own reviews and give it its own categories.
You can also upload pictures to your reviews which will show up as a thumbnail in the Ratings and Review section.

