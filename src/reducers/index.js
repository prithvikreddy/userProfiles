import { SEARCH, SELECTUSER } from '../actions';
import People from '../people.json';

import { fromJS } from "immutable";

const initialState = fromJS({ intialData: People.People, peoples: People.People, selectedUser: null });

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH: {
            const { value } = action;
            const peoples = state.getIn(["intialData"]).filter((val) => val.get("name").toLowerCase().includes(value));
            return state.setIn(["peoples"], peoples)
        }
        case SELECTUSER: {
            const { value } = action;
            return state.setIn(["selectedUser"], value);
        }
        default:
            return state;
    }
}
