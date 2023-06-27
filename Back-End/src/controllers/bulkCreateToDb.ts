import PokemonModel, { Pokemon } from "../models/Pokemon";
import { Request, Response } from "express";
import axios from "axios";
const bulkCreateToDb: () => void = async () => {
    try {
        const count = await PokemonModel.countDocuments();
        if(count < 20) {
            let arrayPromises = [];
            for(let i = 1; i < 301; i++) {
                const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res=>res.data);
                arrayPromises.push(pokemonPromise)
            }
            const pokemons = await Promise.all(arrayPromises);    
            let evolutionChainsPromises: Array<any> = [];
            let newPokemonsArr: any = pokemons.map(async (pok) => {
                let types = pok.types.map((type: any) => type.type.name)
                let promise = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pok.id}`).then(res => {
                    return {
                        url: res.data.evolution_chain.url,
                        pokemonId: pok.id
                    }
                })
                evolutionChainsPromises.push(promise)
                // console.log(types);
                
                return {
                    _id: pok.id,
                    name: pok.name,
                    types: types,
                    lifePoints: pok.stats[0].base_stat,
                    attackPoints: pok.stats[1].base_stat,
                    defensePoints: pok.stats[2].base_stat,
                    speedPoints: pok.stats[5].base_stat,
                    heigth: pok.height,
                    weight: pok.weight, 
                    img: pok.sprites.other.home.front_default,
                    isFromApi: true,
                    evolutionGroup: 0
                }
            })
            let newPokemonsArr2 = await Promise.all(newPokemonsArr)
            // console.log(newPokemonsArr2);
            
            let pokemonEvolutions = await Promise.all(evolutionChainsPromises)
            newPokemonsArr2 = newPokemonsArr2.map(async (pok: any, i: any) => {
                  (await pok).evolutionGroup = Number(pokemonEvolutions[i]?.url?.split("chain/")[1]?.slice(0, -1)) 
                  return pok
            }) 
            let finalArray = await Promise.all(newPokemonsArr2)
            console.log(finalArray);
            
            await PokemonModel.insertMany(finalArray)
        }
    } catch (error) { 
        console.log("Error on 'bulkCreateToDb'");
        console.log(error);
    }
};

export default bulkCreateToDb