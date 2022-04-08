import * as React from 'react'
import axios from 'axios'
import OnHover from './onhoveritem'

const mockData = {
  "6240b7f41cbd1b11fcd678bd":{
     "_id":"6240b7f41cbd1b11fcd678bd",
     "section":"primaries",
     "rank":"1",
     "name":"MP-40 (VG)",
     "type":"SMG",
     "pickRatio":9.07,
     "kdRatio":"1.08"
  },
  "6240b7f41cbd1b11fcd678be":{
     "_id":"6240b7f41cbd1b11fcd678be",
     "section":"primaries",
     "rank":"2",
     "name":"Cooper Carbine (VG)",
     "type":"AR",
     "pickRatio":7.89,
     "kdRatio":"0.95"
  },
  "6240b7f41cbd1b11fcd678bf":{
     "_id":"6240b7f41cbd1b11fcd678bf",
     "section":"primaries",
     "rank":"3",
     "name":"Kar98k (MW)",
     "type":"Rifle",
     "pickRatio":7.18,
     "kdRatio":"1.01"
  },
  "6240b7f41cbd1b11fcd678c0":{
     "_id":"6240b7f41cbd1b11fcd678c0",
     "section":"primaries",
     "rank":"4",
     "name":"Swiss K31 (CW)",
     "type":"Sniper",
     "pickRatio":5.42,
     "kdRatio":"1.10"
  },
  "6240b7f41cbd1b11fcd678c1":{
     "_id":"6240b7f41cbd1b11fcd678c1",
     "section":"primaries",
     "rank":"5",
     "name":"Automaton (VG)",
     "type":"AR",
     "pickRatio":4.32,
     "kdRatio":"1.32"
  },
  "6240b7f41cbd1b11fcd678c2":{
     "_id":"6240b7f41cbd1b11fcd678c2",
     "section":"primaries",
     "rank":"6",
     "name":"Welgun (VG)",
     "type":"SMG",
     "pickRatio":3.67,
     "kdRatio":"1.29"
  },
  "6240b7f41cbd1b11fcd678c3":{
     "_id":"6240b7f41cbd1b11fcd678c3",
     "section":"primaries",
     "rank":"7",
     "name":"Bren (VG)",
     "type":"LMG",
     "pickRatio":3.4,
     "kdRatio":"1.22"
  },
  "6240b7f41cbd1b11fcd678c4":{
     "_id":"6240b7f41cbd1b11fcd678c4",
     "section":"primaries",
     "rank":"8",
     "name":"Owen Gun (VG)",
     "type":"SMG",
     "pickRatio":3.16,
     "kdRatio":"1.46"
  },
  "6240b7f41cbd1b11fcd678c5":{
     "_id":"6240b7f41cbd1b11fcd678c5",
     "section":"primaries",
     "rank":"9",
     "name":"STG44 (VG)",
     "type":"AR",
     "pickRatio":3.15,
     "kdRatio":"0.85"
  },
  "6240b7f41cbd1b11fcd678c6":{
     "_id":"6240b7f41cbd1b11fcd678c6",
     "section":"primaries",
     "rank":"10",
     "name":"AK-47 (CW)",
     "type":"AR",
     "pickRatio":2.94,
     "kdRatio":"1.12"
  },
  "6240b7f41cbd1b11fcd678c7":{
     "_id":"6240b7f41cbd1b11fcd678c7",
     "section":"primaries",
     "rank":"11",
     "name":"PPSh-41 (VG)",
     "type":"SMG",
     "pickRatio":2.69,
     "kdRatio":"0.95"
  },
  "6240b7f41cbd1b11fcd678c8":{
     "_id":"6240b7f41cbd1b11fcd678c8",
     "section":"primaries",
     "rank":"12",
     "name":"XM4 (CW)",
     "type":"AR",
     "pickRatio":2.37,
     "kdRatio":"1.08"
  },
  "6240b7f41cbd1b11fcd678c9":{
     "_id":"6240b7f41cbd1b11fcd678c9",
     "section":"primaries",
     "rank":"13",
     "name":"M13 (MW)",
     "type":"AR",
     "pickRatio":2.11,
     "kdRatio":"0.85"
  },
  "6240b7f41cbd1b11fcd678ca":{
     "_id":"6240b7f41cbd1b11fcd678ca",
     "section":"primaries",
     "rank":"14",
     "name":"M4A1 (MW)",
     "type":"AR",
     "pickRatio":2.11,
     "kdRatio":"0.83"
  },
  "6240b7f41cbd1b11fcd678cb":{
     "_id":"6240b7f41cbd1b11fcd678cb",
     "section":"primaries",
     "rank":"15",
     "name":"Grau 5.56 (MW)",
     "type":"AR",
     "pickRatio":1.94,
     "kdRatio":"0.89"
  },
  "6240b7f41cbd1b11fcd678cc":{
     "_id":"6240b7f41cbd1b11fcd678cc",
     "section":"primaries",
     "rank":"16",
     "name":"Kilo 141 (MW)",
     "type":"AR",
     "pickRatio":1.92,
     "kdRatio":"0.77"
  },
  "6240b7f41cbd1b11fcd678cd":{
     "_id":"6240b7f41cbd1b11fcd678cd",
     "section":"primaries",
     "rank":"17",
     "name":"Milano 821 (CW)",
     "type":"SMG",
     "pickRatio":1.82,
     "kdRatio":"0.97"
  },
  "6240b7f41cbd1b11fcd678ce":{
     "_id":"6240b7f41cbd1b11fcd678ce",
     "section":"primaries",
     "rank":"18",
     "name":"Kar98k (VG)",
     "type":"Sniper",
     "pickRatio":1.74,
     "kdRatio":"0.93"
  },
  "6240b7f41cbd1b11fcd678cf":{
     "_id":"6240b7f41cbd1b11fcd678cf",
     "section":"primaries",
     "rank":"19",
     "name":"Vargo 52 (CW)",
     "type":"AR",
     "pickRatio":1.6,
     "kdRatio":"1.17"
  },
  "6240b7f41cbd1b11fcd678d0":{
     "_id":"6240b7f41cbd1b11fcd678d0",
     "section":"primaries",
     "rank":"20",
     "name":"MAC-10 (CW)",
     "type":"SMG",
     "pickRatio":1.53,
     "kdRatio":"0.93"
  },
  "6240b7f41cbd1b11fcd678d1":{
     "_id":"6240b7f41cbd1b11fcd678d1",
     "section":"primaries",
     "rank":"21",
     "name":"BAR (VG)",
     "type":"AR",
     "pickRatio":1.46,
     "kdRatio":"0.66"
  },
  "6240b7f41cbd1b11fcd678d2":{
     "_id":"6240b7f41cbd1b11fcd678d2",
     "section":"primaries",
     "rank":"22",
     "name":"FARA 83 (CW)",
     "type":"AR",
     "pickRatio":1.45,
     "kdRatio":"0.89"
  },
  "6240b7f41cbd1b11fcd678d3":{
     "_id":"6240b7f41cbd1b11fcd678d3",
     "section":"primaries",
     "rank":"23",
     "name":"Armaguerra 43 (VG)",
     "type":"SMG",
     "pickRatio":1.44,
     "kdRatio":"1.28"
  },
  "6240b7f41cbd1b11fcd678d4":{
     "_id":"6240b7f41cbd1b11fcd678d4",
     "section":"primaries",
     "rank":"24",
     "name":"MP5 (MW)",
     "type":"SMG",
     "pickRatio":1.38,
     "kdRatio":"0.92"
  },
  "6240b7f41cbd1b11fcd678d5":{
     "_id":"6240b7f41cbd1b11fcd678d5",
     "section":"primaries",
     "rank":"25",
     "name":"OTs 9 (CW)",
     "type":"SMG",
     "pickRatio":1.33,
     "kdRatio":"1.08"
  },
  "6240b7f41cbd1b11fcd678d6":{
     "_id":"6240b7f41cbd1b11fcd678d6",
     "section":"primaries",
     "rank":"26",
     "name":"KG M40 (VG)",
     "type":"AR",
     "pickRatio":1.23,
     "kdRatio":"1.03"
  },
  "6240b7f41cbd1b11fcd678d7":{
     "_id":"6240b7f41cbd1b11fcd678d7",
     "section":"primaries",
     "rank":"27",
     "name":"MP7 (MW)",
     "type":"SMG",
     "pickRatio":1.15,
     "kdRatio":"0.87"
  },
  "6240b7f41cbd1b11fcd678d8":{
     "_id":"6240b7f41cbd1b11fcd678d8",
     "section":"primaries",
     "rank":"28",
     "name":"HDR (MW)",
     "type":"Sniper",
     "pickRatio":1.1,
     "kdRatio":"0.76"
  },
  "6240b7f41cbd1b11fcd678d9":{
     "_id":"6240b7f41cbd1b11fcd678d9",
     "section":"primaries",
     "rank":"29",
     "name":"SP-R 208 (MW)",
     "type":"Rifle",
     "pickRatio":1.1,
     "kdRatio":"0.98"
  },
  "6240b7f41cbd1b11fcd678da":{
     "_id":"6240b7f41cbd1b11fcd678da",
     "section":"primaries",
     "rank":"30",
     "name":"Type 100 (VG)",
     "type":"SMG",
     "pickRatio":1.05,
     "kdRatio":"1.13"
  },
  "6240b7f41cbd1b11fcd678db":{
     "_id":"6240b7f41cbd1b11fcd678db",
     "section":"primaries",
     "rank":"31",
     "name":"Krig 6 (CW)",
     "type":"AR",
     "pickRatio":1.04,
     "kdRatio":"0.78"
  },
  "6240b7f41cbd1b11fcd678dc":{
     "_id":"6240b7f41cbd1b11fcd678dc",
     "section":"primaries",
     "rank":"32",
     "name":"Bullfrog (CW)",
     "type":"SMG",
     "pickRatio":0.97,
     "kdRatio":"0.88"
  },
  "6240b7f41cbd1b11fcd678dd":{
     "_id":"6240b7f41cbd1b11fcd678dd",
     "section":"primaries",
     "rank":"33",
     "name":"CR-56 AMAX (MW)",
     "type":"AR",
     "pickRatio":0.79,
     "kdRatio":"1.01"
  },
  "6240b7f41cbd1b11fcd678de":{
     "_id":"6240b7f41cbd1b11fcd678de",
     "section":"primaries",
     "rank":"34",
     "name":"C58 (CW)",
     "type":"AR",
     "pickRatio":0.72,
     "kdRatio":"1.34"
  },
  "6240b7f41cbd1b11fcd678df":{
     "_id":"6240b7f41cbd1b11fcd678df",
     "section":"primaries",
     "rank":"35",
     "name":"MP5 (CW)",
     "type":"SMG",
     "pickRatio":0.68,
     "kdRatio":"0.96"
  },
  "6240b7f41cbd1b11fcd678e0":{
     "_id":"6240b7f41cbd1b11fcd678e0",
     "section":"primaries",
     "rank":"36",
     "name":"DP27 (VG)",
     "type":"LMG",
     "pickRatio":0.64,
     "kdRatio":"0.95"
  },
  "6240b7f41cbd1b11fcd678e1":{
     "_id":"6240b7f41cbd1b11fcd678e1",
     "section":"primaries",
     "rank":"37",
     "name":"AX-50 (MW)",
     "type":"Sniper",
     "pickRatio":0.63,
     "kdRatio":"0.70"
  },
  "6240b7f41cbd1b11fcd678e2":{
     "_id":"6240b7f41cbd1b11fcd678e2",
     "section":"primaries",
     "rank":"38",
     "name":"PPSh-41 (CW)",
     "type":"SMG",
     "pickRatio":0.53,
     "kdRatio":"0.94"
  },
  "6240b7f41cbd1b11fcd678e3":{
     "_id":"6240b7f41cbd1b11fcd678e3",
     "section":"primaries",
     "rank":"39",
     "name":"AS44 (VG)",
     "type":"AR",
     "pickRatio":0.5,
     "kdRatio":"0.99"
  },
  "6240b7f41cbd1b11fcd678e4":{
     "_id":"6240b7f41cbd1b11fcd678e4",
     "section":"primaries",
     "rank":"40",
     "name":"RAM-7 (MW)",
     "type":"AR",
     "pickRatio":0.46,
     "kdRatio":"1.02"
  },
  "6240b7f41cbd1b11fcd678e5":{
     "_id":"6240b7f41cbd1b11fcd678e5",
     "section":"primaries",
     "rank":"41",
     "name":"PKM (MW)",
     "type":"LMG",
     "pickRatio":0.45,
     "kdRatio":"0.84"
  },
  "6240b7f41cbd1b11fcd678e6":{
     "_id":"6240b7f41cbd1b11fcd678e6",
     "section":"primaries",
     "rank":"42",
     "name":"FFAR 1 (CW)",
     "type":"AR",
     "pickRatio":0.43,
     "kdRatio":"0.89"
  },
  "6240b7f41cbd1b11fcd678e7":{
     "_id":"6240b7f41cbd1b11fcd678e7",
     "section":"primaries",
     "rank":"43",
     "name":"LAPA (CW)",
     "type":"SMG",
     "pickRatio":0.41,
     "kdRatio":"1.23"
  },
  "6240b7f41cbd1b11fcd678e8":{
     "_id":"6240b7f41cbd1b11fcd678e8",
     "section":"primaries",
     "rank":"44",
     "name":"Pelington 703 (CW)",
     "type":"Sniper",
     "pickRatio":0.39,
     "kdRatio":"0.78"
  },
  "6240b7f41cbd1b11fcd678e9":{
     "_id":"6240b7f41cbd1b11fcd678e9",
     "section":"primaries",
     "rank":"45",
     "name":"LC10 (CW)",
     "type":"SMG",
     "pickRatio":0.39,
     "kdRatio":"0.92"
  },
  "6240b7f41cbd1b11fcd678ea":{
     "_id":"6240b7f41cbd1b11fcd678ea",
     "section":"primaries",
     "rank":"46",
     "name":"3-Line Rifle (VG)",
     "type":"Sniper",
     "pickRatio":0.35,
     "kdRatio":"0.77"
  },
  "6240b7f41cbd1b11fcd678eb":{
     "_id":"6240b7f41cbd1b11fcd678eb",
     "section":"primaries",
     "rank":"47",
     "name":"LW3 - Tundra (CW)",
     "type":"Sniper",
     "pickRatio":0.35,
     "kdRatio":"0.76"
  },
  "6240b7f41cbd1b11fcd678ec":{
     "_id":"6240b7f41cbd1b11fcd678ec",
     "section":"primaries",
     "rank":"48",
     "name":"Sten (VG)",
     "type":"SMG",
     "pickRatio":0.33,
     "kdRatio":"0.94"
  },
  "6240b7f41cbd1b11fcd678ed":{
     "_id":"6240b7f41cbd1b11fcd678ed",
     "section":"primaries",
     "rank":"49",
     "name":"M1912 (VG)",
     "type":"SMG",
     "pickRatio":0.29,
     "kdRatio":"0.89"
  },
  "6240b7f41cbd1b11fcd678ee":{
     "_id":"6240b7f41cbd1b11fcd678ee",
     "section":"primaries",
     "rank":"50",
     "name":"AK-74u (CW)",
     "type":"SMG",
     "pickRatio":0.29,
     "kdRatio":"0.77"
  },
  "6240b7f41cbd1b11fcd678ef":{
     "_id":"6240b7f41cbd1b11fcd678ef",
     "section":"primaries",
     "rank":"51",
     "name":"Volkssturmgewehr (VG)",
     "type":"AR",
     "pickRatio":0.29,
     "kdRatio":"0.86"
  },
  "6240b7f41cbd1b11fcd678f0":{
     "_id":"6240b7f41cbd1b11fcd678f0",
     "section":"primaries",
     "rank":"52",
     "name":"MG42 (VG)",
     "type":"LMG",
     "pickRatio":0.28,
     "kdRatio":"0.93"
  },
  "6240b7f41cbd1b11fcd678f1":{
     "_id":"6240b7f41cbd1b11fcd678f1",
     "section":"primaries",
     "rank":"53",
     "name":"AUG (MW)",
     "type":"SMG",
     "pickRatio":0.26,
     "kdRatio":"0.72"
  },
  "6240b7f41cbd1b11fcd678f2":{
     "_id":"6240b7f41cbd1b11fcd678f2",
     "section":"primaries",
     "rank":"54",
     "name":"EM2 (CW)",
     "type":"AR",
     "pickRatio":0.26,
     "kdRatio":"1.29"
  },
  "6240b7f41cbd1b11fcd678f3":{
     "_id":"6240b7f41cbd1b11fcd678f3",
     "section":"primaries",
     "rank":"55",
     "name":"AK-47 (MW)",
     "type":"AR",
     "pickRatio":0.21,
     "kdRatio":"0.72"
  },
  "6240b7f41cbd1b11fcd678f4":{
     "_id":"6240b7f41cbd1b11fcd678f4",
     "section":"primaries",
     "rank":"56",
     "name":"NZ-41 (VG)",
     "type":"AR",
     "pickRatio":0.21,
     "kdRatio":"0.68"
  },
  "6240b7f41cbd1b11fcd678f5":{
     "_id":"6240b7f41cbd1b11fcd678f5",
     "section":"primaries",
     "rank":"57",
     "name":"Fennec (MW)",
     "type":"SMG",
     "pickRatio":0.21,
     "kdRatio":"0.79"
  },
  "6240b7f41cbd1b11fcd678f6":{
     "_id":"6240b7f41cbd1b11fcd678f6",
     "section":"primaries",
     "rank":"58",
     "name":"P90 (MW)",
     "type":"SMG",
     "pickRatio":0.2,
     "kdRatio":"0.81"
  },
  "6240b7f41cbd1b11fcd678f7":{
     "_id":"6240b7f41cbd1b11fcd678f7",
     "section":"primaries",
     "rank":"59",
     "name":"Riot Shield (MW)",
     "type":"Melee",
     "pickRatio":0.19,
     "kdRatio":"1.01"
  },
  "6240b7f41cbd1b11fcd678f8":{
     "_id":"6240b7f41cbd1b11fcd678f8",
     "section":"primaries",
     "rank":"60",
     "name":"Bruen Mk9 (MW)",
     "type":"LMG",
     "pickRatio":0.19,
     "kdRatio":"0.97"
  },
  "6240b7f41cbd1b11fcd678f9":{
     "_id":"6240b7f41cbd1b11fcd678f9",
     "section":"primaries",
     "rank":"61",
     "name":"Type 99 (VG)",
     "type":"Sniper",
     "pickRatio":0.18,
     "kdRatio":"0.68"
  },
  "6240b7f41cbd1b11fcd678fa":{
     "_id":"6240b7f41cbd1b11fcd678fa",
     "section":"primaries",
     "rank":"62",
     "name":"AS VAL (MW)",
     "type":"AR",
     "pickRatio":0.17,
     "kdRatio":"0.85"
  },
  "6240b7f41cbd1b11fcd678fb":{
     "_id":"6240b7f41cbd1b11fcd678fb",
     "section":"primaries",
     "rank":"63",
     "name":"CX-9 (MW)",
     "type":"SMG",
     "pickRatio":0.17,
     "kdRatio":"0.97"
  },
  "6240b7f41cbd1b11fcd678fc":{
     "_id":"6240b7f41cbd1b11fcd678fc",
     "section":"primaries",
     "rank":"64",
     "name":"M16 (CW)",
     "type":"Rifle",
     "pickRatio":0.16,
     "kdRatio":"0.77"
  },
  "6240b7f41cbd1b11fcd678fd":{
     "_id":"6240b7f41cbd1b11fcd678fd",
     "section":"primaries",
     "rank":"65",
     "name":"M82 (CW)",
     "type":"Sniper",
     "pickRatio":0.14,
     "kdRatio":"0.66"
  },
  "6240b7f41cbd1b11fcd678fe":{
     "_id":"6240b7f41cbd1b11fcd678fe",
     "section":"primaries",
     "rank":"66",
     "name":"AN-94 (MW)",
     "type":"AR",
     "pickRatio":0.14,
     "kdRatio":"0.85"
  },
  "6240b7f41cbd1b11fcd678ff":{
     "_id":"6240b7f41cbd1b11fcd678ff",
     "section":"primaries",
     "rank":"67",
     "name":"PP19 Bizon (MW)",
     "type":"SMG",
     "pickRatio":0.13,
     "kdRatio":"0.68"
  },
  "6240b7f41cbd1b11fcd67900":{
     "_id":"6240b7f41cbd1b11fcd67900",
     "section":"primaries",
     "rank":"68",
     "name":"RPD (CW)",
     "type":"LMG",
     "pickRatio":0.13,
     "kdRatio":"0.87"
  },
  "6240b7f41cbd1b11fcd67901":{
     "_id":"6240b7f41cbd1b11fcd67901",
     "section":"primaries",
     "rank":"69",
     "name":"Gorenko Anti-Tank Rifle (VG)",
     "type":"Sniper",
     "pickRatio":0.12,
     "kdRatio":"0.63"
  },
  "6240b7f41cbd1b11fcd67902":{
     "_id":"6240b7f41cbd1b11fcd67902",
     "section":"primaries",
     "rank":"70",
     "name":"Stoner 63 (CW)",
     "type":"LMG",
     "pickRatio":0.12,
     "kdRatio":"0.65"
  },
  "6240b7f41cbd1b11fcd67903":{
     "_id":"6240b7f41cbd1b11fcd67903",
     "section":"primaries",
     "rank":"71",
     "name":"Uzi (MW)",
     "type":"SMG",
     "pickRatio":0.12,
     "kdRatio":"0.79"
  },
  "6240b7f41cbd1b11fcd67904":{
     "_id":"6240b7f41cbd1b11fcd67904",
     "section":"primaries",
     "rank":"72",
     "name":"Oden (MW)",
     "type":"AR",
     "pickRatio":0.12,
     "kdRatio":"0.92"
  },
  "6240b7f41cbd1b11fcd67905":{
     "_id":"6240b7f41cbd1b11fcd67905",
     "section":"primaries",
     "rank":"73",
     "name":"Dragunov (MW)",
     "type":"Sniper",
     "pickRatio":0.12,
     "kdRatio":"0.46"
  },
  "6240b7f41cbd1b11fcd67906":{
     "_id":"6240b7f41cbd1b11fcd67906",
     "section":"primaries",
     "rank":"74",
     "name":"FAL (MW)",
     "type":"AR",
     "pickRatio":0.12,
     "kdRatio":"0.77"
  },
  "6240b7f41cbd1b11fcd67907":{
     "_id":"6240b7f41cbd1b11fcd67907",
     "section":"primaries",
     "rank":"75",
     "name":"Gallo SA12 (CW)",
     "type":"Shotgun",
     "pickRatio":0.12,
     "kdRatio":"0.99"
  },
  "6240b7f41cbd1b11fcd67908":{
     "_id":"6240b7f41cbd1b11fcd67908",
     "section":"primaries",
     "rank":"76",
     "name":"FN Scar 17 (MW)",
     "type":"AR",
     "pickRatio":0.12,
     "kdRatio":"0.77"
  },
  "6240b7f41cbd1b11fcd67909":{
     "_id":"6240b7f41cbd1b11fcd67909",
     "section":"primaries",
     "rank":"77",
     "name":"FiNN LMG (MW)",
     "type":"LMG",
     "pickRatio":0.11,
     "kdRatio":"0.86"
  },
  "6240b7f41cbd1b11fcd6790a":{
     "_id":"6240b7f41cbd1b11fcd6790a",
     "section":"primaries",
     "rank":"78",
     "name":"JAK-12 (MW)",
     "type":"Shotgun",
     "pickRatio":0.11,
     "kdRatio":"1.03"
  },
  "6240b7f41cbd1b11fcd6790b":{
     "_id":"6240b7f41cbd1b11fcd6790b",
     "section":"primaries",
     "rank":"79",
     "name":"QBZ-83 (CW)",
     "type":"AR",
     "pickRatio":0.1,
     "kdRatio":"0.90"
  },
  "6240b7f41cbd1b11fcd6790c":{
     "_id":"6240b7f41cbd1b11fcd6790c",
     "section":"primaries",
     "rank":"80",
     "name":"MG 82 (CW)",
     "type":"LMG",
     "pickRatio":0.09,
     "kdRatio":"1.34"
  },
  "6240b7f41cbd1b11fcd6790d":{
     "_id":"6240b7f41cbd1b11fcd6790d",
     "section":"primaries",
     "rank":"81",
     "name":"ZRG 20mm (CW)",
     "type":"Sniper",
     "pickRatio":0.09,
     "kdRatio":"0.85"
  },
  "6240b7f41cbd1b11fcd6790e":{
     "_id":"6240b7f41cbd1b11fcd6790e",
     "section":"primaries",
     "rank":"82",
     "name":"Crossbow (MW)",
     "type":"Rifle",
     "pickRatio":0.08,
     "kdRatio":"0.87"
  },
  "6240b7f41cbd1b11fcd6790f":{
     "_id":"6240b7f41cbd1b11fcd6790f",
     "section":"primaries",
     "rank":"83",
     "name":"Model 680 (MW)",
     "type":"Shotgun",
     "pickRatio":0.08,
     "kdRatio":"0.52"
  },
  "6240b7f41cbd1b11fcd67910":{
     "_id":"6240b7f41cbd1b11fcd67910",
     "section":"primaries",
     "rank":"84",
     "name":"ISO (MW)",
     "type":"SMG",
     "pickRatio":0.08,
     "kdRatio":"0.85"
  },
  "6240b7f41cbd1b11fcd67911":{
     "_id":"6240b7f41cbd1b11fcd67911",
     "section":"primaries",
     "rank":"85",
     "name":"Rytec AMR (MW)",
     "type":"Sniper",
     "pickRatio":0.07,
     "kdRatio":"0.76"
  },
  "6240b7f41cbd1b11fcd67912":{
     "_id":"6240b7f41cbd1b11fcd67912",
     "section":"primaries",
     "rank":"86",
     "name":"ITRA Burst (VG)",
     "type":"AR",
     "pickRatio":0.07,
     "kdRatio":"0.92"
  },
  "6240b7f41cbd1b11fcd67913":{
     "_id":"6240b7f41cbd1b11fcd67913",
     "section":"primaries",
     "rank":"87",
     "name":"Streetsweeper (CW)",
     "type":"Shotgun",
     "pickRatio":0.07,
     "kdRatio":"0.92"
  },
  "6240b7f41cbd1b11fcd67914":{
     "_id":"6240b7f41cbd1b11fcd67914",
     "section":"primaries",
     "rank":"88",
     "name":"DMR 14 (CW)",
     "type":"Rifle",
     "pickRatio":0.07,
     "kdRatio":"0.87"
  },
  "6240b7f41cbd1b11fcd67915":{
     "_id":"6240b7f41cbd1b11fcd67915",
     "section":"primaries",
     "rank":"89",
     "name":"M1 Garand (VG)",
     "type":"Rifle",
     "pickRatio":0.06,
     "kdRatio":"0.70"
  },
  "6240b7f41cbd1b11fcd67916":{
     "_id":"6240b7f41cbd1b11fcd67916",
     "section":"primaries",
     "rank":"90",
     "name":"Whitley (VG)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"0.90"
  },
  "6240b7f41cbd1b11fcd67917":{
     "_id":"6240b7f41cbd1b11fcd67917",
     "section":"primaries",
     "rank":"91",
     "name":"M91 (MW)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"0.58"
  },
  "6240b7f41cbd1b11fcd67918":{
     "_id":"6240b7f41cbd1b11fcd67918",
     "section":"primaries",
     "rank":"92",
     "name":"Type 11 (VG)",
     "type":"LMG",
     "pickRatio":0.06,
     "kdRatio":"0.78"
  },
  "6240b7f41cbd1b11fcd67919":{
     "_id":"6240b7f41cbd1b11fcd67919",
     "section":"primaries",
     "rank":"93",
     "name":"Grav (CW)",
     "type":"AR",
     "pickRatio":0.06,
     "kdRatio":"0.73"
  },
  "6240b7f41cbd1b11fcd6791a":{
     "_id":"6240b7f41cbd1b11fcd6791a",
     "section":"primaries",
     "rank":"94",
     "name":"Groza (CW)",
     "type":"AR",
     "pickRatio":0.06,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6791b":{
     "_id":"6240b7f41cbd1b11fcd6791b",
     "section":"primaries",
     "rank":"95",
     "name":"Combat Shield (VG)",
     "type":"Melee",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6791c":{
     "_id":"6240b7f41cbd1b11fcd6791c",
     "section":"primaries",
     "rank":"96",
     "name":"R9-0 Shotgun (MW)",
     "type":"Shotgun",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6791d":{
     "_id":"6240b7f41cbd1b11fcd6791d",
     "section":"primaries",
     "rank":"97",
     "name":"MK2 Carbine (MW)",
     "type":"Rifle",
     "pickRatio":0.05,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6791e":{
     "_id":"6240b7f41cbd1b11fcd6791e",
     "section":"primaries",
     "rank":"98",
     "name":"TEC-9 (CW)",
     "type":"SMG",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6791f":{
     "_id":"6240b7f41cbd1b11fcd6791f",
     "section":"primaries",
     "rank":"99",
     "name":"Holger-26 (MW)",
     "type":"LMG",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67920":{
     "_id":"6240b7f41cbd1b11fcd67920",
     "section":"primaries",
     "rank":"100",
     "name":"Origin 12 Shotgun (MW)",
     "type":"Shotgun",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67921":{
     "_id":"6240b7f41cbd1b11fcd67921",
     "section":"primaries",
     "rank":"101",
     "name":"Striker 45 (MW)",
     "type":"SMG",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67922":{
     "_id":"6240b7f41cbd1b11fcd67922",
     "section":"primaries",
     "rank":"102",
     "name":"AUG (CW)",
     "type":"Rifle",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67923":{
     "_id":"6240b7f41cbd1b11fcd67923",
     "section":"primaries",
     "rank":"103",
     "name":"SVT-40 (VG)",
     "type":"Rifle",
     "pickRatio":0.04,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67924":{
     "_id":"6240b7f41cbd1b11fcd67924",
     "section":"primaries",
     "rank":"104",
     "name":"SKS (MW)",
     "type":"Rifle",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67925":{
     "_id":"6240b7f41cbd1b11fcd67925",
     "section":"primaries",
     "rank":"105",
     "name":"KSP 45 (CW)",
     "type":"SMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67926":{
     "_id":"6240b7f41cbd1b11fcd67926",
     "section":"primaries",
     "rank":"106",
     "name":"SA87 (MW)",
     "type":"LMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67927":{
     "_id":"6240b7f41cbd1b11fcd67927",
     "section":"primaries",
     "rank":"107",
     "name":"EBR-14 (MW)",
     "type":"Rifle",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67928":{
     "_id":"6240b7f41cbd1b11fcd67928",
     "section":"primaries",
     "rank":"108",
     "name":"Nail Gun (CW)",
     "type":"SMG",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67929":{
     "_id":"6240b7f41cbd1b11fcd67929",
     "section":"primaries",
     "rank":"109",
     "name":"G-43 (VG)",
     "type":"Rifle",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6792a":{
     "_id":"6240b7f41cbd1b11fcd6792a",
     "section":"primaries",
     "rank":"110",
     "name":"725 (MW)",
     "type":"Shotgun",
     "pickRatio":0.03,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6792b":{
     "_id":"6240b7f41cbd1b11fcd6792b",
     "section":"primaries",
     "rank":"111",
     "name":"FR 5.56 (MW)",
     "type":"AR",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6792c":{
     "_id":"6240b7f41cbd1b11fcd6792c",
     "section":"primaries",
     "rank":"112",
     "name":"Double Barrel (VG)",
     "type":"Shotgun",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6792d":{
     "_id":"6240b7f41cbd1b11fcd6792d",
     "section":"primaries",
     "rank":"113",
     "name":"M60 (CW)",
     "type":"LMG",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6792e":{
     "_id":"6240b7f41cbd1b11fcd6792e",
     "section":"primaries",
     "rank":"114",
     "name":"RAAL MG (MW)",
     "type":"LMG",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd6792f":{
     "_id":"6240b7f41cbd1b11fcd6792f",
     "section":"primaries",
     "rank":"115",
     "name":"Combat Shotgun (VG)",
     "type":"Shotgun",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67930":{
     "_id":"6240b7f41cbd1b11fcd67930",
     "section":"primaries",
     "rank":"116",
     "name":"Einhorn Revolving (VG)",
     "type":"Shotgun",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67931":{
     "_id":"6240b7f41cbd1b11fcd67931",
     "section":"primaries",
     "rank":"117",
     "name":"Hauer 77 (CW)",
     "type":"Shotgun",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67932":{
     "_id":"6240b7f41cbd1b11fcd67932",
     "section":"primaries",
     "rank":"118",
     "name":"Type 63 (CW)",
     "type":"Rifle",
     "pickRatio":0.02,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67933":{
     "_id":"6240b7f41cbd1b11fcd67933",
     "section":"primaries",
     "rank":"119",
     "name":"MG34 (MW)",
     "type":"LMG",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67934":{
     "_id":"6240b7f41cbd1b11fcd67934",
     "section":"primaries",
     "rank":"120",
     "name":"Gracey Auto (VG)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67935":{
     "_id":"6240b7f41cbd1b11fcd67935",
     "section":"primaries",
     "rank":"121",
     "name":"VLK Rogue (MW)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67936":{
     "_id":"6240b7f41cbd1b11fcd67936",
     "section":"primaries",
     "rank":"122",
     "name":"CARV.2 (CW)",
     "type":"Rifle",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67937":{
     "_id":"6240b7f41cbd1b11fcd67937",
     "section":"primaries",
     "rank":"123",
     "name":"410 Ironhide (CW)",
     "type":"Shotgun",
     "pickRatio":0.01,
     "kdRatio":"N/A"
  },
  "6240b7f41cbd1b11fcd67938":{
     "_id":"6240b7f41cbd1b11fcd67938",
     "section":"primaries",
     "rank":"124",
     "name":"R1 Shadowhunter (CW)",
     "type":"Rifle",
     "pickRatio":0.01,
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
  //   //use backend for warzone guns data
  //   axios.get('http://localhost:3000/api/guns/all')
  //   .then(function (res) {
  //    // set component state to response data
  //     self.setState(
  //       {
  //         data: Object.entries(res.data).map((e) => ( { [e[0]]: e[1] } )),
  //         store: Object.entries(res.data).map((e) => ( { [e[0]]: e[1] } ))
  //       }
  //     );
     
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
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