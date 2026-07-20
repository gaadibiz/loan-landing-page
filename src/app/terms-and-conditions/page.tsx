import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">

<nav className="text-gray-500 text-sm mb-8">
  <ol className="list-reset flex items-center">
    <li>
      <Link href="/" className="hover:text-red-500">
        Home
      </Link>
    </li>
    <li>
      <span className="mx-3 text-xl leading-none relative">›</span>
    </li>
    <li>Terms & Conditions</li>
  </ol>
</nav>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-6 text-xl">
          Please read these terms and conditions carefully before using our services.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 text-lg text-blue-800 font-semibold">
          Last updated: January 2025
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-3">
          By accessing and using LoanInNeed services, you accept and agree to be bound by the terms and provision of this agreement. LoanInNeed is a unit of Sashi Enterprises Ltd., a registered Non-Banking Financial Company (NBFC) with the Reserve Bank of India.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mb-6 mt-6">2. Eligibility Criteria
</h2>
        <p className="mb-3 text-gray-700">
          To be eligible for our loan services, you must:
        </p>
        <ul className="text-gray-700 list-disc pl-6 mb-6 space-y-2">
          <li>Be an Indian citizen aged 21 years or above</li>
          <li>Have a valid government-issued ID proof</li>
          <li>Have a stable source of income</li>
          <li>Reside in one of our operational cities</li>
          <li>Provide accurate and complete information during application</li>
        </ul>

{/* Section 3 */}
        <h2 className="text-2xl font-bold mb-6">3. Loan Application Process</h2>
        <p className="text-gray-700 mb-3">
          Our loan application process is entirely online and requires minimal documentation. By submitting an application:
        </p>
<ul className="text-gray-700 list-disc pl-6 mb-6 text-base space-y-2">
  <li>You authorize us to verify the information provided</li>
  <li>You consent to credit checks and background verification</li>
  <li>You understand that approval is subject to our internal assessment</li>
  <li>You agree to provide additional documents if requested</li>
</ul>

        
        {/* Section 4 */}
        <h2 className="text-2xl font-bold mb-6 mt-6">4. Interest Rates and Fees</h2>
        <p className="mb-3 text-gray-700">
          Interest rates are determined based on various factors including loan amount, tenure, and creditworthiness. All applicable charges will be clearly communicated before loan approval. We maintain transparency in our pricing with no hidden fees.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold mb-6 mt-6">5. Repayment Terms</h2>
        <p className="mb-3 text-gray-700">
          Loan repayment terms are agreed upon at the time of loan approval. Late payments may attract additional charges as per RBI guidelines. We follow ethical collection practices and never resort to coercive recovery methods.
        </p>

         {/* Section 6 */}
        <h2 className="text-2xl font-bold mb-6 mt-6">6. Data Protection and Privacy</h2>
        <p className="mb-3 text-gray-700">
          We are committed to protecting your personal and financial information. All data is stored securely and used only for legitimate business purposes as outlined in our Privacy Policy. We comply with applicable data protection regulations.
        </p>

{/* Section 7 */}
        <h2 className="text-2xl font-bold mt-6 mb-6">7. Prohibited Activities</h2>
        <p className="mb-3 text-gray-700">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li>Provide false or misleading information</li>
          <li>Use our services for illegal purposes</li>
          <li>Attempt to defraud or manipulate our systems</li>
          <li>Share your account credentials with unauthorized persons</li>
        </ul>

         {/* Section 8 */}
        <h2 className="text-2xl font-bold mb-6 mt-6">8. Limitation of Liability</h2>
        <p className="mb-3 text-gray-700">
          LoanInNeed shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the extent permitted by applicable law.
        </p>

         {/* Section 9 */}
        <h2 className="text-2xl font-bold mt-6 mb-6">9. Grievance Redressal</h2>
        <p className="mb-3 text-gray-700">
          We have established an effective Grievance Redressal Cell as per RBI directives. Any complaints will be addressed within 5 working days. You can reach us at:
        </p>
        <div className="bg-gray-50 border border-gray-50 rounded-lg p-4 my-4 space-y-2 mb-4">
          <p><strong>Phone:</strong> 8796633465</p>
          <p><strong>Email:</strong> customerservice@loaninneed.in</p>
        </div>

         {/* Section 10 */}
        <h2 className="text-2xl font-bold mb-6 mt-6">10. Modifications to Terms</h2>
        <p className="mb-3 text-gray-700">
          We reserve the right to modify these terms and conditions at any time. Changes will be communicated through our website and other appropriate channels. Continued use of our services constitutes acceptance of modified terms.
        </p>

         {/* Section 11 */}
        <h2 className="text-2xl font-bold mb-2 mt-6">11. Governing Law</h2>
        <p className="mb-3 text-gray-700">
          These terms and conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-bold mb-2 mt-6">12. Contact Information
</h2>
        <div className="bg-red-50 border border-red-50 rounded-lg p-4 my-4 space-y-2 mb-4">
          <p className="font-semibold">LoanInNeed - A Unit of Sashi Enterprises Ltd.</p>
          <p><strong>Phone:</strong> 8796633465</p>
          <p><strong>Email:</strong> customerservice@loaninneed.in</p>
          <p><strong>Privacy Officer:</strong> privacy@loaninneed.in</p>
          <p><strong>Grievance Email:</strong> grievance@loaninneed.in</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-6 mt-6">
          <p className="font-semibold text-yellow-700">Important Notice</p> 
          <p className="mt-4 text-yellow-700">LoanInNeed operates only through our official website. We do not have any mobile application on Android or iOS. Please beware of unauthorized apps using our name and logo. Report such instances immediately to our customer service.</p>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mb-28 mt-10">
          <Link
            href="/"
            className="bg-red-600 text-white px-7 py-3 rounded-3xl font-bold hover:bg-red-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
  );
}
