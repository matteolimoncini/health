// Database Ricette - Piano Nutrizionale
// Basato su nutrizionista.pdf
// NO banana, NO legumi solidi (solo hummus/creme)

export const nutritionRecipes = {
    // GIORNI ALLENAMENTO (Lunedì/Mercoledì - Palestra ore 12:00)
    workout: {
        colazione: {
            name: "Colazione",
            time: "8:00",
            description: "Scegli 1 opzione da ciascun gruppo (1+2+3) OPPURE il Porridge",
            isImportant: true,
            recipes: [
                // GRUPPO 1: CARBOIDRATI
                {
                    id: "colazione-1-pane-integrale",
                    name: "Opzione 1: 50g Pane Integrale",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: [
                        "50g pane integrale (es. 2 fette panbauletto)",
                        "Opzionale: velo di marmellata / miele / nutella"
                    ],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-biscotti-frollini",
                    name: "Opzione 1: 3 Biscotti Frollini",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["3 biscotti frollini (es. gocciole)"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-biscotti-secchi",
                    name: "Opzione 1: 5 Biscotti Secchi",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["5 biscotti secchi (es. orosaiwa)"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-fette-biscottate",
                    name: "Opzione 1: 2-3 Fette Biscottate",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: [
                        "2-3 fette biscottate",
                        "Opzionale: velo di marmellata / miele / nutella"
                    ],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-cereali",
                    name: "Opzione 1: 30g Corn Flakes/Cereali",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["30g corn flakes o cereali a piacimento (es. riso soffiato al cioccolato)"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-torta",
                    name: "Opzione 1: 1 Fetta di Torta",
                    difficulty: "facile",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs", "dolce"],
                    ingredients: ["1 fetta di torta (vedi ricetta PDF)", "Puoi congelarla e scongelarla"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-pancake",
                    name: "Opzione 1: 1/4 Pancake",
                    difficulty: "facile",
                    time: 5,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["1/4 di pancake (vedi ricetta instagram linkata nel PDF)", "Puoi congelarli"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-merendina",
                    name: "Opzione 1: 1 Plumcake/Camilla/Girella",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["1 plumcake / camilla / girella / buondì motta"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },

                // GRUPPO 2: LATTICINI/PROTEINE
                {
                    id: "colazione-2-latte",
                    name: "Opzione 2: 1 Tazza Latte",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["1 tazza di latte parzialmente scremato"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-2-yogurt-bianco",
                    name: "Opzione 2: 1 Yogurt Bianco Intero",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["1 yogurt bianco intero senza zucchero"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-2-yogurt-greco",
                    name: "Opzione 2: 1 Yogurt Greco",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["1 yogurt greco 0% o 2%"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-2-ricotta",
                    name: "Opzione 2: 50g Ricotta/Philadelphia",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["50g ricotta / philadelphia alla greca / protein"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },

                // GRUPPO 3: FRUTTA
                {
                    id: "colazione-3-frutto",
                    name: "Opzione 3: 1 Frutto",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-fruit",
                    tags: ["colazione", "fruit"],
                    ingredients: ["1 frutto", "1-2 bicchieri d'acqua"],
                    steps: ["Scegli una opzione dal gruppo 3"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },

                // ALTERNATIVA PORRIDGE
                {
                    id: "colazione-porridge-cotto",
                    name: "OPPURE: Porridge Cotto",
                    difficulty: "media",
                    time: 10,
                    category: "colazione-complete",
                    tags: ["colazione", "porridge", "caldo"],
                    ingredients: [
                        "30g fiocchi di avena",
                        "150g latte",
                        "Frutta",
                        "Opzionale: 1 cubetto cioccolato / 1C cacao / 1C cocco"
                    ],
                    steps: [
                        "Cuoci 30g fiocchi e 150g latte mescolando",
                        "Aggiungi frutta alla fine",
                        "Per cremosità usa fiocchi piccoli"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-porridge-freddo",
                    name: "OPPURE: Porridge Overnight",
                    difficulty: "facile",
                    time: 5,
                    category: "colazione-complete",
                    tags: ["colazione", "porridge", "meal-prep"],
                    ingredients: [
                        "30g fiocchi di avena",
                        "60g yogurt",
                        "90g latte",
                        "Miele (opzionale)",
                        "Frutta",
                        "Opzionale: 1 cubetto cioccolato / 1C cacao / 1C cocco"
                    ],
                    steps: [
                        "Mischia fiocchi, yogurt e latte",
                        "Lascia in frigo una notte (si conserva 3 giorni)",
                        "Servi con frutta"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        spuntino: {
            name: "Merenda Mattina",
            time: "10:30",
            description: "1 Frutto + Acqua",
            isImportant: false,
            recipes: [
                {
                    id: "merenda1-frutto",
                    name: "1 Frutto + Acqua",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "spuntino",
                    tags: ["spuntino", "fruit"],
                    ingredients: ["1 frutto", "1-2 bicchieri d'acqua"],
                    steps: ["Mangia a metà mattina"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        pranzo: {
            name: "Pranzo",
            time: "13:00",
            description: "Segui il piano settimanale (Piatto Unico)",
            isImportant: true,
            recipes: [
                {
                    id: "pranzo-lun-mar-dom",
                    name: "LUN/MAR/DOM: Pasta e Legumi",
                    difficulty: "facile",
                    time: 20,
                    category: "pranzo",
                    tags: ["pranzo", "legumi", "vegan"],
                    ingredients: [
                        "120g legumi cotti OPPURE 30-40g pasta di legumi",
                        "60g pasta (o sostituti: 60g riso/farro/couscous, 80g pane, 220g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Unisci pasta e legumi (piatto unico)",
                        "Condisci con olio e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "pranzo-mer-gio-sab",
                    name: "MER/GIO: Pasta e Formaggio",
                    difficulty: "facile",
                    time: 15,
                    category: "pranzo",
                    tags: ["pranzo", "formaggio", "vegetariano"],
                    ingredients: [
                        "Formaggio (100g ricotta / 50-60g altri / 80g fiocchi latte)",
                        "60g pasta (o sostituti: 60g riso/farro/couscous, 80g pane, 220g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Unisci pasta e formaggio",
                        "Condisci con olio e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "pranzo-sabato-ravioli",
                    name: "SABATO (Alt): Ravioli",
                    difficulty: "facile",
                    time: 15,
                    category: "pranzo",
                    tags: ["pranzo", "special"],
                    ingredients: [
                        "120g ravioli",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Cuoci i ravioli",
                        "Condisci con verdure e olio"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "pranzo-venerdi",
                    name: "VENERDÌ: Pasta e Pesce Conservato",
                    difficulty: "facile",
                    time: 15,
                    category: "pranzo",
                    tags: ["pranzo", "pesce"],
                    ingredients: [
                        "1 scatoletta tonno OPPURE 50g salmone affumicato",
                        "60g pasta (o sostituti: 60g riso/farro/couscous, 80g pane, 220g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Unisci pasta e pesce",
                        "Condisci con olio e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        merenda: {
            name: "Merenda Pomeriggio",
            time: "16:30",
            description: "1 Frutto + Extra se hai fame",
            isImportant: false,
            recipes: [
                {
                    id: "merenda2-base",
                    name: "Base: 1 Frutto",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "merenda",
                    tags: ["merenda", "fruit"],
                    ingredients: ["1 frutto", "1-2 bicchieri d'acqua"],
                    steps: ["Mangia a metà pomeriggio"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-cracker",
                    name: "Extra: Crackers",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra"],
                    ingredients: ["1 pacchetto cracker mulino bianco"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-popcorn",
                    name: "Extra: Popcorn",
                    difficulty: "facilissimo",
                    time: 3,
                    category: "merenda-extra",
                    tags: ["extra"],
                    ingredients: ["1 pacchettino popcorn (25g)"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-grissini",
                    name: "Extra: Grissini",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra"],
                    ingredients: ["1 pacchetto grissini (20g)"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-cioccolato",
                    name: "Extra: Cioccolato",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra", "dolce"],
                    ingredients: ["1 striscia cioccolato (lato corto) / 1 orociok"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-yogurt",
                    name: "Extra: Yogurt/Grana",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra", "protein"],
                    ingredients: ["1 yogurt bianco intero OPPURE 1 cubetto grana (20g)"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        cena: {
            name: "Cena",
            time: "20:00",
            description: "Secondo Piatto + Pane + Verdure",
            isImportant: true,
            recipes: [
                {
                    id: "cena-pesce",
                    name: "Pesce Fresco",
                    difficulty: "facile",
                    time: 25,
                    category: "cena",
                    tags: ["cena", "pesce"],
                    ingredients: [
                        "Pesce (150g bianco / 120g grasso / 250g molluschi)",
                        "30-40g pane (o 150g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Cuoci il pesce (forno/padella)",
                        "Accompagna con pane e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "cena-uova",
                    name: "Uova",
                    difficulty: "facile",
                    time: 15,
                    category: "cena",
                    tags: ["cena", "uova"],
                    ingredients: [
                        "2 uova",
                        "30-40g pane (o 150g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Cucina le uova come preferisci (sode, occhio di bue, frittata)",
                        "Accompagna con pane e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "cena-carne-affettati",
                    name: "Carne/Affettati (Saltuario)",
                    difficulty: "facilissimo",
                    time: 10,
                    category: "cena",
                    tags: ["cena", "carne"],
                    ingredients: [
                        "100g bresaola/tacchino/pollo OPPURE 50g crudo/cotto",
                        "30-40g pane (o 150g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Pasto freddo o veloce",
                        "Accompagna con pane e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "cena-compagnia",
                    name: "DOMENICA: Cena in Compagnia",
                    difficulty: "facile",
                    time: 0,
                    category: "cena",
                    tags: ["cena", "free"],
                    ingredients: ["Pasto libero / sociale"],
                    steps: ["Goditi la cena"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        }
    },

    // GIORNI RIPOSO
    rest: {
        colazione: {
            name: "Colazione",
            time: "8:00",
            description: "Scegli 1 opzione da ciascun gruppo (1+2+3) OPPURE il Porridge",
            isImportant: true,
            recipes: [
                // GRUPPO 1: CARBOIDRATI
                {
                    id: "colazione-1-pane-integrale",
                    name: "Opzione 1: 50g Pane Integrale",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: [
                        "50g pane integrale (es. 2 fette panbauletto)",
                        "Opzionale: velo di marmellata / miele / nutella"
                    ],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-biscotti-frollini",
                    name: "Opzione 1: 3 Biscotti Frollini",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["3 biscotti frollini (es. gocciole)"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-biscotti-secchi",
                    name: "Opzione 1: 5 Biscotti Secchi",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["5 biscotti secchi (es. orosaiwa)"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-fette-biscottate",
                    name: "Opzione 1: 2-3 Fette Biscottate",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: [
                        "2-3 fette biscottate",
                        "Opzionale: velo di marmellata / miele / nutella"
                    ],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-cereali",
                    name: "Opzione 1: 30g Corn Flakes/Cereali",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["30g corn flakes o cereali a piacimento (es. riso soffiato al cioccolato)"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-torta",
                    name: "Opzione 1: 1 Fetta di Torta",
                    difficulty: "facile",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs", "dolce"],
                    ingredients: ["1 fetta di torta (vedi ricetta PDF)", "Puoi congelarla e scongelarla"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-pancake",
                    name: "Opzione 1: 1/4 Pancake",
                    difficulty: "facile",
                    time: 5,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["1/4 di pancake (vedi ricetta instagram linkata nel PDF)", "Puoi congelarli"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-1-merendina",
                    name: "Opzione 1: 1 Plumcake/Camilla/Girella",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-carbs",
                    tags: ["colazione", "carbs"],
                    ingredients: ["1 plumcake / camilla / girella / buondì motta"],
                    steps: ["Scegli una opzione dal gruppo 1"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },

                // GRUPPO 2: LATTICINI/PROTEINE
                {
                    id: "colazione-2-latte",
                    name: "Opzione 2: 1 Tazza Latte",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["1 tazza di latte parzialmente scremato"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-2-yogurt-bianco",
                    name: "Opzione 2: 1 Yogurt Bianco Intero",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["1 yogurt bianco intero senza zucchero"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-2-yogurt-greco",
                    name: "Opzione 2: 1 Yogurt Greco",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["1 yogurt greco 0% o 2%"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-2-ricotta",
                    name: "Opzione 2: 50g Ricotta/Philadelphia",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-protein",
                    tags: ["colazione", "protein"],
                    ingredients: ["50g ricotta / philadelphia alla greca / protein"],
                    steps: ["Scegli una opzione dal gruppo 2"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },

                // GRUPPO 3: FRUTTA
                {
                    id: "colazione-3-frutto",
                    name: "Opzione 3: 1 Frutto",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "colazione-fruit",
                    tags: ["colazione", "fruit"],
                    ingredients: ["1 frutto", "1-2 bicchieri d'acqua"],
                    steps: ["Scegli una opzione dal gruppo 3"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },

                // ALTERNATIVA PORRIDGE
                {
                    id: "colazione-porridge-cotto",
                    name: "OPPURE: Porridge Cotto",
                    difficulty: "media",
                    time: 10,
                    category: "colazione-complete",
                    tags: ["colazione", "porridge", "caldo"],
                    ingredients: [
                        "30g fiocchi di avena",
                        "150g latte",
                        "Frutta",
                        "Opzionale: 1 cubetto cioccolato / 1C cacao / 1C cocco"
                    ],
                    steps: [
                        "Cuoci 30g fiocchi e 150g latte mescolando",
                        "Aggiungi frutta alla fine",
                        "Per cremosità usa fiocchi piccoli"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "colazione-porridge-freddo",
                    name: "OPPURE: Porridge Overnight",
                    difficulty: "facile",
                    time: 5,
                    category: "colazione-complete",
                    tags: ["colazione", "porridge", "meal-prep"],
                    ingredients: [
                        "30g fiocchi di avena",
                        "60g yogurt",
                        "90g latte",
                        "Miele (opzionale)",
                        "Frutta",
                        "Opzionale: 1 cubetto cioccolato / 1C cacao / 1C cocco"
                    ],
                    steps: [
                        "Mischia fiocchi, yogurt e latte",
                        "Lascia in frigo una notte (si conserva 3 giorni)",
                        "Servi con frutta"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        spuntino: {
            name: "Merenda Mattina",
            time: "10:30",
            description: "1 Frutto + Acqua",
            isImportant: false,
            recipes: [
                {
                    id: "merenda1-frutto",
                    name: "1 Frutto + Acqua",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "spuntino",
                    tags: ["spuntino", "fruit"],
                    ingredients: ["1 frutto", "1-2 bicchieri d'acqua"],
                    steps: ["Mangia a metà mattina"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        pranzo: {
            name: "Pranzo",
            time: "13:00",
            description: "Segui il piano settimanale (Piatto Unico)",
            isImportant: true,
            recipes: [
                {
                    id: "pranzo-lun-mar-dom",
                    name: "LUN/MAR/DOM: Pasta e Legumi",
                    difficulty: "facile",
                    time: 20,
                    category: "pranzo",
                    tags: ["pranzo", "legumi", "vegan"],
                    ingredients: [
                        "120g legumi cotti OPPURE 30-40g pasta di legumi",
                        "60g pasta (o sostituti: 60g riso/farro/couscous, 80g pane, 220g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Unisci pasta e legumi (piatto unico)",
                        "Condisci con olio e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "pranzo-mer-gio-sab",
                    name: "MER/GIO: Pasta e Formaggio",
                    difficulty: "facile",
                    time: 15,
                    category: "pranzo",
                    tags: ["pranzo", "formaggio", "vegetariano"],
                    ingredients: [
                        "Formaggio (100g ricotta / 50-60g altri / 80g fiocchi latte)",
                        "60g pasta (o sostituti: 60g riso/farro/couscous, 80g pane, 220g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Unisci pasta e formaggio",
                        "Condisci con olio e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "pranzo-sabato-ravioli",
                    name: "SABATO (Alt): Ravioli",
                    difficulty: "facile",
                    time: 15,
                    category: "pranzo",
                    tags: ["pranzo", "special"],
                    ingredients: [
                        "120g ravioli",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Cuoci i ravioli",
                        "Condisci con verdure e olio"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "pranzo-venerdi",
                    name: "VENERDÌ: Pasta e Pesce Conservato",
                    difficulty: "facile",
                    time: 15,
                    category: "pranzo",
                    tags: ["pranzo", "pesce"],
                    ingredients: [
                        "1 scatoletta tonno OPPURE 50g salmone affumicato",
                        "60g pasta (o sostituti: 60g riso/farro/couscous, 80g pane, 220g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Unisci pasta e pesce",
                        "Condisci con olio e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        merenda: {
            name: "Merenda Pomeriggio",
            time: "16:30",
            description: "1 Frutto + Extra se hai fame",
            isImportant: false,
            recipes: [
                {
                    id: "merenda2-base",
                    name: "Base: 1 Frutto",
                    difficulty: "facilissimo",
                    time: 2,
                    category: "merenda",
                    tags: ["merenda", "fruit"],
                    ingredients: ["1 frutto", "1-2 bicchieri d'acqua"],
                    steps: ["Mangia a metà pomeriggio"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-cracker",
                    name: "Extra: Crackers",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra"],
                    ingredients: ["1 pacchetto cracker mulino bianco"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-popcorn",
                    name: "Extra: Popcorn",
                    difficulty: "facilissimo",
                    time: 3,
                    category: "merenda-extra",
                    tags: ["extra"],
                    ingredients: ["1 pacchettino popcorn (25g)"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-grissini",
                    name: "Extra: Grissini",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra"],
                    ingredients: ["1 pacchetto grissini (20g)"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-cioccolato",
                    name: "Extra: Cioccolato",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra", "dolce"],
                    ingredients: ["1 striscia cioccolato (lato corto) / 1 orociok"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "merenda2-extra-yogurt",
                    name: "Extra: Yogurt/Grana",
                    difficulty: "facilissimo",
                    time: 1,
                    category: "merenda-extra",
                    tags: ["extra", "protein"],
                    ingredients: ["1 yogurt bianco intero OPPURE 1 cubetto grana (20g)"],
                    steps: ["Solo se hai ancora fame"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        },

        cena: {
            name: "Cena",
            time: "20:00",
            description: "Secondo Piatto + Pane + Verdure",
            isImportant: true,
            recipes: [
                {
                    id: "cena-pesce",
                    name: "Pesce Fresco",
                    difficulty: "facile",
                    time: 25,
                    category: "cena",
                    tags: ["cena", "pesce"],
                    ingredients: [
                        "Pesce (150g bianco / 120g grasso / 250g molluschi)",
                        "30-40g pane (o 150g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Cuoci il pesce (forno/padella)",
                        "Accompagna con pane e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "cena-uova",
                    name: "Uova",
                    difficulty: "facile",
                    time: 15,
                    category: "cena",
                    tags: ["cena", "uova"],
                    ingredients: [
                        "2 uova",
                        "30-40g pane (o 150g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Cucina le uova come preferisci (sode, occhio di bue, frittata)",
                        "Accompagna con pane e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "cena-carne-affettati",
                    name: "Carne/Affettati (Saltuario)",
                    difficulty: "facilissimo",
                    time: 10,
                    category: "cena",
                    tags: ["cena", "carne"],
                    ingredients: [
                        "100g bresaola/tacchino/pollo OPPURE 50g crudo/cotto",
                        "30-40g pane (o 150g patate)",
                        "Verdura a volontà",
                        "1 cucchiaio olio evo"
                    ],
                    steps: [
                        "Pasto freddo o veloce",
                        "Accompagna con pane e verdure"
                    ],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                },
                {
                    id: "cena-compagnia",
                    name: "DOMENICA: Cena in Compagnia",
                    difficulty: "facile",
                    time: 0,
                    category: "cena",
                    tags: ["cena", "free"],
                    ingredients: ["Pasto libero / sociale"],
                    steps: ["Goditi la cena"],
                    macros: { protein: "-", carbs: "-", fats: "-", calories: "-" }
                }
            ]
        }
    }
};

// Helper function per filtrare ricette
export function filterRecipes(recipes, filters) {
    return recipes.filter(recipe => {
        if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
        if (filters.maxTime && recipe.time > filters.maxTime) return false;
        if (filters.tag && !recipe.tags.includes(filters.tag)) return false;
        return true;
    });
}

// Helper function per ottenere ricette per pasto
export function getMealRecipes(dayType, mealType) {
    return nutritionRecipes[dayType]?.[mealType]?.recipes || [];
}
