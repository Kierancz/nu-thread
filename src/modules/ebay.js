export const fetchItems = (keys, gender, size) => {
  //const keywords = "mens%20pendleton";
  const keywords = encodeURIComponent(keys);
  console.log("keywords: ", keywords);
  const itemNum = "50";
  const genderAspect = "&aspectFilter.aspectName=Size+%28"+gender+"%27s%29"
  console.log('genderAspect: ', genderAspect);
  const sizeAspect = "&aspectFilter.aspectValueName="+size;
  console.log('sizeAspect: ', sizeAspect);

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
      URL += "&itemFilter(0).name=Condition";
      URL += "&itemFilter(0).value=Used";
      URL += genderAspect+sizeAspect;
      URL += "&outputSelector=AspectHistogram";
  console.log("URL: ", URL);

  return fetch(URL).then(function (response) {
    return response.json().then(function (json) {
      return json.findItemsByKeywordsResponse[0].searchResult[0].item;
    })
  })
};
