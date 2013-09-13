workIdLink.js
============================

Javascript library that creates links from work identifiers.

## Functions

* getLink(id, type) - takes an id and an abbreviated type and if the type and id can 
   be matched returns a http url, otherwise returns a  null.

* getTypes() - returns a space delimited list of abbreviated types.

## Supported types
   arxiv asin bibcode doi isbn jfm jstor lccn mr oclc ol osti pmc pmid rfc ssrn zbl


## Using in a browser
   Include workIdLink.js and call ``workIdLinkJs.getLink('10.1038/news070508-7', 'doi')``.


## Using in [Node.js](http://nodejs.org/)
   Install ```npm install work-id-link-js```, require the module 
   ``var workIdLink = require('workIdLink.js');`` and call
   ``workIdLink.getLink('10.1038/news070508-7', 'doi')``.

   
## Contributing
   Contributions are welcome. Please make sure the unit test(runTest.js) reflects the
   changes and completes successfully. 
