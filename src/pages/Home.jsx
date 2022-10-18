import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons()
    }, []);
    const getPokemons = () => {
        let endPoints = [];
        for (let i = 1; i <= 151; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        let response = axios.all(endPoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res)).catch((error) => console.log(error));
    };

    const pokemonFilter = (name) => {
        let filteredPokemons = [];
        if(name === ''){
            getPokemons();
        }
        for(let i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    };
    return (
        <>
            <Navbar pokemonFilter ={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={2} key={key}>
                            <PokemonCard container name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}