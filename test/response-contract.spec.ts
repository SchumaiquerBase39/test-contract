import endpoints = require("../helper/endpoints.json");
import Http = require("../helper/http-methods");
import schemas = require("./response.schema");

import { expect } from "chai";

describe("Teste de contrato", () => {

  it("Get pokemons", async function () {
    let endpoint = endpoints["pokemon"] + "?limit=5"
    let res: any = await Http.get(endpoint)
    expect(res.statusCode).to.be.equal(200)
    const validation = schemas.pokemonLimitSchema.validate(res.body)
    expect(validation.error).to.be.equal(undefined)
  })

})
