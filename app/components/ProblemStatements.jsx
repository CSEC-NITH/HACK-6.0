import { useState } from 'react';

const ProblemStatements = () => {
  const [activeTab, setActiveTab] = useState(1);

  const problemStatements = [
    {
      id: 1,
      title: 'Mobile Network Packet Analyzer for Kali NetHunter',
      content: (
        <>
          <p className="mb-4">
            This feature will be an Android-compatible network packet analysis tool that integrates
            with Kali NetHunter, allowing penetration testers, network administrators, and
            cybersecurity professionals to capture, analyze, and filter network packets directly
            from a mobile device.
          </p>

          <p className="mb-4">
            This feature will enhance Kali NetHunter by providing a Wireshark-like packet analysis
            tool for mobile devices. It will allow real-time network monitoring, deep packet
            inspection (DPI), and anomaly detection while running efficiently on mobile hardware.
          </p>

          <p className="font-bold mb-3">Key Capabilities:</p>

          <ol className="list-decimal list-inside space-y-3 mb-4">
            <li>
              <strong>Packet Capture & Analysis</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Capture live network traffic from WiFi, mobile data (LTE/5G), and USB tethered
                  interfaces.
                </li>
                <li>Support for TCP, UDP, ICMP, HTTP(S), DNS, and other protocols.</li>
                <li>
                  Deep Packet Inspection (DPI) to analyze payloads for malicious activity.
                </li>
              </ul>
            </li>
            <li>
              <strong>Real-Time Packet Filtering</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Users can filter captured packets based on source IP, destination IP, ports, and
                  protocols.
                </li>
                <li>Apply predefined security filters to detect suspicious traffic</li>
              </ul>
            </li>
          </ol>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>A standalone Android app module that integrates with Kali NetHunter.</li>
            <li>A Dashboard to show various real-time traffic and captured data.</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: 'Mobile-to-LoRa Communication Without a SIM Card',
      content: (
        <>
          <p className="mb-4">
            Modern military operations require secure, high-bandwidth, and resilient offline
            communication systems that can function without SIM cards, Wi-Fi, or satellite
            networks. Current solutions, such as SINCGARS radios and LoRaWAN, have bandwidth and
            security limitations, making them vulnerable to jamming and cyberattacks. A robust and
            secure data transfer system that operates in contested environments is essential for
            mission success.
          </p>

          <p className="font-bold mb-3">Detailed Description:</p>

          <p className="mb-4">
            The goal is to develop a highly secure, offline data transfer system that can
            facilitate communication in jamming-prone and network-denied environments while
            ensuring zero leakage of personnel details such as location, identity, or
            mission-critical data. The system should include:
          </p>

          <p className="font-bold mb-3">Key Capabilities:</p>

          <ol className="list-decimal list-inside space-y-3 mb-4">
            <li>
              <strong>Direct Bluetooth or Wi-Fi (ESP32) to LoRa Communication</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  The mobile device communicates with the ESP32-LoRa module using Bluetooth (BLE)
                  or Wi-Fi (ESP-Now/SoftAP).
                </li>
                <li>
                  The ESP32-LoRa module acts as a gateway, taking the message from the mobile and
                  transmitting it over LoRa to another LoRa device.
                </li>
                <li>
                  On the receiving end, another ESP32-LoRa node decodes the message and forwards it
                  to a connected mobile device.
                </li>
              </ul>
            </li>
            <li>
              <strong>Communication Methods</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Mobile App → Bluetooth/Wi-Fi → ESP32-LoRa → LoRa Network → ESP32-LoRa →
                  Receiving Mobile
                </li>
                <li>Encrypted Text Messaging, Alerts, and GPS Location Sharing</li>
              </ul>
            </li>
          </ol>

          <p className="font-bold mb-3">Expected Outcomes:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              A fully functional secure offline data transfer system capable of operating without
              SIM cards and Wi-Fi ensuring robust communication for military operations in
              network-denied environments while guaranteeing no personnel data or location leakage.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: 'Self-Sovereign Identity (SSI) Mobile App',
      content: (
        <>
          <p className="font-bold mb-3">Background:</p>

          <p className="mb-4">
            Traditional identity management systems rely on centralized authorities (governments,
            banks, and corporations) to issue, verify, and store user identities. This leads to
            several security and privacy risks, such as identity theft, unauthorized access, data
            breaches, and lack of user control over personal information. Moreover, users are often
            required to share more personal data than necessary for identity verification (e.g.,
            sharing an entire ID document to prove age).
          </p>

          <p className="mb-4">
            Self-Sovereign Identity (SSI) allows users to control and share only necessary identity
            attributes without relying on third-party intermediaries. The challenge is to develop a
            mobile application that enables secure, identity verification while maintaining user
            privacy and control.
          </p>

          <p className="font-bold mb-3">Objectives:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              Develop a mobile app for Academic Credential Verification that allows users to
              create, store, and manage student Self-Sovereign Identities (SSI).
            </li>
            <li>
              Implement best possible solution to allow users to prove attributes (e.g., course
              credentials) without revealing full transcripts.
            </li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <p className="font-bold mb-2">Mobile Application</p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Mobile app for <strong>creating, managing, and sharing DIDs & Verifiable Credentials.</strong>
            </li>
            <li>
              <strong>Secure Authentication System</strong> – Login/authentication without
              passwords using <strong>DID-based authentication.</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: 'Unveiling Vulnerabilities in Google Approved Apps',
      content: (
        <>
          <p className="font-bold mb-3">Problem Statement:</p>

          <p className="mb-4">
            Google Play Protect rigorously scans and verifies apps before they are made available
            to users. However, even with these stringent checks, vulnerabilities and security
            issues can sometimes slip through the cracks. This hackathon challenges participants to
            delve deep into the ecosystem of Google-approved applications and uncover potential
            security flaws, privacy concerns, and functional vulnerabilities.
          </p>

          <p className="font-bold mb-3">Objective:</p>

          <p className="mb-4">
            Participants are tasked with identifying and documenting vulnerabilities, security
            issues, and potential privacy risks within a selection of Google Play Store approved
            applications. The goal is to develop tools, techniques, and PoC that can aid in the
            continuous improvement of app security and user safety.
          </p>

          <p className="font-bold mb-3">Specific Challenges:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Vulnerability Discovery</li>
            <li>Privacy Analysis</li>
            <li>Functional Issues and Exploits</li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              A detailed report outlining the discovered vulnerabilities, privacy concerns, and
              functional issues in google approved and authentic apps. The target apps would be
              Banking apps, mParivahan, DigiYatra, UMANG, eshram, DigiLocker, COWIN, esanjeevani,
              ABHA and similar apps.
            </li>
            <li>Tools or scripts developed for vulnerability analysis.</li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: 'Fraud and Phishing Detection Mobile Application',
      content: (
        <>
          <p className="font-bold mb-3">Problem Statement:</p>

          <p className="mb-4">
            The digital landscape is increasingly plagued by sophisticated fraud tactics, ranging
            from deceptive messages and spam calls to malicious app notifications and manipulative
            advertisements. These attacks erode user trust, compromise personal data, and inflict
            financial losses. This hackathon challenges participants to develop innovative
            solutions for detecting, preventing, and mitigating fraud across various digital
            communication channels.
          </p>

          <p className="font-bold mb-3">Objective:</p>

          <p className="mb-4">
            Participants will design and implement systems that can effectively identify and
            counteract fraudulent activities within the scope of messages (SMS, instant messaging),
            calls (voice, VoIP), app notifications, advertisements, and spam. Though{' '}
            <strong>rooting an Android device is not necessarily required</strong> to execute these
            tasks. However, the approach depends on the level of access and data analysis required.
            The focus is on building robust and adaptable solutions that can stay ahead of evolving
            fraud techniques.
          </p>

          <p className="font-bold mb-3">Specific Challenges:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>Message Fraud Detection</strong>
            </li>
            <li>
              <strong>Call Fraud Detection</strong>
            </li>
            <li>
              <strong>App Notification Fraud</strong>
            </li>
            <li>
              <strong>Advertisement Fraud</strong>
            </li>
            <li>
              <strong>Email filters</strong>
            </li>
            <li>
              <strong>Link Analysis</strong>
            </li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              A working prototype or proof-of-concept demonstrating the developed anti-fraud
              solution.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 6,
      title:
        'Secure Military Messaging App with End-to-End Encryption & Self-Destructing Messages',
      content: (
        <>
          <p className="font-bold mb-3">Problem Statement:</p>

          <p className="mb-4">
            Military personnel require highly secure and private communication channels for
            mission-critical operations. However, existing messaging apps are vulnerable to
            interception, metadata leaks, and forensic recovery, posing significant national
            security risks. Even encrypted messaging platforms can leak metadata, allowing
            adversaries to analyze communication patterns and identify sensitive mission details.
          </p>

          <p className="mb-4">
            The challenge is to develop a military-grade, metadata-resistant messaging application
            that ensures encryption, self-destructing messages.
          </p>

          <p className="font-bold mb-3">Objectives:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Implement Encryption to protect messages.</li>
            <li>
              Ensure metadata-resistant communication, preventing adversaries from analyzing
              sender-receiver relationships.
            </li>
            <li>
              Enable self-destructing messages that leave no digital traces after they are read.
            </li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Advanced Encryption & Privacy Features.</li>
            <li>Self-Destructing & Tamper-Proof Messaging.</li>
          </ul>
        </>
      ),
    },
    {
      id: 7,
      title: 'Open-Source Debugging Tool for Android Apps',
      content: (
        <>
          <p className="mb-4">
            Existing Android debugging tools, both open-source and commercial, have limitations in
            automation, real-time performance tracking, and integration with modern development
            workflows. Commercial tools provide advanced features but are often expensive and
            proprietary, restricting accessibility. There is a need for an advanced open-source
            debugging tool that surpasses existing solutions by incorporating cutting-edge
            features, AI-powered automation, and deep system analytics while ensuring seamless
            integration with Android development environments.
          </p>

          <p className="font-bold mb-3">Objectives</p>

          <p className="mb-4">
            The goal is to develop a feature-rich, open-source debugging tool exclusively for
            Android that provides superior debugging capabilities compared to commercial tools. The
            solution should include:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              Advanced Debugging & Logging: Real-time log filtering, crash analysis, and event
              tracing.
            </li>
            <li>
              AI-Powered Issue Detection: Machine learning models to predict, detect, and resolve
              common bugs automatically.
            </li>
            <li>
              Performance Insights: CPU, memory, and network usage tracking with anomaly detection.
            </li>
            <li>
              Automated Error Resolution: AI-assisted suggestions and auto-fix capabilities for
              common coding errors.
            </li>
            <li>
              Seamless Integration: Compatibility with Android Studio, Jetpack tools, and CI/CD
              pipelines.
            </li>
            <li>
              Security & Privacy Focus: Ensure debugging logs and analytics do not expose sensitive
              user data.
            </li>
            <li>
              Scalability & Extensibility: Allow plugin-based enhancements for future debugging
              requirements.
            </li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              A fully functional open-source debugging tool for Android, surpassing existing
              commercial options in efficiency, automation, and usability.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold text-[#5A2A25] mb-8">Problem Statements</h4>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 border-b-2 border-[#5A2A25]">
            {problemStatements.map((ps) => (
              <button
                key={ps.id}
                onClick={() => setActiveTab(ps.id)}
                className={`px-6 py-3 font-medium transition-all duration-200 relative ${
                  activeTab === ps.id
                    ? 'text-[#E8A87C] border-b-2 border-[#E8A87C] -mb-0.5'
                    : 'text-[#33110E] hover:text-[#5A2A25]'
                }`}
              >
                Problem Statement {ps.id}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white">
          {problemStatements.map((ps) => (
            <div
              key={ps.id}
              className={`${activeTab === ps.id ? 'block' : 'hidden'}`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#5A2A25] pb-3 border-b-2 border-[#E8A87C] inline-block">
                  {ps.title}
                </h3>
              </div>
              <div className="prose max-w-none text-[#33110E]">{ps.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
