var assert = require('assert');
var workIdLink = require('./workIdLink.js');

console.log('Types:');
console.log(   workIdLink.getTypes());

console.log('');
console.log('Testing:');

console.log('   null id returns null');
assert.equal(null, workIdLink.getLink(null, 'arxiv'));

console.log('   null type returns null');
assert.equal(null, workIdLink.getLink('id', null));

console.log('   http link returns link');
assert.equal('http://test.com', workIdLink.getLink('http://test.com', null));

var testTypes = [
   ['arxiv', '0706.0001', 'http://arxiv.org/abs/0706.0001'], 
   ['asin', '020530902X', 'http://www.amazon.com/dp/020530902X'], 
   ['bibcode', '1974AJ.....79..819H', 'http://adsabs.harvard.edu/abs/1974AJ.....79..819H'], 
   ['doi', '10.1038/news070508-7', 'http://dx.doi.org/10.1038/news070508-7'], 
   ['isbn', '0-205-30902-X', 'http://www.amazon.com/dp/020530902X'], 
   ['jfm', '54.0271.04', 'http://www.zentralblatt-math.org/zmath/en/search/?q=an:54.0271.04&format=complete'], 
   ['jstor', '1498220', 'http://www.jstor.org/stable/1498220'], 
   ['jstor', 'www.jstor.org/stable/1498220', 'http://www.jstor.org/stable/1498220'], 
   ['jstor', 'dx.doi.org/1498220', 'http://dx.doi.org/1498220'], 
   ['lccn', '2003556443', 'http://lccn.loc.gov/2003556443'], 
   ['mr', 'MR2025596', 'http://www.ams.org/mathscinet-getitem?mr=MR2025596'], 
   ['mr', 'MR2025596(2004i:13026)', 'http://www.ams.org/mathscinet-getitem?mr=MR2025596'], 
   ['oclc', '813147443', 'http://www.worldcat.org/oclc/813147443'], 
   ['ol', 'OL23086206M', 'http://openlibrary.org/b/OL23086206M'], 
   ['osti', '5102995', 'http://www.osti.gov/energycitations/product.biblio.jsp?osti_id=5102995'], 
   ['pmc', '1959482', 'http://www.ncbi.nlm.nih.gov/pubmed/1959482'], 
   ['pmid', '16911322', 'http://www.ncbi.nlm.nih.gov/pubmed/16911322'], 
   ['rfc', 'RFC 5000', 'http://www.rfc-editor.org/rfc/rfc5000.txt'], 
   ['ssrn', '2016874', 'http://papers.ssrn.com/abstract_id=2016874'], 
   ['zbl', 'pre06099612', 'http://zentralblatt-math.org/zmath/en/search/?q=an:pre06099612&format=complete'] 
];

for (i in testTypes) {
    var link = workIdLink.getLink(testTypes[i][1], testTypes[i][0]);
    console.log('   ' + testTypes[i][0] + ' ' + testTypes[i][1] + ' returns ' + testTypes[i][2]);
    assert.equal(link, testTypes[i][2]);
} 
