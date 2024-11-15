const candidate2022Options = [{
        party: "Democrat",
        cssClass: "democrat",
        name: "Bert H. Steinmann",
        dataKey: "dem"

    },
    {
        party: "Republican",
        cssClass: "republican",
        name: "Ronald Prykanowski",
        dataKey: "rep"
    }
];

const candidate2018Options = [{
        party: "Democrat",
        cssClass: "democrat",
        name: "Bert H. Steinmann",
        dataKey: "dem"

    },
    {
        party: "Republican",
        cssClass: "republican",
        name: "Ronald Prykanowski",
        dataKey: "rep"
    }
];

const mayor2022Data = [{
        "county": "01",
        "registered_voters": 623,
        "casted_ballots": 331,
        "dem_votes": 221,
        "rep_votes": 110,
        "dem_percent": 66.77,
        "rep_percent": 33.23,
        "margin_of_win": 33.53,
        "turnout": 53.13
    },
    {
        "county": "02",
        "registered_voters": 698,
        "casted_ballots": 255,
        "dem_votes": 180,
        "rep_votes": 75,
        "dem_percent": 70.59,
        "rep_percent": 29.41,
        "margin_of_win": 41.18,
        "turnout": 36.53
    },
    {
        "county": "03",
        "registered_voters": 702,
        "casted_ballots": 259,
        "dem_votes": 200,
        "rep_votes": 59,
        "dem_percent": 77.22,
        "rep_percent": 22.78,
        "margin_of_win": 54.44,
        "turnout": 36.89
    },
    {
        "county": "04",
        "registered_voters": 1157,
        "casted_ballots": 468,
        "dem_votes": 316,
        "rep_votes": 152,
        "dem_percent": 67.52,
        "rep_percent": 32.48,
        "margin_of_win": 35.04,
        "turnout": 40.45
    },
    {
        "county": "05",
        "registered_voters": 824,
        "casted_ballots": 285,
        "dem_votes": 253,
        "rep_votes": 32,
        "dem_percent": 88.77,
        "rep_percent": 11.23,
        "margin_of_win": 77.54,
        "turnout": 34.59
    },
    {
        "county": "06",
        "registered_voters": 937,
        "casted_ballots": 314,
        "dem_votes": 254,
        "rep_votes": 60,
        "dem_percent": 80.89,
        "rep_percent": 19.11,
        "margin_of_win": 61.78,
        "turnout": 33.51
    },
    {
        "county": "07",
        "registered_voters": 720,
        "casted_ballots": 292,
        "dem_votes": 213,
        "rep_votes": 79,
        "dem_percent": 72.95,
        "rep_percent": 27.05,
        "margin_of_win": 45.89,
        "turnout": 40.56
    },
    {
        "county": "08",
        "registered_voters": 812,
        "casted_ballots": 429,
        "dem_votes": 243,
        "rep_votes": 186,
        "dem_percent": 56.64,
        "rep_percent": 43.36,
        "margin_of_win": 13.29,
        "turnout": 52.83
    },
    {
        "county": "09",
        "registered_voters": 859,
        "casted_ballots": 282,
        "dem_votes": 226,
        "rep_votes": 56,
        "dem_percent": 80.14,
        "rep_percent": 19.86,
        "margin_of_win": 60.28,
        "turnout": 32.83
    },
    {
        "county": "10",
        "registered_voters": 978,
        "casted_ballots": 268,
        "dem_votes": 234,
        "rep_votes": 34,
        "dem_percent": 87.31,
        "rep_percent": 12.69,
        "margin_of_win": 74.63,
        "turnout": 27.4
    },
    {
        "county": "11",
        "registered_voters": 1010,
        "casted_ballots": 496,
        "dem_votes": 329,
        "rep_votes": 167,
        "dem_percent": 66.33,
        "rep_percent": 33.67,
        "margin_of_win": 32.66,
        "turnout": 49.11
    },
    {
        "county": "12",
        "registered_voters": 763,
        "casted_ballots": 356,
        "dem_votes": 254,
        "rep_votes": 102,
        "dem_percent": 71.35,
        "rep_percent": 28.65,
        "margin_of_win": 42.7,
        "turnout": 46.66
    },
    {
        "county": "13",
        "registered_voters": 531,
        "casted_ballots": 177,
        "dem_votes": 155,
        "rep_votes": 22,
        "dem_percent": 87.57,
        "rep_percent": 12.43,
        "margin_of_win": 75.14,
        "turnout": 33.33
    },
    {
        "county": "14",
        "registered_voters": 583,
        "casted_ballots": 316,
        "dem_votes": 209,
        "rep_votes": 107,
        "dem_percent": 66.14,
        "rep_percent": 33.86,
        "margin_of_win": 32.28,
        "turnout": 54.2
    },
    {
        "county": "15",
        "registered_voters": 1007,
        "casted_ballots": 434,
        "dem_votes": 328,
        "rep_votes": 106,
        "dem_percent": 75.58,
        "rep_percent": 24.42,
        "margin_of_win": 51.15,
        "turnout": 43.1
    },
    {
        "county": "16",
        "registered_voters": 628,
        "casted_ballots": 286,
        "dem_votes": 181,
        "rep_votes": 105,
        "dem_percent": 63.29,
        "rep_percent": 36.71,
        "margin_of_win": 26.57,
        "turnout": 45.54
    },
    {
        "county": "17",
        "registered_voters": 863,
        "casted_ballots": 315,
        "dem_votes": 210,
        "rep_votes": 105,
        "dem_percent": 66.67,
        "rep_percent": 33.33,
        "margin_of_win": 33.33,
        "turnout": 36.5
    },
    {
        "county": "18",
        "registered_voters": 1263,
        "casted_ballots": 531,
        "dem_votes": 378,
        "rep_votes": 153,
        "dem_percent": 71.19,
        "rep_percent": 28.81,
        "margin_of_win": 42.37,
        "turnout": 42.04
    },
    {
        "county": "19",
        "registered_voters": 1582,
        "casted_ballots": 786,
        "dem_votes": 448,
        "rep_votes": 338,
        "dem_percent": 57.0,
        "rep_percent": 43.0,
        "margin_of_win": 13.99,
        "turnout": 49.68
    },
    {
        "county": "20",
        "registered_voters": 502,
        "casted_ballots": 216,
        "dem_votes": 126,
        "rep_votes": 90,
        "dem_percent": 58.33,
        "rep_percent": 41.67,
        "margin_of_win": 16.67,
        "turnout": 43.03
    },
    {
        "county": "21",
        "registered_voters": 1132,
        "casted_ballots": 590,
        "dem_votes": 356,
        "rep_votes": 228,
        "dem_percent": 60.34,
        "rep_percent": 38.64,
        "margin_of_win": 21.69,
        "turnout": 52.12
    },
    {
        "county": "22",
        "registered_voters": 495,
        "casted_ballots": 255,
        "dem_votes": 160,
        "rep_votes": 88,
        "dem_percent": 62.75,
        "rep_percent": 34.51,
        "margin_of_win": 28.24,
        "turnout": 51.52
    },
    {
        "county": "23",
        "registered_voters": 659,
        "casted_ballots": 242,
        "dem_votes": 172,
        "rep_votes": 60,
        "dem_percent": 71.07,
        "rep_percent": 24.79,
        "margin_of_win": 46.28,
        "turnout": 36.72
    },
    {
        "county": "24",
        "registered_voters": 1657,
        "casted_ballots": 711,
        "dem_votes": 490,
        "rep_votes": 208,
        "dem_percent": 68.92,
        "rep_percent": 29.25,
        "margin_of_win": 39.66,
        "turnout": 42.91
    },
    {
        "county": "25",
        "registered_voters": 880,
        "casted_ballots": 304,
        "dem_votes": 256,
        "rep_votes": 42,
        "dem_percent": 84.21,
        "rep_percent": 13.82,
        "margin_of_win": 70.39,
        "turnout": 34.55
    },
    {
        "county": "26",
        "registered_voters": 835,
        "casted_ballots": 405,
        "dem_votes": 297,
        "rep_votes": 101,
        "dem_percent": 73.33,
        "rep_percent": 24.94,
        "margin_of_win": 48.4,
        "turnout": 48.5
    },
    {
        "county": "27",
        "registered_voters": 1112,
        "casted_ballots": 446,
        "dem_votes": 338,
        "rep_votes": 98,
        "dem_percent": 75.78,
        "rep_percent": 21.97,
        "margin_of_win": 53.81,
        "turnout": 40.11
    },
    {
        "county": "28",
        "registered_voters": 600,
        "casted_ballots": 275,
        "dem_votes": 229,
        "rep_votes": 36,
        "dem_percent": 83.27,
        "rep_percent": 13.09,
        "margin_of_win": 70.18,
        "turnout": 45.83
    }
];

const mayor2018Data = [{
        "county": "01",
        "registered_voters": 658,
        "casted_ballots": 340,
        "dem_votes": 237,
        "rep_votes": 103,
        "dem_percent": 69.71,
        "rep_percent": 30.29,
        "margin_of_win": 39.41,
        "turnout": 51.67
    },
    {
        "county": "02",
        "registered_voters": 692,
        "casted_ballots": 336,
        "dem_votes": 260,
        "rep_votes": 75,
        "dem_percent": 77.38,
        "rep_percent": 22.32,
        "margin_of_win": 55.06,
        "turnout": 48.55
    },
    {
        "county": "03",
        "registered_voters": 760,
        "casted_ballots": 356,
        "dem_votes": 295,
        "rep_votes": 61,
        "dem_percent": 82.87,
        "rep_percent": 17.13,
        "margin_of_win": 65.73,
        "turnout": 46.84
    },
    {
        "county": "04",
        "registered_voters": 1222,
        "casted_ballots": 552,
        "dem_votes": 406,
        "rep_votes": 146,
        "dem_percent": 73.55,
        "rep_percent": 26.45,
        "margin_of_win": 47.10,
        "turnout": 45.17
    },
    {
        "county": "05",
        "registered_voters": 864,
        "casted_ballots": 396,
        "dem_votes": 340,
        "rep_votes": 56,
        "dem_percent": 85.86,
        "rep_percent": 14.14,
        "margin_of_win": 71.72,
        "turnout": 45.83
    },
    {
        "county": "06",
        "registered_voters": 920,
        "casted_ballots": 390,
        "dem_votes": 300,
        "rep_votes": 90,
        "dem_percent": 76.92,
        "rep_percent": 23.08,
        "margin_of_win": 53.85,
        "turnout": 42.39
    },
    {
        "county": "07",
        "registered_voters": 629,
        "casted_ballots": 287,
        "dem_votes": 211,
        "rep_votes": 76,
        "dem_percent": 73.52,
        "rep_percent": 26.48,
        "margin_of_win": 47.04,
        "turnout": 45.63
    },
    {
        "county": "08",
        "registered_voters": 842,
        "casted_ballots": 411,
        "dem_votes": 286,
        "rep_votes": 125,
        "dem_percent": 69.59,
        "rep_percent": 30.41,
        "margin_of_win": 39.17,
        "turnout": 48.81
    },
    {
        "county": "09",
        "registered_voters": 831,
        "casted_ballots": 361,
        "dem_votes": 324,
        "rep_votes": 37,
        "dem_percent": 89.75,
        "rep_percent": 10.25,
        "margin_of_win": 79.50,
        "turnout": 43.44
    },
    {
        "county": "10",
        "registered_voters": 951,
        "casted_ballots": 380,
        "dem_votes": 349,
        "rep_votes": 30,
        "dem_percent": 91.84,
        "rep_percent": 7.89,
        "margin_of_win": 83.95,
        "turnout": 39.96
    },
    {
        "county": "11",
        "registered_voters": 1106,
        "casted_ballots": 516,
        "dem_votes": 378,
        "rep_votes": 138,
        "dem_percent": 73.26,
        "rep_percent": 26.74,
        "margin_of_win": 46.51,
        "turnout": 46.65
    },
    {
        "county": "12",
        "registered_voters": 752,
        "casted_ballots": 386,
        "dem_votes": 298,
        "rep_votes": 88,
        "dem_percent": 77.20,
        "rep_percent": 22.80,
        "margin_of_win": 54.40,
        "turnout": 51.33
    },
    {
        "county": "13",
        "registered_voters": 486,
        "casted_ballots": 241,
        "dem_votes": 218,
        "rep_votes": 23,
        "dem_percent": 90.46,
        "rep_percent": 9.54,
        "margin_of_win": 80.91,
        "turnout": 49.59
    },
    {
        "county": "14",
        "registered_voters": 593,
        "casted_ballots": 290,
        "dem_votes": 191,
        "rep_votes": 99,
        "dem_percent": 65.86,
        "rep_percent": 34.14,
        "margin_of_win": 31.72,
        "turnout": 48.90
    },
    {
        "county": "15",
        "registered_voters": 1031,
        "casted_ballots": 493,
        "dem_votes": 410,
        "rep_votes": 83,
        "dem_percent": 83.16,
        "rep_percent": 16.84,
        "margin_of_win": 66.33,
        "turnout": 47.82
    },
    {
        "county": "16",
        "registered_voters": 611,
        "casted_ballots": 308,
        "dem_votes": 214,
        "rep_votes": 94,
        "dem_percent": 69.48,
        "rep_percent": 30.52,
        "margin_of_win": 38.96,
        "turnout": 50.41
    },
    {
        "county": "17",
        "registered_voters": 932,
        "casted_ballots": 378,
        "dem_votes": 292,
        "rep_votes": 85,
        "dem_percent": 77.25,
        "rep_percent": 22.49,
        "margin_of_win": 54.76,
        "turnout": 40.56
    },
    {
        "county": "18",
        "registered_voters": 1076,
        "casted_ballots": 423,
        "dem_votes": 298,
        "rep_votes": 125,
        "dem_percent": 70.45,
        "rep_percent": 29.55,
        "margin_of_win": 40.90,
        "turnout": 39.31
    },
    {
        "county": "19",
        "registered_voters": 1520,
        "casted_ballots": 920,
        "dem_votes": 625,
        "rep_votes": 295,
        "dem_percent": 67.93,
        "rep_percent": 32.07,
        "margin_of_win": 35.87,
        "turnout": 60.53
    },
    {
        "county": "20",
        "registered_voters": 493,
        "casted_ballots": 232,
        "dem_votes": 142,
        "rep_votes": 90,
        "dem_percent": 61.21,
        "rep_percent": 38.79,
        "margin_of_win": 22.41,
        "turnout": 47.06
    },
    {
        "county": "21",
        "registered_voters": 1261,
        "casted_ballots": 596,
        "dem_votes": 402,
        "rep_votes": 192,
        "dem_percent": 67.45,
        "rep_percent": 32.21,
        "margin_of_win": 35.23,
        "turnout": 47.26
    },
    {
        "county": "22",
        "registered_voters": 622,
        "casted_ballots": 284,
        "dem_votes": 215,
        "rep_votes": 69,
        "dem_percent": 75.70,
        "rep_percent": 24.30,
        "margin_of_win": 51.41,
        "turnout": 45.66
    },
    {
        "county": "23",
        "registered_voters": 675,
        "casted_ballots": 288,
        "dem_votes": 217,
        "rep_votes": 71,
        "dem_percent": 75.35,
        "rep_percent": 24.65,
        "margin_of_win": 50.69,
        "turnout": 42.67
    },
    {
        "county": "24",
        "registered_voters": 1453,
        "casted_ballots": 493,
        "dem_votes": 400,
        "rep_votes": 93,
        "dem_percent": 81.14,
        "rep_percent": 18.86,
        "margin_of_win": 62.27,
        "turnout": 33.93
    },
    {
        "county": "25",
        "registered_voters": 911,
        "casted_ballots": 389,
        "dem_votes": 362,
        "rep_votes": 27,
        "dem_percent": 93.06,
        "rep_percent": 6.94,
        "margin_of_win": 86.12,
        "turnout": 42.70
    },
    {
        "county": "26",
        "registered_voters": 983,
        "casted_ballots": 441,
        "dem_votes": 373,
        "rep_votes": 68,
        "dem_percent": 84.58,
        "rep_percent": 15.42,
        "margin_of_win": 69.16,
        "turnout": 44.86
    },
    {
        "county": "27",
        "registered_voters": 1172,
        "casted_ballots": 485,
        "dem_votes": 393,
        "rep_votes": 92,
        "dem_percent": 81.03,
        "rep_percent": 18.97,
        "margin_of_win": 62.06,
        "turnout": 41.38
    },
    {
        "county": "28",
        "registered_voters": 634,
        "casted_ballots": 317,
        "dem_votes": 281,
        "rep_votes": 36,
        "dem_percent": 88.64,
        "rep_percent": 11.36,
        "margin_of_win": 77.29,
        "turnout": 50.00
    },
];

const electionMayor2022Data = new ElectionData("county", mayor2022Data, candidate2022Options);
const electionMayor2018Data = new ElectionData("county", mayor2018Data, candidate2018Options);


const electionMayor2022_2018_MarginSwing = [{
        "county": "01",
        "2018_margin": 39.41,
        "2022_margin": 33.53,
        "swing_results": -5.88
    },
    {
        "county": "02",
        "2018_margin": 55.06,
        "2022_margin": 41.18,
        "swing_results": -13.88
    },
    {
        "county": "03",
        "2018_margin": 65.73,
        "2022_margin": 54.44,
        "swing_results": -11.29
    },
    {
        "county": "04",
        "2018_margin": 47.10,
        "2022_margin": 35.04,
        "swing_results": -12.06
    },
    {
        "county": "05",
        "2018_margin": 71.72,
        "2022_margin": 77.54,
        "swing_results": 5.82
    },
    {
        "county": "06",
        "2018_margin": 53.85,
        "2022_margin": 61.78,
        "swing_results": 7.93
    },
    {
        "county": "07",
        "2018_margin": 47.04,
        "2022_margin": 45.89,
        "swing_results": -1.15
    },
    {
        "county": "08",
        "2018_margin": 39.17,
        "2022_margin": 13.29,
        "swing_results": -25.88
    },
    {
        "county": "09",
        "2018_margin": 79.50,
        "2022_margin": 60.28,
        "swing_results": -19.22
    },
    {
        "county": "10",
        "2018_margin": 83.95,
        "2022_margin": 74.63,
        "swing_results": -9.32
    },
    {
        "county": "11",
        "2018_margin": 46.51,
        "2022_margin": 32.66,
        "swing_results": -13.85
    },
    {
        "county": "12",
        "2018_margin": 54.40,
        "2022_margin": 42.70,
        "swing_results": -11.70
    },
    {
        "county": "13",
        "2018_margin": 80.91,
        "2022_margin": 75.14,
        "swing_results": -5.77
    },
    {
        "county": "14",
        "2018_margin": 31.72,
        "2022_margin": 32.28,
        "swing_results": 0.56
    },
    {
        "county": "15",
        "2018_margin": 66.33,
        "2022_margin": 51.15,
        "swing_results": -15.18
    },
    {
        "county": "16",
        "2018_margin": 38.96,
        "2022_margin": 26.57,
        "swing_results": -12.39
    },
    {
        "county": "17",
        "2018_margin": 54.76,
        "2022_margin": 33.33,
        "swing_results": -21.43
    },
    {
        "county": "18",
        "2018_margin": 40.90,
        "2022_margin": 42.37,
        "swing_results": 1.47
    },
    {
        "county": "19",
        "2018_margin": 35.87,
        "2022_margin": 13.99,
        "swing_results": -21.88
    },
    {
        "county": "20",
        "2018_margin": 22.41,
        "2022_margin": 16.67,
        "swing_results": -5.74
    },
    {
        "county": "21",
        "2018_margin": 35.23,
        "2022_margin": 21.69,
        "swing_results": -13.54
    },
    {
        "county": "22",
        "2018_margin": 51.41,
        "2022_margin": 28.24,
        "swing_results": -23.17
    },
    {
        "county": "23",
        "2018_margin": 50.69,
        "2022_margin": 46.28,
        "swing_results": -4.41
    },
    {
        "county": "24",
        "2018_margin": 62.27,
        "2022_margin": 39.66,
        "swing_results": -22.61
    },
    {
        "county": "25",
        "2018_margin": 86.12,
        "2022_margin": 70.39,
        "swing_results": -15.73
    },
    {
        "county": "26",
        "2018_margin": 69.16,
        "2022_margin": 48.40,
        "swing_results": -20.76
    },
    {
        "county": "27",
        "2018_margin": 62.06,
        "2022_margin": 53.81,
        "swing_results": -8.25
    },
    {
        "county": "28",
        "2018_margin": 77.29,
        "2022_margin": 70.18,
        "swing_results": -7.11
    }
]

const candidate2022_2018Options = [{
        party: "Democrat",
        name: "Ewing 2022 Mayor Race",
        dataKey: "2022_margin",
        cssClass: "",

    },
    {
        party: "Republican",
        name: "Ewing 2018 Mayor Race",
        dataKey: "2018_margin",
        cssClass: "",
    },
    {
        party: "Republican",
        name: "Party Swing",
        dataKey: "swing_results",
        cssClass: "winner",
    }
];

const electionMayor2022_2018_MarginSwingData = new ElectionData("county", electionMayor2022_2018_MarginSwing, candidate2022_2018Options);