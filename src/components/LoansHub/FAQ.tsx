import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What documents are required for a loan application?',
    answer: 'The basic documents required include identity proof, address proof, income proof, bank statements, and property documents (if applicable). Specific requirements may vary based on the loan type and amount.'
  },
  {
    question: 'Can I apply for multiple loan categories simultaneously?',
    answer: 'Yes, you can apply for multiple loans simultaneously. However, each application will be evaluated independently based on your eligibility and repayment capacity.'
  },
  {
    question: 'How soon can I get loan approval?',
    answer: 'Loan approval typically takes 2-7 business days, depending on the loan type and documentation completeness. Some loans may qualify for instant approval.'
  },
  {
    question: 'What is the EMI calculation process?',
    answer: 'EMI is calculated based on the principal amount, interest rate, and loan tenure. Use our EMI calculator to get instant estimates for your loan scenarios.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Questions, Answered</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}