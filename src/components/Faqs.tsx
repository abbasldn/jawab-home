import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do the conversation cards work?',
      answer:
        'Each card contains thoughtfully crafted questions designed to spark meaningful discussions between Muslim couples. Simply draw a card and take turns answering the questions together.',
    },
    {
      question: 'Are the questions appropriate for a family setting?',
      answer:
        "Yes, all questions have been carefully reviewed to ensure they align with family values while fostering healthy communication between spouses (in short, you won't be asked about your private life).",
    },
    {
      question: 'Which pack should I start with?',
      answer:
        'We recommend starting with "The Marriage Meeting" pack if you\'re not currently married, "Just Married" if you are newlyweds, or "Been Married" if you are looking to deepen your existing connection.',
    },
  ],
  [
    {
      question: 'How often should we use the cards?',
      answer:
        'We recommend setting aside dedicated time weekly for meaningful conversations. Many couples find success with a weekly "meeting" using good conversation starters.',
    },
    {
      question: 'Are the questions available in other languages?',
      answer:
        'Currently, the cards are only available in English, but we are working on translations to Arabic and other languages to serve our global Muslim community better.',
    },
  ],
  [
    {
      question: 'How many questions are in each pack?',
      answer:
        'Each pack contains over 50 unique questions, but the packs are being regularly updated with new questions.',
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 7-day satisfaction guarantee. If you're not happy with your purchase, we'll provide a full refund.",
    },
    {
      question: 'Do you ship internationally?',
      answer:
        "As this is a digital product, there's no shipping required! You'll get instant access to the digital cards after purchase.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@getjawab.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
