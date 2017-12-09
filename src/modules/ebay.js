const keywords = "mens%20pendleton";
const itemNum = "50";
const mens = "&aspectFilter.aspectName=Size+%28Men%27s%29"
const size = "&aspectFilter.aspectValueName=M";

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
    URL += mens+size;
    URL += "&outputSelector=AspectHistogram";


export const fetchItems = () => {
  return fetch(URL).then(function (response) {
    return response.json().then(function (json) {
      return json;
    })
  })
};
