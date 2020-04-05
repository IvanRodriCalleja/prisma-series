const series = require("./series.json");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const defaultImage = {
  medium:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsciences.ucf.edu%2Fpsychology%2Fpeople%2Fwhite-grace%2Fno-image-available%2F&psig=AOvVaw1QWBQ8VwyDsqV6PB9bwr_-&ust=1586098655246000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCe5Y2Ez-gCFQAAAAAdAAAAABAI",
  original:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsciences.ucf.edu%2Fpsychology%2Fpeople%2Fwhite-grace%2Fno-image-available%2F&psig=AOvVaw1QWBQ8VwyDsqV6PB9bwr_-&ust=1586098655246000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCe5Y2Ez-gCFQAAAAAdAAAAABAI",
};

const seed = async () => {
  try {
    console.log(`Cleanning database`);
    console.log(
      "--------------------------------------------------------------------------------------------"
    );

    const serieDelete = prisma.serie.deleteMany();
    const imageDelete = prisma.image.deleteMany();
    const actorDelete = prisma.actor.deleteMany();
    const characterDelete = prisma.character.deleteMany();
    const seasonDelete = prisma.season.deleteMany();
    const episodeDelete = prisma.episode.deleteMany();

    await Promise.all([
      serieDelete,
      imageDelete,
      actorDelete,
      characterDelete,
      seasonDelete,
      episodeDelete,
    ]);

    console.log(`Database empty!`);
    console.log(
      "--------------------------------------------------------------------------------------------"
    );

    const seriesModel = series.map(
      ({ title, language, image, actors = [], seasons = [] }) => ({
        data: {
          title: title,
          language: language,
          image: {
            create: image || defaultImage,
          },
          actors: {
            create: actors.map((actor) => ({
              name: actor.person.name,
              image: {
                create: actor.person.image || defaultImage,
              },
              character: {
                create: {
                  name: actor.character.name,
                  image: {
                    create: actor.character.image || defaultImage,
                  },
                },
              },
            })),
          },
          seasons: {
            create: seasons.map((season) => ({
              seasonNumber: season.seasonNumber,
              episodes: {
                create: season.episodes.map((episode) => ({
                  title: episode.title,
                  image: {
                    create: episode.image || defaultImage,
                  },
                })),
              },
            })),
          },
        },
      })
    );

    console.log(`Starting to save ${seriesModel.length} series`);
    console.log(
      "--------------------------------------------------------------------------------------------"
    );

    for (let i = 0; i < seriesModel.length; i++) {
      const serie = seriesModel[i];
      console.log(`Saving ${i + 1} of ${seriesModel.length}`);
      console.log(
        "--------------------------------------------------------------------------------------------"
      );
      await prisma.serie.create(serie);

      console.log(`${i + 1} saved`);

      console.log(
        "--------------------------------------------------------------------------------------------"
      );
    }
    console.log("Finish!!");
  } catch (error) {
    console.error("Error!!");
    console.error({ error });
  }
};

seed();
