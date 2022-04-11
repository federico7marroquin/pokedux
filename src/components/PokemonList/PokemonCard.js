import React from 'react'
import { Divider, Grid, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import './styles.css';

export default function PokemonCard({ pokemon }) {
    const { name, sprites } = pokemon
    return (
        <Grid.Column mobile={16} tablet={8} computer={4} >
            <div className="PokemonCard">
                <Icon name='favorite' color={FAV_COLOR} />
                <Image centered src={sprites.front_default} alt="Pokemon front" />

                <p>{name}</p>
                <Divider />
                {pokemon.types.map(type => <Label key={type.url} color={MAIN_COLOR}>{type.type.name}</Label>
                )}
            </div>
        </Grid.Column>
    )
}
