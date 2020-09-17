# Changelog

### Core 0.1.10

- Enhanced typescript support to make it easier to create type definitions for Core Events and Requests.

### Core 0.1.9

- Added a special check to the processObject method to make sure it does not process constructor methods which is an issue 
for some cases when Javascript precompilers which add constructor as a enumerable property to classes.

- Added a licence file (MIT)

### Core 0.1.8

- Added support for @types for Typescript.