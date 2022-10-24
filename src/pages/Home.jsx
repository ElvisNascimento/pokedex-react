import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    let startGeneration = 0;
    let endGeneration = 0;
    const [pokemons, setPokemons] = useState([]);
    const [generation, setGeneration] = useState(1);

    useEffect(() => {
        getPokemons()
        console.log("chamando a funcao pokemons:" + startGeneration, endGeneration);

    }, []);

    const onChangeGenerations = (generation) => {
        console.log("chamando a funcao changeGen:" + generation);
        setGeneration(generation);
        console.log("chamando a funcao getGen:" + generation);
        getGeneration(generation);
        getPokemons();
    }
    const getGeneration = (generation) =>
    {
        if (generation === 1) {
            //total de 1 a 151
            startGeneration = 1;
            endGeneration = 151;
        }
        if (generation === 2) {
            //total de 152 a 251
            startGeneration = 152;
            endGeneration = 251;
        }
        if (generation === 3) {
            //total de 252 a 386
            startGeneration = 252;
            endGeneration = 386;
        }
        if (generation === 4) {
            //total de 387 a 493
            startGeneration = 387;
            endGeneration = 493;
        }
        if (generation === 5) {
            //total de 494 a 649
            startGeneration = 494;
            endGeneration = 649;
        }
        // if (generation === 6) {
        //     //total de 650 a 721
        //     startGeneration = 650;
        //     endGeneration = 659;
        // }
        // if (generation === 7) {
        //     //total de 722 a 809
        //     startGeneration = 722;
        //     endGeneration = 731;
        // }
        // if (generation === 8) {
        //     //total de 810 a 900
        //     startGeneration = 810;
        //     endGeneration = 819;
        // }
        
    }
    const getPokemons = async() => {
        getGeneration(generation);
        let endPoints = [];
        for (let i = startGeneration; i <= endGeneration; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        let response = await axios.all(endPoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res)).catch((error) => console.log(error));
    };

    const pokemonFilter = (name) => {
        let filteredPokemons = [];
        if (name === '') {
            getPokemons();
        }
        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    };
    return (
        <>
            <Navbar pokemonFilter={pokemonFilter} onChangeGenerations={onChangeGenerations}/>
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={key}>
                            <PokemonCard container md={{height:50}} name={pokemon.data.name} image={pokemon['data']['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} types={pokemon.data.types} />
                            console.log(image.value);
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}