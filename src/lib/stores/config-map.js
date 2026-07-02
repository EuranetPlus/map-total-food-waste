import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "How much food are we wasting?",
  "subtitle": "In 2023, the European Union generated an average of 129 kg of food waste per person, with Cyprus recording the highest level at 286 kg per capita, followed by Denmark with 261 kg and Greece with 201 kg, while Spain had the lowest value at 54 kg.",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo,text_content\nBelgium,BE,146,false,\nBulgaria,BG,96,false,\nCzechia,CZ,98,false,\nDenmark,DK,261,false,\nGermany,DE,131,false,\nEstonia,EE,131,false,\nIreland,IE,157,false,\nGreece,EL,201,false,\nSpain,ES,54,false,\nFrance,FR,142,false,\nCroatia,HR,122,false,\nItaly,IT,138,false,\nCyprus,CY,286,true,Estimated value\nLatvia,LV,127,false,\nLithuania,LT,144,false,\nLuxembourg,LU,116,false,\nHungary,HU,88,false,\nMalta,MT,128,false,\nNetherlands,NL,116,false,\nAustria,AT,130,false,\nPoland,PL,127,false,\nPortugal,PT,183,false,\nRomania,RO,188,false,\nSlovenia,SI,78,false,\nSlovakia,SK,97,false,\nFinland,FI,115,false,\nSweden,SE,122,false,",
  "parsedData": [
    {
      "country": "Belgium",
      "id": "BE",
      "value": 146,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 96,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 98,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 261,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 131,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 131,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 157,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 201,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 54,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "France",
      "id": "FR",
      "value": 142,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 122,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 138,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 286,
      "extraInfo": true,
      "text_content": "Estimated value"
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 127,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 144,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 116,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 88,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 128,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 116,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 130,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 127,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 183,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 188,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 78,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 97,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 115,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 122,
      "extraInfo": false,
      "text_content": ""
    }
  ],
  "datasetType": "values",
  "datasetUnit": "fullNumbers",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "purple-red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": true,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "Eurostat (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "This map visualizes total food waste across all referenced economic activities (Statistical classification of economic activities in the European Community (NACE Rev. 2)) in the European Union.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://ec.europa.eu/eurostat/databrowser/view/env_wasfw/default/table?lang=en",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "50",
  "colorBarLastValue": "300",
  "customUnitLabelAvailable": true,
  "customUnitLabel": "kilograms per capita",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "How much food are we wasting?",
    "subtitle": "In 2023, the European Union generated an average of 129 kg of food waste per person, with Cyprus recording the highest level at 286 kg per capita, followed by Denmark with 261 kg and Greece with 201 kg, while Spain had the lowest value at 54 kg.",
    "textNoteDescription": "Note",
    "textNote": "This map visualizes total food waste across all referenced economic activities (Statistical classification of economic activities in the European Community (NACE Rev. 2)) in the European Union.",
    "textSourceDescription": "Source",
    "textSource": "Eurostat (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here",
    "extraInfo_CY": "Estimated value"
  },
  "clusters": [],
  "colorScale": null,
  "extraInfo_CY": "Estimated value"
});