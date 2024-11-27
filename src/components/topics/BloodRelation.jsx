// questions.js
export const questions = [
    {
      question: (
        <>
          <br /> <br />Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?
        </>
      ),
      options: ["Brother", "Uncle", "Cousin", "Father"],
      correctAnswer: 3,
      explanation: "The boy in the photograph is the only son of the son of Suresh's mother i.e., the son of Suresh. Hence, Suresh is the father of boy.",
      discussion: [
        { name: "Kaleem manhas", comment: "In question its son of Suresh's mother. How can be Suresh's father? Then Brother is correct. right?" },
      ]
    },
    {
      question: (
        <>
          If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?
        </>
      ),
      options: ["Q - N + M x P", "P + S x N - Q", "P - M + N x Q", "Q - S % P"],
      correctAnswer: 2,
      explanation: "P - M → P is the brother of M , M + N → M is the mother of N , N x Q → N is the sister of Q .Therefore, P is the maternal uncle of Q.",
      discussion: [
        { name: "Purushattam murmu", comment: "Yes, I agree C is the right answer" },
        { name: "Kaviya", comment:"Option C is the correct answer." }
      ]
    },
    // Add more questions as needed
  ];