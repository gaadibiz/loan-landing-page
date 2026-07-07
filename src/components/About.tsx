"use client";

import React from "react";
import { Clock, IndianRupee, ShieldCheck } from "lucide-react";

export default function LoanLanding() {
  return (
    <div className="bg-white text-gray-900">

      {/* Section 1: Why Choose LoanInNeed */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LoanInNeed?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Fast, secure, and reliable loan services designed for your urgent financial needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Instant Approval */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-200 mx-auto mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Approval</h3>
            <p className="text-gray-600">
              Get loan approval within 30 minutes with minimal documentation
            </p>
          </div>

          {/* 100% Secure */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-200 mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
            <p className="text-gray-600">
              Your personal and financial information is completely safe with us
            </p>
          </div>

          {/* Best Rates */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-200 mx-auto mb-4">
                <IndianRupee className="w-6 h-6 text-blue-600" /> {/* ✅ inside blue circle */}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
            <p className="text-gray-600">
              Competitive interest rates with no hidden charges or fees
            </p>
          </div>

        </div>
      </section>


      {/* Section 2: 3-Step Process */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Simple 3-Step Process</h2>
        <p className="text-lg mb-12 text-gray-700">Get your loan in just 3 easy steps</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white mx-auto mb-4">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill Application</h3>
            <p className="text-gray-600">Complete our quick online form with basic details</p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white mx-auto mb-4">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
            <p className="text-gray-600">Receive instant approval notification within minutes</p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white mx-auto mb-4">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Receive Money</h3>
            <p className="text-gray-600">Get funds directly transferred to your bank account</p>
          </div>
        </div>
      </section>



      {/* Section 3: Stats */}
      <section className="bg-red-700 text-white py-16 px-6 md:px-20 text-center">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold">10,000+</h3>
            <p className="text-base text-gray-300">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">₹50 Cr+</h3>
            <p className="text-base text-gray-300">Loans Disbursed</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">8+</h3>
            <p className="text-base text-gray-300">Cities Covered</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">99.8%</h3>
            <p className="text-base text-gray-300">Approval Rate</p>
          </div>
        </div>
      </section>

      {/* Section 4: Disclaimer */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-3 tracking-wide">
              Important Information
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Disclaimers</h2>
          </div>

          {/* Key Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">01</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">Repayment Term</p>
                <p className="text-gray-900 font-bold text-lg">61 – 180 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border-l-4 border-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">02</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">Maximum APR</p>
                <p className="text-gray-900 font-bold text-lg">180%</p>
              </div>
            </div>
          </div>

          {/* Representative Example Label */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="flex-1 h-px bg-gray-200 max-w-[120px]" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Representative Example</p>
            <div className="flex-1 h-px bg-gray-200 max-w-[120px]" />
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
            <table className="w-full text-center text-sm min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">Loan Amount</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">APR</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">Tenure</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">Processing Fee</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">GST on Fee</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">Amount Disbursed</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">EMI</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">Total Repayment</th>
                  <th className="px-4 py-3.5 font-semibold whitespace-nowrap border border-red-500">Total Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 hover:bg-red-50 transition-colors">
                  <td className="px-4 py-4 font-bold text-gray-900 border border-gray-200">₹1,000</td>
                  <td className="px-4 py-4 border border-gray-200">180%</td>
                  <td className="px-4 py-4 border border-gray-200">6 Months</td>
                  <td className="px-4 py-4 border border-gray-200">₹70</td>
                  <td className="px-4 py-4 border border-gray-200">₹13</td>
                  <td className="px-4 py-4 font-semibold text-red-600 border border-gray-200">₹917</td>
                  <td className="px-4 py-4 border border-gray-200">₹317</td>
                  <td className="px-4 py-4 font-semibold border border-gray-200">₹1,900</td>
                  <td className="px-4 py-4 border border-gray-200">₹900</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  );
}
