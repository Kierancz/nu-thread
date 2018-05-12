export const fetchItems = (profile, query, pageNum) => {
  const brands =  profile.brands  || 'patagonia';
  const gender =  profile.gender  || 'Men';
  const size =    profile.upper   || 'M';
  const keywords = getFormattedQuery(brands);

  const genderAspect = "&aspectFilter.aspectName=Size+%28"+gender+"%27s%29"
  const sizeAspect = "&aspectFilter.aspectValueName="+size;
  const itemNum = "30";
  const pageNumber = pageNum? "&paginationInput.pageNumber="+pageNum : '';

  /*
  const fit = "&aspectFilter.aspectName=Fit";
  const fitVal = "&aspectFilter.aspectValueName=Slim%20Fit";
  const topRated = "&itemFilter(0).name=topRatedListing&itemFilter(0).value=true";
  */

  var URL = "https://temp-proxy.herokuapp.com/"
      URL += "http://svcs.ebay.com/services/search/FindingService/v1";
      URL += "?OPERATION-NAME=findItemsByKeywords";
      URL += "&SERVICE-VERSION=1.0.0";
      URL += "&SECURITY-APPNAME=KieranCz-rePsych-PRD-85d8a3c47-34097054";
      URL += "&GLOBAL-ID=EBAY-US";
      URL += "&RESPONSE-DATA-FORMAT=JSON";
      //URL += "&callback=_cb_findItemsByKeywords";
      URL += "&REST-PAYLOAD";
      URL += "&keywords="+keywords;
      URL += "&paginationInput.entriesPerPage="+itemNum;
      URL += pageNumber;
      URL += "&itemFilter(0).name=Condition";
      URL += "&itemFilter(0).value=Used";
      URL += genderAspect+sizeAspect;
      URL += "&outputSelector=AspectHistogram";
  //console.log("URL: ", URL);

  return fetch(URL).then(function (response) {
    return response.json().then(function (json) {
      console.log('raw data: ', json);
      //console.log('data items: ', json.findItemsByKeywordsResponse[0].searchResult[0].item);
      return json.findItemsByKeywordsResponse[0].searchResult[0].item;
    })
  })
};

// query formatted: "(brand1, brand2, brand3, ...) + query"
function getFormattedQuery(brands, query) {
  let formatted = '';
  if(Array.isArray(brands)) {
    formatted += '(';
    brands.forEach((brand, index) => {
      if(index === 0)   formatted += brand;
      else              formatted += ',' + brand;
    });
    formatted += ')';
  } else {
    formatted = brands;
  }
  if(query) formatted += ' ' + query;

  return encodeURIComponent(formatted);
}
