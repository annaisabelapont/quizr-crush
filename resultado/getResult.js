export function getResult(personName) {
  switch (personName.toLowerCase()) {
    case "anna isabela":
    case "annisabolas":
      return {
        love: "Elefante do PHP",
        imgSrc: "elefantePHP.png",
        video: false,
      };

    case "dhuli":
      return {
        love: "Cachorrinho da figurinha",
        imgSrc: "cachorrinhoFig.png",
        video: false,
      };

    case "giovanna":
    case "giovanna rodrigues":
      return {
        love: "Bonnie do FNAF",
        imgSrc: "bonnie.png",
        video: false,
      };

    case "karan":
    case "professor karan":
    case "karan luciano":
      return {
        love: "Shrek jogador",
        imgSrc: "shrekJogador.png",
        video: false,
      };

    case "emanueli":
    case "manu":
      return {
        love: "Charles Leclerc",
        imgSrc: "charlesLeclerc.png",
        video: false,
      };

    case "luiza":
    case "maria luiza":
    case "luiza souza":
      return {
        love: "Caminhoneiro",
        imgSrc: "patriota.png",
        video: false,
      };

    case "lucas":
    case "lucas oliveira":
      return {
        love: "Nikolas Ferreira",
        imgSrc: "nikolasFerreira.png",
        video: false,
      };

    case "luis miguel":
    case "luis":
      return {
        love: "Marisa Monte",
        imgSrc: "marisaMonte.png",
        video: false,
      };

    case "giovana":
    case "giovana santana":
      return {
        love: "Jimin",
        imgSrc: "jimin.png",
        video: false,
      };

    case "mariana":
    case "mariana da luz":
      return {
        love: "Padre Kelmon",
        imgSrc: "padreKelmon.png",
        video: false,
      };

    case "arthur":
      return {
        love: "Freddie Mercury",
        imgSrc: "freddieMercury.png",
        video: false,
      };

    default:
      const aleatorio = Math.random();

      if (aleatorio >= 0.87) {
        return {
          love: "Papagaio feliz",
          imgSrc: "papagaio.mp4",
          video: true,
        };
      } else if (aleatorio >= 0.74) {
        return {
          love: "Hipismo",
          imgSrc: "cavalo.mp4",
          video: true,
        };
      } else if (aleatorio >= 0.69) {
        return {
          love: "Tralalelo Tralala",
          imgSrc: "tralaleloTralala.mp4",
          video: true,
        };
      } else if (aleatorio >= 0.6) {
        return {
          love: "Emi",
          imgSrc: "emi.png",
          video: false,
        };
      } else if (aleatorio >= 0.5) {
        return {
          love: "Berrante",
          imgSrc: "berrante.mp4",
          video: true,
        };
      } else if (aleatorio >= 0.43) {
        return {
          love: "Eduardo",
          imgSrc: "eduardo.png",
          video: false,
        };
      } else if (aleatorio >= 0.35) {
        return {
          love: "Papagaio feliz",
          imgSrc: "papagaio.mp4",
          video: true,
        };
      } else if (aleatorio >= 0.15) {
        return {
          love: "Saxofone",
          imgSrc: "saxofone.mp4",
          video: true,
        };
      }

      return {
        love: "Tralalelo Tralala",
        imgSrc: "tralaleloTralala.mp4",
        video: true,
      };
  }
}
