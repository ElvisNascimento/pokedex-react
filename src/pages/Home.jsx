import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    const [startGen, setStartGen] = useState();
    const [endGen, setEndGen] = useState();
    const [pokemons, setPokemons] = useState([]);
    const [generation, setGeneration] = useState(1);

    const onChangeGenerations = (generation) => {
        setGeneration(generation);
    }
    const getPokemons = async () => {
     if (generation === 1) {
            //total de 1 a 151
            setStartGen(1);
            setEndGen(151);
        }
        if (generation === 2) {
            //total de 152 a 251
            setStartGen(152);
            setEndGen(251);
        }
        if (generation === 3) {
            //total de 252 a 386
            setStartGen(252);
            setEndGen(386);
        }
        if (generation === 4) {
            //total de 387 a 493
            setStartGen(387);
            setEndGen(493);
        }
        if (generation === 5) {
            //total de 494 a 649
            setStartGen(494);
            setEndGen(649);
        }
        if (generation === 6) {
            //total de 650 a 721
            setStartGen(650);
            setEndGen(721);
        }
        if (generation === 7) {
            //total de 722 a 809
            setStartGen(722);
            setEndGen(809);
        }
        if (generation === 8) {
            //total de 810 a 900
            setStartGen(810);
            setEndGen(900);
        }
        setGeneration(generation);
        let endPoints = [];
        for (let i = startGen; i <= endGen; i++) {
            console.log(startGen,endGen);
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        await axios.all(endPoints.map((endpoint) => axios.get(endpoint)))
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
    useEffect(() => {
        getPokemons()
    });
    return (
        <>
            <Navbar pokemonFilter={pokemonFilter} onChangeGenerations={onChangeGenerations} />
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={key}>
                            <PokemonCard container md={{ height: 50 }} name={pokemon.data.name}
                                image={generation <= 5 ? pokemon['data']['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] : pokemon['data']['sprites']['front_default']} types={pokemon.data.types} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}