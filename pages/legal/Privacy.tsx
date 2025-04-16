import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 sm:px-6 py-8">
        <Button variant="ghost" asChild className="mb-8 hover:bg-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-sm sm:prose max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: April 15, 2025
            </p>

            <p className="mb-6 text-gray-700">
              This privacy notice for Debriefmeet, a product of Debriefmeet LLC
              ("Company," "we," "us," or "our"), outlines how we collect, store,
              use, and/or share ("process") your information when you use our
              services ("Services"). This policy is compliant with Republic Act 10173, 
              also known as the Data Privacy Act of 2012.
            </p>

            <p className="mb-6 text-gray-700">
              This includes when you:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>Download and use our mobile application (Debriefmeet) on iOS or Android</li>
              <li>Use any other application of ours that links to this privacy notice</li>
              <li>Engage with us in other related ways, including sales, marketing, or events</li>
            </ul>

            <p className="mb-6 text-gray-700">
              We encourage you to read this privacy notice carefully to understand
              your privacy rights and choices under Philippine law. If you disagree with our policies and
              practices, please refrain from using our Services. For any questions or
              concerns, please contact us at{' '}
              <a href="mailto:dexterdejesus173@gmail.com" className="text-blue-600 hover:text-blue-800">
                dexterdejesus173@gmail.com
              </a>.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-5 mb-6 text-gray-700 space-y-2">
              <li>What Information Do We Collect?</li>
              <li>How Do We Process Your Information?</li>
              <li>What Legal Bases Do We Rely On Under the Data Privacy Act?</li>
              <li>When And With Whom Do We Share Your Personal Information?</li>
              <li>What Is Our Stance On Third-Party Websites?</li>
              <li>Is Your Information Transferred Internationally?</li>
              <li>How Long Do We Keep Your Information?</li>
              <li>How Do We Keep Your Information Safe?</li>
              <li>What Are Your Rights Under the Data Privacy Act?</li>
              <li>How Do We Handle Do-Not-Track Signals?</li>
              <li>What Are Your Rights As A Data Subject in the Philippines?</li>
              <li>Do We Make Updates To This Notice?</li>
              <li>How Can You Contact Us About This Notice?</li>
              <li>How Can You Contact the National Privacy Commission?</li>
            </ol>

            <p className="mb-6 text-gray-700">
              Under the Data Privacy Act of 2012, you have the following rights:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>Right to be informed</li>
              <li>Right to access</li>
              <li>Right to object</li>
              <li>Right to erasure or blocking</li>
              <li>Right to damages</li>
              <li>Right to file a complaint</li>
              <li>Right to rectify</li>
              <li>Right to data portability</li>
            </ul>

            <p className="mb-6 text-gray-700">
              For concerns about your privacy rights, you may contact:
            </p>
            <div className="mb-6 text-gray-700">
              <p className="font-semibold">Data Protection Officer</p>
              <p>Debriefmeet LLC</p>
              <p>Metro Manila, Philippines</p>
              <p>Email: <a href="mailto:dexterdejesus173@gmail.com" className="text-blue-600 hover:text-blue-800">
                dexterdejesus173@gmail.com
              </a></p>
            </div>

            <p className="mb-6 text-gray-700">
              You may also raise any concerns to the National Privacy Commission:
            </p>
            <div className="mb-6 text-gray-700">
              <p>National Privacy Commission</p>
              <p>5th Floor, Delegation Building, PICC Complex</p>
              <p>Roxas Boulevard, Pasay City, Metro Manila</p>
              <p>Website: <a href="https://www.privacy.gov.ph" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                privacy.gov.ph
              </a></p>
            </div>

            <div className="mt-12 text-sm text-gray-600 italic border-t pt-6">
              © 2025 Debriefmeet LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 