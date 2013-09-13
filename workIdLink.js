/* START: workIdLinkJs v0.0.1 */

/* browser and NodeJs compatible */
(function(exports){

   // add new method to string
   if (typeof String.prototype.startsWith != 'function') {
      String.prototype.startsWith = function (str){
         return this.slice(0, str.length) == str;
      };
   }

   //add new method to string
   if (typeof String.prototype.endsWith != 'function') {
      String.prototype.endsWith = function (str){
         return this.slice(-str.length) == str;
      };
   }

   if (typeof String.prototype.trim != 'function') {  
      String.prototype.trim = function () {  
         return this.replace(/^\s+|\s+$/g,'');  
      };  
   }

   var typeMap = {};
   
   typeMap.hasOwnProperty = function(property) {
      return typeMap[property] !== undefined;
   };
   
   typeMap['arxiv'] = function (id) {
      if (id.toLowerCase().startsWith('arxiv.org')) return 'http://' + id;
      if (id.startsWith('arXiv:')) return 'http://arxiv.org/abs/' + id.substring(6);
      return 'http://arxiv.org/abs/' + id;
   };
   
   typeMap['asin'] = function (id) {
      if (id.toLowerCase().startsWith('amazon.') || id.startsWith('www.amazon.')) return 'http://' + id;
      return 'http://www.amazon.com/dp/' + id;
   };

   typeMap['bibcode'] = function (id) {
      if (id.toLowerCase().startsWith('adsabs.harvard.edu')) return 'http://' + id;
      return 'http://adsabs.harvard.edu/abs/' + id;
   };
   
   typeMap['doi'] = function (id) {
      if (id.toLowerCase().startsWith('dx.doi.org') || id.startsWith('dx.doi.org')) return 'http://' + id;
      return 'http://dx.doi.org/' + id;
   };

   /* we should find a better source */
   typeMap['isbn'] = function (id) {
      if (id.toLowerCase().startsWith('amazon.com/dp/')) return 'http://' + id;
      return 'http://www.amazon.com/dp/' + id.replace(/\-/g, '');
   };

   typeMap['jfm'] = function (id) {
      if (id.toLowerCase().startsWith('www.zentralblatt-math.org')) return 'http://' + id;
      return 'http://www.zentralblatt-math.org/zmath/en/search/?q=an:' + id + '&format=complete';
   };

   typeMap['jstor'] = function (id) {
      if (id.toLowerCase().startsWith('dx.doi.org') || id.startsWith('www.jstor.org')) return 'http://' + id;
      return 'http://www.jstor.org/stable/' + id;
   };

   typeMap['lccn'] = function (id) {
      if (id.toLowerCase().startsWith('lccn.loc.gov')) return 'http://' + id;
      return 'http://lccn.loc.gov/' + id;
   };

   typeMap['mr'] = function (id) {
      id = id.match(/[^\(]*/)[0];
      if (id.toLowerCase().startsWith('ams.org/mathscinet-getitem')) return 'http://' + id;
      return 'http://www.ams.org/mathscinet-getitem?mr=' + id;
   };

   typeMap['oclc'] = function (id) {
      if (id.toLowerCase().startsWith('worldcat.org')) return 'http://' + id;
      return 'http://www.worldcat.org/oclc/' + id;
   };

   typeMap['ol'] = function (id) {
      if (id.toLowerCase().startsWith('openlibrary.org/b/')) return 'http://' + id;
      return 'http://openlibrary.org/b/' + id;
   };
 
   typeMap['osti'] = function (id) {
      if (id.toLowerCase().startsWith('www.osti.gov')) return 'http://' + id;
      return 'http://www.osti.gov/energycitations/product.biblio.jsp?osti_id=' + id;
   };

   typeMap['pmc'] = function (id) {
      if (id.toLowerCase().startsWith('www.ncbi.nlm.nih.gov')) return 'http://' + id;
      return 'http://www.ncbi.nlm.nih.gov/pubmed/' + id;
   };

   typeMap['pmid'] = function (id) {
      if (id.toLowerCase().startsWith('www.ncbi.nlm.nih.gov')) return 'http://' + id;
      return 'http://www.ncbi.nlm.nih.gov/pubmed/' + id;
   };

   typeMap['rfc'] = function (id) {
      id = id.replace(/\s/g,'');
      id = id.toLowerCase();
      if (id.toLowerCase().startsWith('www.rfc-editor.org/rfc/')) return 'http://' + id;
      return 'http://www.rfc-editor.org/rfc/' + id + '.txt';
   };

   typeMap['ssrn'] = function (id) {
      if (id.toLowerCase().startsWith('papers.ssrn.com')) return 'http://' + id;
      return 'http://papers.ssrn.com/abstract_id=' + id;
   };

   typeMap['zbl'] = function (id) {
      if (id.toLowerCase().startsWith('zentralblatt-math.org')) return 'http://' + id;
      return 'http://zentralblatt-math.org/zmath/en/search/?q=an:' + id + '&format=complete';
   };

   typeMap[''] = function (id) {
      if (id.toLowerCase().startsWith('')) return 'http://' + id;
      return '' + id;
   };

   typeMap[''] = function (id) {
      if (id.toLowerCase().startsWith('')) return 'http://' + id;
      return '' + id;
   };

   typeMap[''] = function (id) {
      if (id.toLowerCase().startsWith('')) return 'http://' + id;
      return '' + id;
   };


   exports.getLink = function(id, type) {
      if (id == null) return null;
      id = id.trim();
      if (id.startsWith('http:') || id.startsWith('https:')) return id;
      if (type == null) return null;
      type = type.toLowerCase();
      if (!typeMap.hasOwnProperty(type)) return null;
      return typeMap[type](id);
    };

})(typeof exports === 'undefined'? this['workIdLinkJs']={}: exports);

/* END: workIdLinkJs */

