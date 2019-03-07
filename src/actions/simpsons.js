import { fetchInfo } from '../services/simpsonsApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = () => ({
  type: FETCH_FACTS,
  payload: fetchInfo()
});
