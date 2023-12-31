import React ,{ReactNode}from 'react';

const data = {
    "contact" :{
        "Title" : "Le bateau de Thibault",
        "img" : require("../assets/images/TIG.png"),
        "tel" : "06.63.99.99.78",
        "mail": "lebateaudethibault@gmail.com",
        "face": "www.facebook.com/lebateaudethibault",
        "description" : ["Qu'il est chaud le Soleil",
            "Quand nous sommes en vacances",
            "Y a d'la joie, des hirondelles",
            "C'est le sud de la France",
            "Papa bricole au garage",
            "Maman lit dans la chaise longue",
            "Dans ce joli paysage",
            "Moi je me balade en tongs"], 
        "description2" : ["Que du bonheur!",
                "Que du bonheur!"]
       },
       "ship" : {
        "aquilon" : {
            "Title" : "Aquilon",
            "img" : require("../assets/images/aquilon.png"),
            "legend" : "XXX YYY ZZZ",
            "description" : ["Qu'il est chaud le Soleil",
                            "Quand nous sommes en vacances",
                            "Y a d'la joie, des hirondelles",
                            "C'est le sud de la France",
                            "Papa bricole au garage",
                            "Maman lit dans la chaise longue",
                            "Dans ce joli paysage",
                            "Moi je me balade en tongs"], 
            "description2" : ["Que du bonheur!",
                "Que du bonheur!"]
        },
        "saphir" : {
            "Title" : "Saphir",
            "img" : require("../assets/images/saphir.png"),
            "legend" : "XXX YYY ZZZ",
            "description" : ["Qu'il est chaud le Soleil",
                            "Quand nous sommes en vacances",
                            "Y a d'la joie, des hirondelles",
                            "C'est le sud de la France",
                            "Papa bricole au garage",
                            "Maman lit dans la chaise longue",
                            "Dans ce joli paysage",
                            "Moi je me balade en tongs"], 
            "description2" : ["Que du bonheur!",
                "Que du bonheur!"]
        },
        "deLaBrise" : {
            "Title" : "De la Brise",
            "img" : require("../assets/images/deLaBrise.png"),
            "legend" : "XXX YYY ZZZ",
            "description" : ["Qu'il est chaud le Soleil",
                            "Quand nous sommes en vacances",
                            "Y a d'la joie, des hirondelles",
                            "C'est le sud de la France",
                            "Papa bricole au garage",
                            "Maman lit dans la chaise longue",
                            "Dans ce joli paysage",
                            "Moi je me balade en tongs"], 
            "description2" : ["Que du bonheur!",
                "Que du bonheur!"]
        },
        "gastMich" : {
            "Title" : "Gast Mich",
            "img" : require("../assets/images/gastMicher.png"),
            "legend" : "XXX YYY ZZZ",
            "description" : ["Qu'il est chaud le Soleil",
                            "Quand nous sommes en vacances",
                            "Y a d'la joie, des hirondelles",
                            "C'est le sud de la France",
                            "Papa bricole au garage",
                            "Maman lit dans la chaise longue",
                            "Dans ce joli paysage",
                            "Moi je me balade en tongs"], 
            "description2" : ["Que du bonheur!",
                "Que du bonheur!"]
        }},
        "restaurants" : {
            "bistrotLandais" : {
                "Title" : "Bistrot Landais",
                "img" : require("../assets/images/bistrotLandais.png"),
                "legend" : "XXX YYY ZZZ",
                "description" : ["Qu'il est chaud le Soleil",
                                "Quand nous sommes en vacances",
                                "Y a d'la joie, des hirondelles",
                                "C'est le sud de la France",
                                "Papa bricole au garage",
                                "Maman lit dans la chaise longue",
                                "Dans ce joli paysage",
                                "Moi je me balade en tongs"], 
                "description2" : ["Que du bonheur!",
                    "Que du bonheur!"]
            },
            "desGascons" : {
                "Title" : "Bistrot des Gascons",
                "img" : require("../assets/images/desGascons.png"),
                "legend" : "XXX YYY ZZZ",
                "description" : ["Qu'il est chaud le Soleil",
                                "Quand nous sommes en vacances",
                                "Y a d'la joie, des hirondelles",
                                "C'est le sud de la France",
                                "Papa bricole au garage",
                                "Maman lit dans la chaise longue",
                                "Dans ce joli paysage",
                                "Moi je me balade en tongs"], 
                "description2" : ["Que du bonheur!",
                    "Que du bonheur!"]
            },
            "fousDeLIle" : {
                "Title" : "Les fous de l'île",
                "img" : require("../assets/images/fousDeLIle.png"),
                "legend" : "XXX YYY ZZZ",
                "description" : ["Qu'il est chaud le Soleil",
                                "Quand nous sommes en vacances",
                                "Y a d'la joie, des hirondelles",
                                "C'est le sud de la France",
                                "Papa bricole au garage",
                                "Maman lit dans la chaise longue",
                                "Dans ce joli paysage",
                                "Moi je me balade en tongs"], 
                "description2" : ["Que du bonheur!",
                    "Que du bonheur!"]
            },
            "villa9Trois" : {
                "Title" : "Villa 9-Trois",
                "img" : require("../assets/images/villa9Trois.png"),
                "legend" : "XXX YYY ZZZ",
                "description" : ["Qu'il est chaud le Soleil",
                                "Quand nous sommes en vacances",
                                "Y a d'la joie, des hirondelles",
                                "C'est le sud de la France",
                                "Papa bricole au garage",
                                "Maman lit dans la chaise longue",
                                "Dans ce joli paysage",
                                "Moi je me balade en tongs"], 
                "description2" : ["Que du bonheur!",
                    "Que du bonheur!"]
            },
            "duSommelier" : {
                "Title" : "Bistrot du Sommelier",
                "img" : require("../assets/images/duSommelier.png"),
                "legend" : "XXX YYY ZZZ",
                "description" : ["Qu'il est chaud le Soleil",
                                "Quand nous sommes en vacances",
                                "Y a d'la joie, des hirondelles",
                                "C'est le sud de la France",
                                "Papa bricole au garage",
                                "Maman lit dans la chaise longue",
                                "Dans ce joli paysage",
                                "Moi je me balade en tongs"], 
               "description2" : ["Que du bonheur!",
                    "Que du bonheur!"]
            },
            "partenaire" : "Tous les restaurants partenaires avec le bateu de Thibault"        
           },
        
           "recipes" : {
            "homard" : {
                "Title" : "Homard en chaud-froid",
                "img" :  require("../assets/images/homardRecette.png"),
                "description" : ["Faites cuire les homards dans de l'eau bouillante",
                            "avec du thym, du laurier, du sel, du poivre",
                            "de Cayenne. Laissez cuire 20 minutes. Egouttez",
                            "les et laissez les refroidir",
                            "Découpez les coffres des homards dans le sens",
                            "de la longueur",
                            "Mélangez la mayonnaise avec le cognac, le corail",
                            "et la ciboulette ciselée"], 
                "description2" : ["",
                    ""]
            },
            "stJacques" : {
                "Title" : "Noix de Saint-Jacques - flambées au Cognac",
                "img" : require("../assets/images/saintJacques.png"),
                "description" : ["Faire fondre du beurre avec des échalotes puis", 
                "ajouter les noix de Saint-Jacques. Les faire revenir",
                "en laissant les milieu translucide puis les retirer du feu.",
                "Ajouter l'ail et le persil dans la poêle et laisser ",
                "cuire quelques secondes. Bien faire chauffer la ",
                "poêle puis flamber au Cognac. Une fois la flamme ",
                "éteinte, ajouter les noix de Saint-Jacques (il ne faut ",
                "pas les flamber car elles perdraient leur saveur ).",
                "Déguster chaud nature ou accompagné d'une ",
                "fondue de poireaux."],
                "description2" : ["",
                ""]
            },
            "bar" : {
                "Title" : "Bar rôti au laurier frais",
                "img" :  require("../assets/images/barRecette.png"),
                "description" : ["Faire fondre du beurre avec des échalotes puis ",
                "ajouter les noix de Saint-Jacques. Les faire revenir",
                "en laissant les milieu translucide puis les retirer du feu.",
                "Ajouter l'ail et le persil dans la poêle et laisser",
                "cuire quelques secondes. Bien faire chauffer la",
                "poêle puis flamber au Cognac. Une fois la flamme",
                "éteinte, ajouter les noix de Saint-Jacques (il ne faut",
                "pas les flamber car elles perdraient leur saveur ).",
                "Déguster chaud nature ou accompagné d'une",
                "fondue de poireaux."],
                "description2" : ["",
                    ""]
            },
            "tourteau" : {
                "Title" : "Tourteau Linguine",
                "img" : require("../assets/images/logo/poulpe.png"),
                "description" : ["Qu'il est chaud le Soleil",
                    "Quand nous sommes en vacances",
                    "Y a d'la joie, des hirondelles",
                    "C'est le sud de la France",
                    "Papa bricole au garage",
                    "Maman lit dans la chaise longue",
                    "Dans ce joli paysage",
                    "Moi je me balade en tongs"], 
                "description2" : ["",
                    ""]
            }
           }

    }


const DataContext = React.createContext(data);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
  };

export default DataContext;