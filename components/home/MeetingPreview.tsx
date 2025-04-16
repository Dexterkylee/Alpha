import React, { useState, useEffect } from 'react';
import { FileText, Clock } from 'lucide-react';
import TypewriterText from '@/components/ui/TypewriterText';

const MeetingPreview: React.FC = () => {
  const [alexDone, setAlexDone] = useState(false);
  const [jamieDone, setJamieDone] = useState(false);
  const [transcriptDone, setTranscriptDone] = useState(false);
  const [bullet1Done, setBullet1Done] = useState(false);
  const [bullet2Done, setBullet2Done] = useState(false);

  const alexText = "I think we should focus on improving the user onboarding experience for Q3.";
  const jamieText = "Agreed. Our metrics show a 30% drop-off during the initial setup process.";

  // Calculate total time for transcript to complete
  useEffect(() => {
    if (jamieDone) {
      setTranscriptDone(true);
    }
  }, [jamieDone]);

  return <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 max-w-4xl mx-auto">
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center">
        <div className="flex gap-2 mr-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium my-0 py-0 px-0 mx-0">Meeting Assistant</div>
        <div className="ml-auto text-sm">12:45 PM</div>
      </div>
      
      <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex items-center text-blue-600 mb-4">
            <FileText className="h-5 w-5 mr-2" />
            <h3 className="font-medium">Meeting Transcript</h3>
          </div>
          
          <div className="text-sm">
            <p className="font-semibold mb-1">Alex:</p>
            <p className="text-gray-700 mb-4">
              <TypewriterText 
                text={alexText}
                delay={30}
                onComplete={() => setAlexDone(true)}
              />
            </p>
            
            {alexDone && (
              <>
                <p className="font-semibold mb-1">Jamie:</p>
                <p className="text-gray-700">
                  <TypewriterText 
                    text={jamieText}
                    delay={30}
                    onComplete={() => setJamieDone(true)}
                  />
                </p>
              </>
            )}
          </div>
        </div>
        
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex items-center text-blue-600 mb-4">
            <Clock className="h-5 w-5 mr-2" />
            <h3 className="font-medium">Meeting Minutes</h3>
          </div>
          
          <div className="text-sm">
            <p className="font-semibold mb-2">Key Discussion Points:</p>
            <ul className="text-gray-700 space-y-2">
              {transcriptDone && (
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <TypewriterText 
                    text="Team identified user onboarding as a priority for Q3"
                    delay={30}
                    onComplete={() => setBullet1Done(true)}
                  />
                </li>
              )}
              {bullet1Done && (
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <TypewriterText 
                    text="Current metrics show 30% drop-off during initial setup"
                    delay={30}
                    onComplete={() => setBullet2Done(true)}
                  />
                </li>
              )}
              {bullet2Done && (
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <TypewriterText 
                    text="Proposed solutions:"
                    delay={30}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>;
};
export default MeetingPreview;
