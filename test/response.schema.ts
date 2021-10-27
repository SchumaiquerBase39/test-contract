import Joi = require('joi');

export const _result = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required(),
});

export const pokemonLimitSchema = Joi.object({
    count: Joi.number().required(),
    next: Joi.string().required(),
    previous: Joi.string().required().allow(null),
    results: Joi.array().items(_result).required()
});


/*
          -------------- EXEMPLE JSON SCHEMA --------------
{
    "count": 1118,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5",
    "previous": null,
    "results": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
      }
    ]
  }
*/
