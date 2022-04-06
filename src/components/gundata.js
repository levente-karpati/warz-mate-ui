import * as React from 'react'
import axios from 'axios'
import OnHover from './onhoveritem'


const mockData = {
  "624459eebd7c65cab0c07cef":{
     "_id":"624459eebd7c65cab0c07cef",
     "section":"primary",
     "rank":"1",
     "name":"MP-40 (VG)",
     "type":"SMG",
     "pickRatio":9.27,
     "kdRatio":"1.10"
  },
  "624459eebd7c65cab0c07cf0":{
     "_id":"624459eebd7c65cab0c07cf0",
     "section":"primary",
     "rank":"2",
     "name":"Cooper Carbine (VG)",
     "type":"AR",
     "pickRatio":7.76,
     "kdRatio":"0.95"
  },
  "624459eebd7c65cab0c07cf1":{
     "_id":"624459eebd7c65cab0c07cf1",
     "section":"primary",
     "rank":"3",
     "name":"Kar98k (MW)",
     "type":"Rifle",
     "pickRatio":7.58,
     "kdRatio":"1.03"
  },
  "624459eebd7c65cab0c07cf2":{
     "_id":"624459eebd7c65cab0c07cf2",
     "section":"primary",
     "rank":"4",
     "name":"Swiss K31 (CW)",
     "type":"Sniper",
     "pickRatio":5.62,
     "kdRatio":"1.09"
  },
  "624459eebd7c65cab0c07cf3":{
     "_id":"624459eebd7c65cab0c07cf3",
     "section":"primary",
     "rank":"5",
     "name":"Automaton (VG)",
     "type":"AR",
     "pickRatio":4.42,
     "kdRatio":"1.35"
  },
  "624459eebd7c65cab0c07cf4":{
     "_id":"624459eebd7c65cab0c07cf4",
     "section":"primary",
     "rank":"6",
     "name":"Owen Gun (VG)",
     "type":"SMG",
     "pickRatio":3.63,
     "kdRatio":"1.50"
  },
  "624459eebd7c65cab0c07cf5":{
     "_id":"624459eebd7c65cab0c07cf5",
     "section":"primary",
     "rank":"7",
     "name":"Welgun (VG)",
     "type":"SMG",
     "pickRatio":3.3,
     "kdRatio":"1.28"
  },
  "624459eebd7c65cab0c07cf6":{
     "_id":"624459eebd7c65cab0c07cf6",
     "section":"primary",
     "rank":"8",
     "name":"Bren (VG)",
     "type":"LMG",
     "pickRatio":3.2,
     "kdRatio":"1.20"
  },
  "624459eebd7c65cab0c07cf7":{
     "_id":"624459eebd7c65cab0c07cf7",
     "section":"primary",
     "rank":"9",
     "name":"STG44 (VG)",
     "type":"AR",
     "pickRatio":2.97,
     "kdRatio":"0.86"
  },
  "624459eebd7c65cab0c07cf8":{
     "_id":"624459eebd7c65cab0c07cf8",
     "section":"primary",
     "rank":"10",
     "name":"AK-47 (CW)",
     "type":"AR",
     "pickRatio":2.91,
     "kdRatio":"1.11"
  },
  "624459eebd7c65cab0c07cf9":{
     "_id":"624459eebd7c65cab0c07cf9",
     "section":"primary",
     "rank":"11",
     "name":"XM4 (CW)",
     "type":"AR",
     "pickRatio":2.61,
     "kdRatio":"1.13"
  },
  "624459eebd7c65cab0c07cfa":{
     "_id":"624459eebd7c65cab0c07cfa",
     "section":"primary",
     "rank":"12",
     "name":"PPSh-41 (VG)",
     "type":"SMG",
     "pickRatio":2.47,
     "kdRatio":"0.95"
  },
  "624459eebd7c65cab0c07cfb":{
     "_id":"624459eebd7c65cab0c07cfb",
     "section":"primary",
     "rank":"13",
     "name":"Grau 5.56 (MW)",
     "type":"AR",
     "pickRatio":2.11,
     "kdRatio":"0.89"
  },
  "624459eebd7c65cab0c07cfc":{
     "_id":"624459eebd7c65cab0c07cfc",
     "section":"primary",
     "rank":"14",
     "name":"M4A1 (MW)",
     "type":"AR",
     "pickRatio":2.11,
     "kdRatio":"0.82"
  },
  "624459eebd7c65cab0c07cfd":{
     "_id":"624459eebd7c65cab0c07cfd",
     "section":"primary",
     "rank":"15",
     "name":"M13 (MW)",
     "type":"AR",
     "pickRatio":2.06,
     "kdRatio":"0.84"
  },
  "624459eebd7c65cab0c07cfe":{
     "_id":"624459eebd7c65cab0c07cfe",
     "section":"primary",
     "rank":"16",
     "name":"Milano 821 (CW)",
     "type":"SMG",
     "pickRatio":1.98,
     "kdRatio":"0.97"
  },
  "624459eebd7c65cab0c07cff":{
     "_id":"624459eebd7c65cab0c07cff",
     "section":"primary",
     "rank":"17",
     "name":"Kilo 141 (MW)",
     "type":"AR",
     "pickRatio":1.93,
     "kdRatio":"0.78"
  },
  "624459eebd7c65cab0c07d00":{
     "_id":"624459eebd7c65cab0c07d00",
     "section":"primary",
     "rank":"18",
     "name":"MAC-10 (CW)",
     "type":"SMG",
     "pickRatio":1.65,
     "kdRatio":"0.95"
  },
  "624459eebd7c65cab0c07d01":{
     "_id":"624459eebd7c65cab0c07d01",
     "section":"primary",
     "rank":"19",
     "name":"Kar98k (VG)",
     "type":"Sniper",
     "pickRatio":1.6,
     "kdRatio":"0.94"
  },
  "624459eebd7c65cab0c07d02":{
     "_id":"624459eebd7c65cab0c07d02",
     "section":"primary",
     "rank":"20",
     "name":"Vargo 52 (CW)",
     "type":"AR",
     "pickRatio":1.48,
     "kdRatio":"1.24"
  },
  "624459eebd7c65cab0c07d03":{
     "_id":"624459eebd7c65cab0c07d03",
     "section":"primary",
     "rank":"21",
     "name":"FARA 83 (CW)",
     "type":"AR",
     "pickRatio":1.41,
     "kdRatio":"0.89"
  },
  "624459eebd7c65cab0c07d04":{
     "_id":"624459eebd7c65cab0c07d04",
     "section":"primary",
     "rank":"22",
     "name":"OTs 9 (CW)",
     "type":"SMG",
     "pickRatio":1.36,
     "kdRatio":"1.11"
  },
  "624459eebd7c65cab0c07d05":{
     "_id":"624459eebd7c65cab0c07d05",
     "section":"primary",
     "rank":"23",
     "name":"MP5 (MW)",
     "type":"SMG",
     "pickRatio":1.34,
     "kdRatio":"0.91"
  },
  "624459eebd7c65cab0c07d06":{
     "_id":"624459eebd7c65cab0c07d06",
     "section":"primary",
     "rank":"24",
     "name":"Armaguerra 43 (VG)",
     "type":"SMG",
     "pickRatio":1.32,
     "kdRatio":"1.21"
  },
  "624459eebd7c65cab0c07d07":{
     "_id":"624459eebd7c65cab0c07d07",
     "section":"primary",
     "rank":"25",
     "name":"BAR (VG)",
     "type":"AR",
     "pickRatio":1.31,
     "kdRatio":"0.66"
  },
  "624459eebd7c65cab0c07d08":{
     "_id":"624459eebd7c65cab0c07d08",
     "section":"primary",
     "rank":"26",
     "name":"KG M40 (VG)",
     "type":"AR",
     "pickRatio":1.22,
     "kdRatio":"1.03"
  },
  "624459eebd7c65cab0c07d09":{
     "_id":"624459eebd7c65cab0c07d09",
     "section":"primary",
     "rank":"27",
     "name":"MP7 (MW)",
     "type":"SMG",
     "pickRatio":1.14,
     "kdRatio":"0.85"
  },
  "624459eebd7c65cab0c07d0a":{
     "_id":"624459eebd7c65cab0c07d0a",
     "section":"primary",
     "rank":"28",
     "name":"Krig 6 (CW)",
     "type":"AR",
     "pickRatio":1.09,
     "kdRatio":"0.80"
  },
  "624459eebd7c65cab0c07d0b":{
     "_id":"624459eebd7c65cab0c07d0b",
     "section":"primary",
     "rank":"29",
     "name":"HDR (MW)",
     "type":"Sniper",
     "pickRatio":1.08,
     "kdRatio":"0.75"
  },
  "624459eebd7c65cab0c07d0c":{
     "_id":"624459eebd7c65cab0c07d0c",
     "section":"primary",
     "rank":"30",
     "name":"SP-R 208 (MW)",
     "type":"Rifle",
     "pickRatio":1.04,
     "kdRatio":"0.98"
  },
  "624459eebd7c65cab0c07d0d":{
     "_id":"624459eebd7c65cab0c07d0d",
     "section":"primary",
     "rank":"31",
     "name":"Bullfrog (CW)",
     "type":"SMG",
     "pickRatio":1.02,
     "kdRatio":"0.89"
  },
  "624459eebd7c65cab0c07d0e":{
     "_id":"624459eebd7c65cab0c07d0e",
     "section":"primary",
     "rank":"32",
     "name":"Type 100 (VG)",
     "type":"SMG",
     "pickRatio":0.98,
     "kdRatio":"1.13"
  },
  "624459eebd7c65cab0c07d0f":{
     "_id":"624459eebd7c65cab0c07d0f",
     "section":"primary",
     "rank":"33",
     "name":"CR-56 AMAX (MW)",
     "type":"AR",
     "pickRatio":0.79,
     "kdRatio":"1.01"
  },
  "624459eebd7c65cab0c07d10":{
     "_id":"624459eebd7c65cab0c07d10",
     "section":"primary",
     "rank":"34",
     "name":"MP5 (CW)",
     "type":"SMG",
     "pickRatio":0.74,
     "kdRatio":"0.94"
  },
  "624459eebd7c65cab0c07d11":{
     "_id":"624459eebd7c65cab0c07d11",
     "section":"primary",
     "rank":"35",
     "name":"C58 (CW)",
     "type":"AR",
     "pickRatio":0.69,
     "kdRatio":"1.22"
  },
  "624459eebd7c65cab0c07d12":{
     "_id":"624459eebd7c65cab0c07d12",
     "section":"primary",
     "rank":"36",
     "name":"AX-50 (MW)",
     "type":"Sniper",
     "pickRatio":0.58,
     "kdRatio":"0.68"
  },
  "624459eebd7c65cab0c07d13":{
     "_id":"624459eebd7c65cab0c07d13",
     "section":"primary",
     "rank":"37",
     "name":"PPSh-41 (CW)",
     "type":"SMG",
     "pickRatio":0.53,
     "kdRatio":"0.94"
  },
  "624459eebd7c65cab0c07d14":{
     "_id":"624459eebd7c65cab0c07d14",
     "section":"primary",
     "rank":"38",
     "name":"AS44 (VG)",
     "type":"AR",
     "pickRatio":0.5,
     "kdRatio":"1.06"
  },
  "624459eebd7c65cab0c07d15":{
     "_id":"624459eebd7c65cab0c07d15",
     "section":"primary",
     "rank":"39",
     "name":"DP27 (VG)",
     "type":"LMG",
     "pickRatio":0.5,
     "kdRatio":"0.95"
  },
  "624459eebd7c65cab0c07d16":{
     "_id":"624459eebd7c65cab0c07d16",
     "section":"primary",
     "rank":"40",
     "name":"FFAR 1 (CW)",
     "type":"AR",
     "pickRatio":0.49,
     "kdRatio":"0.88"
  },
  "624459eebd7c65cab0c07d17":{
     "_id":"624459eebd7c65cab0c07d17",
     "section":"primary",
     "rank":"41",
     "name":"PKM (MW)",
     "type":"LMG",
     "pickRatio":0.44,
     "kdRatio":"0.84"
  },
  "624459eebd7c65cab0c07d18":{
     "_id":"624459eebd7c65cab0c07d18",
     "section":"primary",
     "rank":"42",
     "name":"RAM-7 (MW)",
     "type":"AR",
     "pickRatio":0.44,
     "kdRatio":"1.00"
  },
  "624459eebd7c65cab0c07d19":{
     "_id":"624459eebd7c65cab0c07d19",
     "section":"primary",
     "rank":"43",
     "name":"LC10 (CW)",
     "type":"SMG",
     "pickRatio":0.41,
     "kdRatio":"0.90"
  },
  "624459eebd7c65cab0c07d1a":{
     "_id":"624459eebd7c65cab0c07d1a",
     "section":"primary",
     "rank":"44",
     "name":"Pelington 703 (CW)",
     "type":"Sniper",
     "pickRatio":0.38,
     "kdRatio":"0.76"
  },
  "624459eebd7c65cab0c07d1b":{
     "_id":"624459eebd7c65cab0c07d1b",
     "section":"primary",
     "rank":"45",
     "name":"LAPA (CW)",
     "type":"SMG",
     "pickRatio":0.37,
     "kdRatio":"1.25"
  },
  "624459eebd7c65cab0c07d1c":{
     "_id":"624459eebd7c65cab0c07d1c",
     "section":"primary",
     "rank":"46",
     "name":"LW3 - Tundra (CW)",
     "type":"Sniper",
     "pickRatio":0.35,
     "kdRatio":"0.71"
  },
  "624459eebd7c65cab0c07d1d":{
     "_id":"624459eebd7c65cab0c07d1d",
     "section":"primary",
     "rank":"47",
     "name":"AK-74u (CW)",
     "type":"SMG",
     "pickRatio":0.32,
     "kdRatio":"0.72"
  },
  "624459eebd7c65cab0c07d1e":{
     "_id":"624459eebd7c65cab0c07d1e",
     "section":"primary",
     "rank":"48",
     "name":"MG42 (VG)",
     "type":"LMG",
     "pickRatio":0.31,
     "kdRatio":"0.95"
  },
  "624459eebd7c65cab0c07d1f":{
     "_id":"624459eebd7c65cab0c07d1f",
     "section":"primary",
     "rank":"49",
     "name":"M1912 (VG)",
     "type":"SMG",
     "pickRatio":0.31,
     "kdRatio":"0.82"
  },
  "624459eebd7c65cab0c07d20":{
     "_id":"624459eebd7c65cab0c07d20",
     "section":"primary",
     "rank":"50",
     "name":"Sten (VG)",
     "type":"SMG",
     "pickRatio":0.3,
     "kdRatio":"1.03"
  },
  "624459eebd7c65cab0c07d21":{
     "_id":"624459eebd7c65cab0c07d21",
     "section":"primary",
     "rank":"51",
     "name":"3-Line Rifle (VG)",
     "type":"Sniper",
     "pickRatio":0.3,
     "kdRatio":"0.79"
  },
  "624459eebd7c65cab0c07d22":{
     "_id":"624459eebd7c65cab0c07d22",
     "section":"primary",
     "rank":"52",
     "name":"Volkssturmgewehr (VG)",
     "type":"AR",
     "pickRatio":0.3,
     "kdRatio":"0.91"
  },
  "624459eebd7c65cab0c07d23":{
     "_id":"624459eebd7c65cab0c07d23",
     "section":"primary",
     "rank":"53",
     "name":"EM2 (CW)",
     "type":"AR",
     "pickRatio":0.27,
     "kdRatio":"1.27"
  },
  "624459eebd7c65cab0c07d24":{
     "_id":"624459eebd7c65cab0c07d24",
     "section":"primary",
     "rank":"54",
     "name":"AUG (MW)",
     "type":"SMG",
     "pickRatio":0.24,
     "kdRatio":"0.73"
  },
  "624459eebd7c65cab0c07d25":{
     "_id":"624459eebd7c65cab0c07d25",
     "section":"primary",
     "rank":"55",
     "name":"Riot Shield (MW)",
     "type":"Melee",
     "pickRatio":0.22,
     "kdRatio":"1.05"
  },
  "624459eebd7c65cab0c07d26":{
     "_id":"624459eebd7c65cab0c07d26",
     "section":"primary",
     "rank":"56",
     "name":"P90 (MW)",
     "type":"SMG",
     "pickRatio":0.22,
     "kdRatio":"0.78"
  },
  "624459eebd7c65cab0c07d27":{
     "_id":"624459eebd7c65cab0c07d27",
     "section":"primary",
     "rank":"57",
     "name":"AK-47 (MW)",
     "type":"AR",
     "pickRatio":0.21,
     "kdRatio":"0.75"
  },
  "624459eebd7c65cab0c07d28":{
     "_id":"624459eebd7c65cab0c07d28",
     "section":"primary",
     "rank":"58",
     "name":"Fennec (MW)",
     "type":"SMG",
     "pickRatio":0.21,
     "kdRatio":"0.82"
  },
  "624459eebd7c65cab0c07d29":{
     "_id":"624459eebd7c65cab0c07d29",
     "section":"primary",
     "rank":"59",
     "name":"Bruen Mk9 (MW)",
     "type":"LMG",
     "pickRatio":0.19,
     "kdRatio":"0.94"
  },
  "624459eebd7c65cab0c07d2a":{
     "_id":"624459eebd7c65cab0c07d2a",
     "section":"primary",
     "rank":"60",
     "name":"NZ-41 (VG)",
     "type":"AR",
     "pickRatio":0.17,
     "kdRatio":"0.72"
  },
  "624459eebd7c65cab0c07d2b":{
     "_id":"624459eebd7c65cab0c07d2b",
     "section":"primary",
     "rank":"61",
     "name":"Type 99 (VG)",
     "type":"Sniper",
     "pickRatio":0.17,
     "kdRatio":"0.69"
  },
  "624459eebd7c65cab0c07d2c":{
     "_id":"624459eebd7c65cab0c07d2c",
     "section":"primary",
     "rank":"62",
     "name":"AS VAL (MW)",
     "type":"AR",
     "pickRatio":0.17,
     "kdRatio":"0.90"
  },
  "624459eebd7c65cab0c07d2d":{
     "_id":"624459eebd7c65cab0c07d2d",
     "section":"primary",
     "rank":"63",
     "name":"CX-9 (MW)",
     "type":"SMG",
     "pickRatio":0.16,
     "kdRatio":"0.99"
  },
  "624459eebd7c65cab0c07d2e":{
     "_id":"624459eebd7c65cab0c07d2e",
     "section":"primary",
     "rank":"64",
     "name":"M82 (CW)",
     "type":"Sniper",
     "pickRatio":0.15,
     "kdRatio":"0.64"
  },
  "624459eebd7c65cab0c07d2f":{
     "_id":"624459eebd7c65cab0c07d2f",
     "section":"primary",
     "rank":"65",
     "name":"AN-94 (MW)",
     "type":"AR",
     "pickRatio":0.15,
     "kdRatio":"0.75"
  },
  "624459eebd7c65cab0c07d30":{
     "_id":"624459eebd7c65cab0c07d30",
     "section":"primary",
     "rank":"66",
     "name":"Uzi (MW)",
     "type":"SMG",
     "pickRatio":0.14,
     "kdRatio":"0.83"
  },
  "624459eebd7c65cab0c07d31":{
     "_id":"624459eebd7c65cab0c07d31",
     "section":"primary",
     "rank":"67",
     "name":"RPD (CW)",
     "type":"LMG",
     "pickRatio":0.13,
     "kdRatio":"0.89"
  },
  "624459eebd7c65cab0c07d32":{
     "_id":"624459eebd7c65cab0c07d32",
     "section":"primary",
     "rank":"68",
     "name":"M16 (CW)",
     "type":"Rifle",
     "pickRatio":0.13,
     "kdRatio":"0.83"
  },
  "624459eebd7c65cab0c07d33":{
     "_id":"624459eebd7c65cab0c07d33",
     "section":"primary",
     "rank":"69",
     "name":"JAK-12 (MW)",
     "type":"Shotgun",
     "pickRatio":0.13,
     "kdRatio":"1.02"
  },
  "624459eebd7c65cab0c07d34":{
     "_id":"624459eebd7c65cab0c07d34",
     "section":"primary",
     "rank":"70",
     "name":"PP19 Bizon (MW)",
     "type":"SMG",
     "pickRatio":0.13,
     "kdRatio":"0.76"
  },
  "624459eebd7c65cab0c07d35":{
     "_id":"624459eebd7c65cab0c07d35",
     "section":"primary",
     "rank":"71",
     "name":"FAL (MW)",
     "type":"AR",
     "pickRatio":0.12,
     "kdRatio":"0.93"
  },
  "624459eebd7c65cab0c07d36":{
     "_id":"624459eebd7c65cab0c07d36",
     "section":"primary",
     "rank":"72",
     "name":"Gallo SA12 (CW)",
     "type":"Shotgun",
     "pickRatio":0.11,
     "kdRatio":"0.95"
  },
  "624459eebd7c65cab0c07d37":{
     "_id":"624459eebd7c65cab0c07d37",
     "section":"primary",
     "rank":"73",
     "name":"FiNN LMG (MW)",
     "type":"LMG",
     "pickRatio":0.11,
     "kdRatio":"0.84"
  },
  "624459eebd7c65cab0c07d38":{
     "_id":"624459eebd7c65cab0c07d38",
     "section":"primary",
     "rank":"74",
     "name":"Stoner 63 (CW)",
     "type":"LMG",
     "pickRatio":0.11,
     "kdRatio":"0.74"
  },
  "624459eebd7c65cab0c07d39":{
     "_id":"624459eebd7c65cab0c07d39",
     "section":"primary",
     "rank":"75",
     "name":"QBZ-83 (CW)",
     "type":"AR",
     "pickRatio":0.11,
     "kdRatio":"0.89"
  },
  "624459eebd7c65cab0c07d3a":{
     "_id":"624459eebd7c65cab0c07d3a",
     "section":"primary",
     "rank":"76",
     "name":"FN Scar 17 (MW)",
     "type":"AR",
     "pickRatio":0.1,
     "kdRatio":"0.76"
  },
  "624459eebd7c65cab0c07d3b":{
     "_id":"624459eebd7c65cab0c07d3b",
     "section":"primary",
     "rank":"77",
     "name":"Oden (MW)",
     "type":"AR",
     "pickRatio":0.1,
     "kdRatio":"0.93"
  },
  "624459eebd7c65cab0c07d3c":{
     "_id":"624459eebd7c65cab0c07d3c",
     "section":"primary",
     "rank":"78",
     "name":"Dragunov (MW)",
     "type":"Sniper",
     "pickRatio":0.1,
     "kdRatio":"0.39"
  },
  "624459eebd7c65cab0c07d3d":{
     "_id":"624459eebd7c65cab0c07d3d",
     "section":"primary",
     "rank":"79",
     "name":"Gorenko Anti-Tank Rifle (VG)",
     "type":"Sniper",
     "pickRatio":0.09,
     "kdRatio":"0.65"
  },
  "624459eebd7c65cab0c07d3e":{
     "_id":"624459eebd7c65cab0c07d3e",
     "section":"primary",
     "rank":"80",
     "name":"ZRG 20mm (CW)",
     "type":"Sniper",
     "pickRatio":0.08,
     "kdRatio":"0.88"
  },
  "624459eebd7c65cab0c07d3f":{
     "_id":"624459eebd7c65cab0c07d3f",
     "section":"primary",
     "rank":"81",
     "name":"Crossbow (MW)",
     "type":"Rifle",
     "pickRatio":0.08,
     "kdRatio":"0.94"
  },
  "624459eebd7c65cab0c07d40":{
     "_id":"624459eebd7c65cab0c07d40",
     "section":"primary",
     "rank":"82",
     "name":"Streetsweeper (CW)",
     "type":"Shotgun",
     "pickRatio":0.08,
     "kdRatio":"1.00"
  },
  "624459eebd7c65cab0c07d41":{
     "_id":"624459eebd7c65cab0c07d41",
     "section":"primary",
     "rank":"83",
     "name":"Rytec AMR (MW)",
     "type":"Sniper",
     "pickRatio":0.08,
     "kdRatio":"0.74"
  },
  "624459eebd7c65cab0c07d42":{
     "_id":"624459eebd7c65cab0c07d42",
     "section":"primary",
     "rank":"84",
     "name":"Model 680 (MW)",
     "type":"Shotgun",
     "pickRatio":0.07,
     "kdRatio":"0.49"
  },
  "624459eebd7c65cab0c07d43":{
     "_id":"624459eebd7c65cab0c07d43",
     "section":"primary",
     "rank":"85",
     "name":"ISO (MW)",
     "type":"SMG",
     "pickRatio":0.07,
     "kdRatio":"0.77"
  },
  "624459eebd7c65cab0c07d44":{
     "_id":"624459eebd7c65cab0c07d44",
     "section":"primary",
     "rank":"86",
     "name":"DMR 14 (CW)",
     "type":"Rifle",
     "pickRatio":0.07,
     "kdRatio":"0.92"
  },
  "624459eebd7c65cab0c07d45":{
     "_id":"624459eebd7c65cab0c07d45",
     "section":"primary",
     "rank":"87",
     "name":"MG 82 (CW)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d46":{
     "_id":"624459eebd7c65cab0c07d46",
     "section":"primary",
     "rank":"88",
     "name":"M91 (MW)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d47":{
     "_id":"624459eebd7c65cab0c07d47",
     "section":"primary",
     "rank":"89",
     "name":"Whitley (VG)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d48":{
     "_id":"624459eebd7c65cab0c07d48",
     "section":"primary",
     "rank":"90",
     "name":"Type 11 (VG)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d49":{
     "_id":"624459eebd7c65cab0c07d49",
     "section":"primary",
     "rank":"91",
     "name":"Groza (CW)",
     "type":"AR",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d4a":{
     "_id":"624459eebd7c65cab0c07d4a",
     "section":"primary",
     "rank":"92",
     "name":"M1 Garand (VG)",
     "type":"Rifle",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d4b":{
     "_id":"624459eebd7c65cab0c07d4b",
     "section":"primary",
     "rank":"93",
     "name":"ITRA Burst (VG)",
     "type":"AR",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d4c":{
     "_id":"624459eebd7c65cab0c07d4c",
     "section":"primary",
     "rank":"94",
     "name":"SVT-40 (VG)",
     "type":"Rifle",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d4d":{
     "_id":"624459eebd7c65cab0c07d4d",
     "section":"primary",
     "rank":"95",
     "name":"Origin 12 Shotgun (MW)",
     "type":"Shotgun",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d4e":{
     "_id":"624459eebd7c65cab0c07d4e",
     "section":"primary",
     "rank":"96",
     "name":"Grav (CW)",
     "type":"AR",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d4f":{
     "_id":"624459eebd7c65cab0c07d4f",
     "section":"primary",
     "rank":"97",
     "name":"Holger-26 (MW)",
     "type":"LMG",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d50":{
     "_id":"624459eebd7c65cab0c07d50",
     "section":"primary",
     "rank":"98",
     "name":"Combat Shield (VG)",
     "type":"Melee",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d51":{
     "_id":"624459eebd7c65cab0c07d51",
     "section":"primary",
     "rank":"99",
     "name":"R9-0 Shotgun (MW)",
     "type":"Shotgun",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d52":{
     "_id":"624459eebd7c65cab0c07d52",
     "section":"primary",
     "rank":"100",
     "name":"TEC-9 (CW)",
     "type":"SMG",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d53":{
     "_id":"624459eebd7c65cab0c07d53",
     "section":"primary",
     "rank":"101",
     "name":"MK2 Carbine (MW)",
     "type":"Rifle",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d54":{
     "_id":"624459eebd7c65cab0c07d54",
     "section":"primary",
     "rank":"102",
     "name":"AUG (CW)",
     "type":"Rifle",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d55":{
     "_id":"624459eebd7c65cab0c07d55",
     "section":"primary",
     "rank":"103",
     "name":"Striker 45 (MW)",
     "type":"SMG",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d56":{
     "_id":"624459eebd7c65cab0c07d56",
     "section":"primary",
     "rank":"104",
     "name":"SKS (MW)",
     "type":"Rifle",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d57":{
     "_id":"624459eebd7c65cab0c07d57",
     "section":"primary",
     "rank":"105",
     "name":"RAAL MG (MW)",
     "type":"LMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d58":{
     "_id":"624459eebd7c65cab0c07d58",
     "section":"primary",
     "rank":"106",
     "name":"SA87 (MW)",
     "type":"LMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d59":{
     "_id":"624459eebd7c65cab0c07d59",
     "section":"primary",
     "rank":"107",
     "name":"KSP 45 (CW)",
     "type":"SMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d5a":{
     "_id":"624459eebd7c65cab0c07d5a",
     "section":"primary",
     "rank":"108",
     "name":"725 (MW)",
     "type":"Shotgun",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d5b":{
     "_id":"624459eebd7c65cab0c07d5b",
     "section":"primary",
     "rank":"109",
     "name":"Double Barrel (VG)",
     "type":"Shotgun",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d5c":{
     "_id":"624459eebd7c65cab0c07d5c",
     "section":"primary",
     "rank":"110",
     "name":"EBR-14 (MW)",
     "type":"Rifle",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d5d":{
     "_id":"624459eebd7c65cab0c07d5d",
     "section":"primary",
     "rank":"111",
     "name":"Nail Gun (CW)",
     "type":"SMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d5e":{
     "_id":"624459eebd7c65cab0c07d5e",
     "section":"primary",
     "rank":"112",
     "name":"FR 5.56 (MW)",
     "type":"AR",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d5f":{
     "_id":"624459eebd7c65cab0c07d5f",
     "section":"primary",
     "rank":"113",
     "name":"G-43 (VG)",
     "type":"Rifle",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d60":{
     "_id":"624459eebd7c65cab0c07d60",
     "section":"primary",
     "rank":"114",
     "name":"Einhorn Revolving (VG)",
     "type":"Shotgun",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d61":{
     "_id":"624459eebd7c65cab0c07d61",
     "section":"primary",
     "rank":"115",
     "name":"M60 (CW)",
     "type":"LMG",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d62":{
     "_id":"624459eebd7c65cab0c07d62",
     "section":"primary",
     "rank":"116",
     "name":"Type 63 (CW)",
     "type":"Rifle",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d63":{
     "_id":"624459eebd7c65cab0c07d63",
     "section":"primary",
     "rank":"117",
     "name":"Gracey Auto (VG)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d64":{
     "_id":"624459eebd7c65cab0c07d64",
     "section":"primary",
     "rank":"118",
     "name":"VLK Rogue (MW)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d65":{
     "_id":"624459eebd7c65cab0c07d65",
     "section":"primary",
     "rank":"119",
     "name":"MG34 (MW)",
     "type":"LMG",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d66":{
     "_id":"624459eebd7c65cab0c07d66",
     "section":"primary",
     "rank":"120",
     "name":"Hauer 77 (CW)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d67":{
     "_id":"624459eebd7c65cab0c07d67",
     "section":"primary",
     "rank":"121",
     "name":"Combat Shotgun (VG)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d68":{
     "_id":"624459eebd7c65cab0c07d68",
     "section":"primary",
     "rank":"122",
     "name":"CARV.2 (CW)",
     "type":"Rifle",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d69":{
     "_id":"624459eebd7c65cab0c07d69",
     "section":"primary",
     "rank":"123",
     "name":"R1 Shadowhunter (CW)",
     "type":"Rifle",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "624459eebd7c65cab0c07d6a":{
     "_id":"624459eebd7c65cab0c07d6a",
     "section":"primary",
     "rank":"124",
     "name":"410 Ironhide (CW)",
     "type":"Shotgun",
     "pickRatio":0,
     "kdRatio":"N/A"
  }
}
//guns main styling
const gunsMainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111'
}
//guns embedded container styling
const dataContainer = {
  width: '85%',
  height: '100%',
  overflowY: 'scroll',
  scrollbarColor: 'black',
  scrollbarWidth: 'thin'
}
//gun item styling
const gunStyles = {
  width: '100%',
  height: '7%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid grey',
  fontSize: '0.8em',
  backgroundColor: '#b1b5d2'
}
const gunPropertyStyling = {
  width: '25%',
  height: "100%",
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center'
}
const gunHeaderStyling = {
  width: '25%',
  height: "100%",
  border: "1px solid grey",
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  backgroundColor: '#8594d6'
}

const searchBoxStyles = {
  width: '100%',
  height: '5%',
  fontSize: '1.2em',
  backgroundColor: 'white'
}
class Gundata extends React.Component  {
  //set default state
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      store: [],
      titleSorted: false,
      typeSorted: false,
      pickRatioSorted: false,
      kdRatioSorted: false
    };
  }

  handleChange = (event) => {
    var searchData = this.state.store.filter(o => o[Object.keys(o)[0]].name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState(
      {
        data: [...searchData]
      }
    )
  }

  //api call using axios for rss feed
  componentDidMount() {
    //store this in self for access from axios call
    var self = this;
    self.setState(
      {
        data: Object.entries(mockData).map((e) => ( { [e[0]]: e[1] } )),
        store: Object.entries(mockData).map((e) => ( { [e[0]]: e[1] } ))
      }
    );
    //use backend for warzone guns data
    // axios.get('http://localhost:3000/api/guns/all')
    // .then(function (res) {
    //  // set component state to response data
    //   self.setState(
    //     {
    //       data: Object.entries(res.data).map((e) => ( { [e[0]]: e[1] } )),
    //       store: Object.entries(res.data).map((e) => ( { [e[0]]: e[1] } ))
    //     }
    //   );
     
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });
  }

  //sort table items
  dataSort = (col) => {
    const newTableItems = this.state.data;
    switch (col) {
      case 0:
        //sort by title
        newTableItems.sort((a,b) => {
          var aName = a[Object.keys(a)[0]].name;
          var bName = b[Object.keys(b)[0]].name;
          if(this.state.titleSorted){
            this.setState({titleSorted: !this.state.titleSorted});
            return bName.localeCompare(aName);
          }
          else{
            this.setState({titleSorted: !this.state.titleSorted})
            return aName.localeCompare(bName);
          }
        });
        break;
      case 1:
        //sort by type
        //sort by title
        newTableItems.sort((a,b) => {
          var aType = a[Object.keys(a)[0]].type;
          var bType = b[Object.keys(b)[0]].type;
          if(this.state.typeSorted){
            this.setState({typeSorted: !this.state.typeSorted});
            return bType.localeCompare(aType);
          }
          else{
            this.setState({typeSorted: !this.state.typeSorted})
            return aType.localeCompare(bType);
          }
        });
        break;
      case 2:
        newTableItems.sort((a,b) => {
          var aPickRatio = a[Object.keys(a)[0]].pickRatio;
          var bPickRatio = b[Object.keys(b)[0]].pickRatio;
          if(this.state.pickRatioSorted){
            this.setState({pickRatioSorted: !this.state.pickRatioSorted});
            return bPickRatio - aPickRatio;
          }
          else{
            this.setState({pickRatioSorted: !this.state.pickRatioSorted})
            return aPickRatio - bPickRatio;
          }
        });
        break;
      case 3:
        newTableItems.sort((a,b) => {
          var aKdRatio = a[Object.keys(a)[0]].kdRatio;
          var bKdRatio = b[Object.keys(b)[0]].kdRatio;
          if(aKdRatio==="N/A") aKdRatio = 0;
          if(bKdRatio==="N/A") bKdRatio = 0;
          if(this.state.kdRatioSorted){
            this.setState({kdRatioSorted: !this.state.kdRatioSorted});
            return bKdRatio - aKdRatio;
          }
          else{
            this.setState({kdRatioSorted: !this.state.kdRatioSorted})
            return aKdRatio - bKdRatio;
          }
        });
        break;
      default:
        break;
    }
    this.setState({data: newTableItems });
  };

  //render html
  render() {
    return (
      <div style={gunsMainStyles}>
        <div style={dataContainer}>
          <input 
          placeholder={"Search for gun by name..."} 
          style={searchBoxStyles} 
          type={"text"}
          value={this.state.input}
          onChange={this.handleChange}></input>
        <li style={gunStyles}>
         <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(0)}>
            Rank
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(0)}>
            Title
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(1)}>
            Type
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(2)}>
            PickRatio
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(3)}>
            KD Ratio
          </OnHover>
        </li>
        {Object.keys(this.state.data).map((item , i) => (
            <li key={i} style={gunStyles}>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].name}</p>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].type}</p>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].pickRatio}%</p>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].kdRatio}</p>
            </li>
        ))}
        </div>
      </div>
    )
  }
}

export default Gundata;