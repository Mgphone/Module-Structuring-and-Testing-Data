// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
// function getCardValue(checkingCard, emoji) {
//   //   const splitCard = checkingCard.split("");
//   //   return splitCard;
//   const emojiArray = ["❤️", "♠️", "♦️", "♣️"];
//   const isEmojiValid = emojiArray.includes(emoji);
//   const valueOfCard =
//     checkingCard == "A"
//       ? 11
//       : checkingCard == "K" || checkingCard == "Q" || checkingCard == "J"
//       ? 10
//       : !isNaN(checkingCard) && checkingCard >= 2 && checkingCard <= 10
//       ? Number(checkingCard)
//       : false;
//   return isEmojiValid && valueOfCard ? valueOfCard : "Invalid card rank";
// }

// console.log(getCardValue("A", "♠️"));
function getCardValue(card) {
  const validSuit = ["❤️", "♠️", "♦️", "♣️"];

  const rank = card.slice(0, -2);
  const suit = card.slice(-2);
  if (!validSuit.includes(suit)) {
    throw new Error("Invalid card suit");
  }
  const valueOfCard =
    rank === "A"
      ? 11
      : ["K", "Q", "J", "10"].includes(rank)
      ? 10
      : !isNaN(rank) && rank >= 2 && rank <= 9
      ? Number(rank)
      : false;
  if (!valueOfCard) {
    throw new Error("Invalid card rank");
  }
  return valueOfCard;
}
// console.log(getCardValue("LL"));

module.exports = getCardValue;
