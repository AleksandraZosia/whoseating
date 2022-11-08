import { calcAverage, calcCalendar } from "./data_functions"

const PERFECT_MACROS = {
  proteins: {
    MIN: 10,
    MAX: 25,
    //   AVG_PROTEIN: calcAverage([0.1, 0.25]),
  },

  fat: {
    MIN: 20,
    MAX: 30,
    // AVG_FAT: calcAverage([2, 3]),
  },

  carbohydrates: {
    MIN: 50,
    MAX: 65,
    // AVG_CARBS: calcAverage([5, 65]),
  },
}

const MEALS = [
  {
    header: "Breakfast",
    btnText: "+ Add breakfast ingredients",
    url: "breakfast",
  },
  {
    header: "Lunch",
    btnText: "+ Add lunch ingridients",
    url: "lunch",
  },
  {
    header: "Dinner",
    btnText: "+ Add dinner ingridient",
    url: "dinner",
  },
  {
    header: "Snack",
    btnText: "+ Add snack",
    url: "snack",
  },
]

// Wrong and potentially buggy way to pass date as staticPath:

const EXAMPLE_INPUT = [
  "jabłko",
  "jabłko",
  "fasola",
  "fasola",
  "banan",
  "jabłko",
  "gruszka",
  "czosnek",
]

const API_KEY = "c8ZXuxxo9ulRzZdedgc40fD6fsT9xAGMavbNtu65"

export { PERFECT_MACROS, EXAMPLE_INPUT, API_KEY, MEALS }
