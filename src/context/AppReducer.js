export default (state,action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.paylod)
            }

        case 'ADD_TRANSACTION':
            return{
                ...state,
                transaction: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}