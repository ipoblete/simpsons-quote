export const getQuotes = state => {
    console.log('Hello from selector');
    return state.simpsons.quote;
};
export const isLoading = state => state.simpsons.isLoading;
