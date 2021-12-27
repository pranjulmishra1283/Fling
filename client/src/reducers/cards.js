import { FETCH_CARDS, LIKE_CARD } from "../constants/actionTypes";

export default (cards = [], action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return action.payload;
        case LIKE_CARD:
            return cards.map((card) => (card._id === action.payload._id ? action.payload : card));
        default:
            return cards;
    }
}