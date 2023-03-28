# Database Schema

## User model

### Schema

- name
- email
- password
- Date
- phone

---

## Application model

### Schema

- userId
- jobId
- Date
- Approved

## Revenue model

### schema

- balance
- userId

## Job model

- Name
- location
- Details
- start Date
- Date
- EmployerNo
- salary
- Hours

---

## Project

### - Year 2 University project

### - Hosted @ [https://helpkazi.herokuapp.com/](https://helpkazi.herokuapp.com/)

### info

Helpkazi is an online job booking system for maseno university

---

### Developers

1. [Stephen Mwau](https://github.com/MwauStephen)
2. [Alexander Karanja](https://github.com/aknjoroge)

---

### Public version

#### You will need to set up the configuration of the app for it to run on your local machine

### First

1. Install the packages `npm i`
2. Set up the config in `config.env`
   - Set the user
   - Set connection to mongoDB

```text
OWNER= ownerName
DBUSER = Mongo Database user
DBPASSWORD = Mongo Database password
DBSTRING = Mongo database connection string, provided in atlas console
TOKENDURATION = a token lifespan
COOKIEDURATION = cookie life span
```

> Database setup

```text
EMAILUSER = SMTP USER // info@example.com
EMAILPASSWORD = SMTP PASSWORD
EMAILHOST =  SMTP HOST example.com
EMAILPORT = SMTP PORT
EMAILFROM = User mail origin
NODE_TLS_REJECT_UNAUTHORIZED = send emails from a non-secure domain
```
