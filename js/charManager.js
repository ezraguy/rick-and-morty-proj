// import { Character } from './character_class.js'
export const createCharacters = (data) => {
    data.map((item) => {
        let character = new Character(item.name, item.species, item.status, item.gender, item.image);
        character.render();
    }

    )
}