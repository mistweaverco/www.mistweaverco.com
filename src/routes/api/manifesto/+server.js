import { json } from '@sveltejs/kit';

/**
 * Fetch all quotes
 * @returns {Promise<Array<string>>} - An array of quotes
 */
const fetchQuotes = async () => {
	const quotes = import.meta.glob('./*.json', { eager: true });
	return Object.values(quotes)
		.map((quote) => quote.default)
		.flat();
};

export const GET = async () => {
	const quotes = await fetchQuotes();

	// Randomize the order of quotes
	const randomized = quotes.sort(() => 0.5 - Math.random());

	return json(randomized);
};
