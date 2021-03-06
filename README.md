# Makersbnb

## Headline specifications

- Any signed-up user can list a new space.
- Users can list multiple spaces.
- Users should be able to name their space, provide a short description of the space, and a price per night.
- Users should be able to offer a range of dates where their space is available.
- Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
- Nights for which a space has already been booked should not be available for users to book that space.
- Until a user has confirmed a booking request, that space can still be booked for that night.

## Nice-to-haves

- Users should receive an email whenever one of the following happens:
  - They sign up
  - They create a space
  - They update a space
  - A user requests to book their space
  - They confirm a request
  - They request to book a space
  - Their request to book a space is confirmed
  - Their request to book a space is denied
- Users should receive a text message to a provided number whenever one of the following happens:
  - A user requests to book their space
  - Their request to book a space is confirmed
  - Their request to book a space is denied
  - A ‘chat’ functionality once a space has been booked, allowing users whose space-booking request has been confirmed to chat with the user that owns - that space
  - Basic payment implementation though Stripe.


## User stories
As a user,  
So I can use Makersbnb everyday,  
I want to be able to sign up.

As a user,  
So I can rent put my property,  
I'd like to add a new space.

As a user,  
So I can advertise my space,  
I'd like to add name, description, price per night.

As a user,  
So that I can go on Holiday,  
I'd like to book a space.  

## Installation
 - Install PostgresSQL https://node-postgres.com
 - Install npm and nodejs https://www.npmjs.com/get-npm
 - Create the database using the database_setup.js program

## Testing
 - Install cypress https://www.cypress.io/
 - Start the server node app.js
 - Run all of the tests

## The Tech Stack
**Database:** Node-postgres, based on the theory that we already knew it and its straight forward  
**Model:** NodeJS, because we need to interact dynamically with the database and the controller  
**Controller:** Express, JavaScript - Express was a simple way of creating a JS based web server and it was new to the team  
**View:** HTML, CSS, jQuery - Industry standard and highly flexible  
**Feature Testing:** Cypress  
