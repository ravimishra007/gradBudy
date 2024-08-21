import Image from 'next/image'
import React from 'react'
import { Term } from '../terms-of-use/page';

const privacyPolicy: Term[] = [
    {
        title: "Information We Collect",
        content: `At GraddBudy, we are committed to transparency concerning the types of information we collect from our users. We gather various categories of information to facilitate the delivery of our educational services effectively.`,
        points: [
            "Personal Information: This category includes any information that can identify you as an individual. We collect personal information such as your name, email address, phone number, and any other details you voluntarily provide during the registration process or while using our services. This information is crucial for creating your account, facilitating communication, and tailoring our offerings to meet your specific educational needs.",
            "Account Information: Upon creating an account, we collect information relevant to your profile, including your educational background, interests, and preferences. This data enables us to personalize your learning experience, recommend relevant courses, and connect you with suitable instructors. We may also collect information regarding your interactions with our platform to enhance your user experience.",
            "Payment Information: If you choose to make purchases through GraddBudy, we collect payment-related information, which may include credit card details and billing addresses. To ensure the security of your financial data, we have partnered with third-party payment processors that adhere to industry-standard security practices. We do not store your payment information; it is processed securely by these third parties.",
            "Usage Data: We collect information about how you interact with our platform, including your IP address, browser type, pages visited, and the time and date of your visits. This information is essential for analyzing user behavior, improving our services, and ensuring a seamless user experience. We may also use this data to identify trends and patterns that can inform our future developments.",
            "Cookies and Tracking Technologies: GraddBudy employs cookies and similar tracking technologies to collect information about your activity on our platform. Cookies are small data files placed on your device that help us enhance your experience by remembering your preferences and recognizing you on future visits. You have the option to manage your cookie preferences through your browser settings; however, disabling cookies may affect your ability to use certain features of our platform.",
        ]
    },
    {
        title: "How We Use Your Information",
        content: `The information we collect is vital for the effective operation and enhancement of GraddBudy. We utilize your information for various purposes, including:`,
        points: [
            "To Provide Services: Your information is used to create and manage your account, process transactions, and grant you access to courses and educational materials. This includes sending you course-related notifications, updates, and important information regarding your account status. We aim to ensure that you receive a tailored and efficient educational experience.",
            "To Improve Our Services: We analyze usage data to gain insights into how our platform is utilized and identify areas for improvement. By evaluating user interactions, we can develop new features, enhance existing offerings, and ensure that our services remain relevant and effective for our users. This continuous improvement process is integral to our commitment to providing high-quality educational resources.",
            "To Communicate with You: We may use your contact information to send you updates, newsletters, marketing materials, and other information related to GraddBudy. This communication may include information about new courses, upcoming events, and special promotions. Additionally, we may utilize your information to respond to inquiries or provide customer support, ensuring that you receive timely assistance when needed.",
            "To Ensure Security: We implement a range of security measures to protect our platform from fraud and unauthorized access. Your information helps us monitor for suspicious activity and maintain the integrity of our services. We may also use your data to comply with legal obligations, protect our rights, and ensure the safety of our users and the platform.",
        ]
    },
    {
        title: "Sharing Your Information",
        content: `We recognize the importance of your privacy and are committed to safeguarding your personal information. We do not sell or rent your personal information to third parties. However, there are specific circumstances under which we may share your information:`,
        points: [
            "With Service Providers: We may share your information with third-party vendors who assist us in operating our platform and providing services, such as payment processors, email service providers, and analytics partners. These service providers are contractually obligated to protect your information and use it solely for the purposes specified by us. We ensure that they adhere to stringent data protection standards.",
            "For Legal Reasons: We may disclose your information if required by law or in response to valid requests by public authorities. This includes complying with court orders, subpoenas, or other legal processes. We may also disclose information to protect our rights, privacy, safety, or property, and that of our users or others. In such cases, we will take appropriate steps to limit the disclosure to the extent necessary.",
            "In Business Transfers: If GraddBudy is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. In such instances, we will ensure that your information remains protected and is subject to the terms of this Privacy Policy. We will notify you of any changes to our privacy practices resulting from such business transfers."
        ]
    },
    {
        title: "Data Security",
        content: `We take the security of your personal information seriously and implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, use, or disclosure.`,
        points: [
            "Security Measures: We employ encryption, firewalls, and secure server environments to protect your data. Access to personal information is limited to authorized personnel who require it for legitimate business purposes. We regularly review our security practices to ensure they meet or exceed industry standards.",
            "Data Breach Response: In the unlikely event of a data breach, we have established protocols to promptly investigate and mitigate any potential risks. We will notify affected users as required by applicable laws and regulations. Our response plan includes measures to prevent future breaches and improve our security posture.",
            "Limitations of Security: While we strive to protect your information, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee absolute security. We encourage you to take precautions, such as using strong passwords and keeping your login credentials confidential, to further protect your account."
        ]
    },
    {
        title: "Your Rights and Choices",
        content: `As a user of GraddBudy, you have certain rights regarding your personal information, which we respect and uphold.`,
        points: [
            "Access and Update: You can access and update your personal information through your account settings. We encourage you to keep your information accurate and up-to-date to ensure the best possible experience on our platform. If you need assistance with accessing or updating your information, please contact us.",
            "Opt-Out: You have the option to opt-out of receiving marketing communications from us. You can do this by following the unsubscribe instructions included in those communications or by contacting us directly. Please note that even if you opt-out of marketing communications, we may still send you service-related updates, such as changes to our terms or policies.",
            "Data Deletion: You may request the deletion of your personal information, subject to certain exceptions, such as when we need to retain your information for legal obligations. To initiate a deletion request, please contact us with your account details, and we will process your request in accordance with applicable laws. We will inform you of any limitations on your request and the reasons for such limitations.",
        ]
    },
    {
        title: "Children's Privacy",
        content: `GraddBudy is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.`,
        points: [
            "Parental Consent: If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information. We encourage parents and guardians to monitor their children's online activities and to help us enforce our age restrictions. If you believe that we have collected information from a child under 13, please contact us immediately.",
            "Educational Content: While our platform may contain educational content suitable for children, we strongly advise that children use GraddBudy under the supervision of a parent or guardian. We do not provide services directly to children and recommend that parents review our content before allowing their children to access it.",
        ]
    },
    {
        title: "Changes to This Privacy Policy",
        content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.`,
        points: [
            "Notification of Changes: We will notify you of any significant changes by posting the new Privacy Policy on our platform with a new effective date. We encourage you to review this Privacy Policy periodically for any updates or changes. Your continued use of GraddBudy after any changes to this Privacy Policy constitutes your acceptance of the revised terms.",
            "User Responsibility: It is your responsibility to stay informed about our privacy practices. We will make reasonable efforts to communicate significant changes to you, but we encourage you to periodically review this Privacy Policy to remain aware of any updates.",
        ]
    },
    {
        title: "Contact Us",
        content: `If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:`,
        points: [
            "Email: [Insert Email Address]",
            "Address: [Insert Physical Address]",
        ]
    },
];

const PrivacyPolicy = () => {
    return (
        <>
            <section className="flex-center bg-white mx-auto">
                <div className="max-w-[1440px] my-6 sm:my-10 w-full p-1 sm:p-12 sm:mx-10 md:mx-16">
                    <div className="relative mb-10 md:mb-16">
                        <Image
                            className="w-full h-[240px] lg:h-[378px] object-cover"
                            src="/images/image1.png"
                            alt="Image"
                            width={1440}
                            height={355}
                        />
                        <div className="absolute bg-black/70 inset-0 flex flex-col items-center justify-center text-center text-white px-3">
                            <div className="max-w-5xl">
                                <h1 className="text-2xl md:mb-10 lg:text-4xl px-7 font-bold">We care about your Privacy</h1>
                                <p className="text-sm lg:text-lg mt-2 sm:px-8">“Lorem ipsum dolor sit , consectetur adipiscing elit. Turpis donec amet proin nec in diam viverra. “Lorem ipsum dolor sit amet, adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-5xl mx-auto p-3">
                        <h2 className="text-2xl mb-5 font-bold">Privacy Policy</h2>
                        <div className="py-3 pb-5 text-black/70 text-base font-normal">
                            <p>Effective Date: [Insert Date]
                            </p>
                            <p className='pt-1'> This Privacy Policy outlines the practices employed by GraddBudy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding the collection, use, disclosure, and protection of your information when you access and use our educational platform. By accessing or using GraddBudy, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree to the terms of this Privacy Policy, please refrain from using our services.
                            </p>
                        </div>

                        <div className="text-black/70 text-base font-normal text-justify space-y-4 sm:space-y-6 lg:space-y-8">
                            {privacyPolicy.map((term, index) => (
                                <div key={index} className="">
                                    <h2 className='font-semibold text-base'>{term.title}</h2>
                                    {term.content && <p className='pt-1 sm:pt-2 lg:pt-3'>{term.content}</p>}
                                    {term.points && (
                                        <ul className=' list-disc pl-10 py-2 space-y-2'>
                                            {term.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <p>We value your feedback and are committed to addressing any inquiries or concerns you may have regarding your privacy and data protection. Our dedicated team is available to assist you and ensure that your GraddBudy experience is secure and satisfactory.
                                By using GraddBudy, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Thank you for choosing GraddBudy for your educational needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy