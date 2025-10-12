Token Based System
- Who should generate the token? Server, it is not by client as it could be spoofed up ==> Security flaw
- Who validates the token? Server
- Client wants to read info from token 
- Token should be unique to a user
- Token should also have expiry time

Design this system: 
1. Generate and store it in DB? Unnecessary DB call

2. Token be self contained? 

Header.payload.signature

signature ==> header + payload + private key


Payload: user data?
id: 
insensitive data


How do you logout a user
Blacklist token

Airbnb <-->  Google to authenticate Jay




JWK URI


JWT Token
Header body signature

pair of Public Key and Private Key

Private Key ==> used to generate Token ==> Owned by Google

Public Key ==> Used by any third party to validate the token (JWK URI)

// Endpoint ==> They will expose the Public Key
Aud: Google
clientId: airbnb-x-app