import React from 'react'

export type Term = {
    title: string;
    content?: string;
    points?: string[];
};

const termsAndConditions: Term[] = [
    {
        title: "Definitions",
        content: `At GraddBudy, we are committed to transparency concerning the types of information we collect from our users. We gather various categories of information to facilitate the delivery of our educational services effectively.`,
        points: [
            `"User" refers to any individual who accesses or uses the GraddBudy Platform, including students ("Learners") who utilize the Platform to access educational courses and materials, and professors ("Instructors") who provide educational content and instruction through the Platform.`,
            `"Services" refers to the educational services provided through the GraddBudy Platform, including online courses, instructional materials, and any related content made available to Users for the purpose of learning and instruction.`,
            `"Content" refers to all materials, including text, videos, images, and other resources available on the Platform, which may be created by GraddBudy, its affiliates, or third-party providers.`,
        ]
    },
    {
        title: "Acceptance of Terms",
        content: `By accessing or using the GraddBudy Platform in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using the Platform on behalf of an organization or entity, you represent and warrant that you are authorized to accept these Terms on behalf of that organization or entity, and that the organization or entity will be responsible for your actions or omissions while using the Platform.`,
    },
    {
        title: "User Accounts",
        points: [
            "Account Creation: To access certain features of the Platform and utilize the Services, you may be required to create a user account. During the registration process, you agree to provide accurate, current, and complete information about yourself, and to update such information in a timely manner to keep it accurate, current, and complete at all times. Failure to provide accurate information may result in the termination of your account and access to the Platform.",
            "Account Security: You are solely responsible for maintaining the confidentiality of your account credentials, including your username and password, and for all activities that occur under your account. You agree to notify GraddBudy immediately of any unauthorized use of your account or any other breach of security. GraddBudy will not be liable for any loss or damage arising from your failure to comply with this security obligation.",
        ]
    },
    {
        title: "User Responsibilities",
        points: [
            "Compliance with Laws: You agree to use the Platform in compliance with all applicable laws, regulations, and rules, whether local, state, national, or international. You will not use the Platform for any unlawful purpose or in a manner that could damage, disable, overburden, or impair the Platform or interfere with any other party's use and enjoyment of the Platform.",
            "Content Submission: If you submit any content to the Platform, including but not limited to comments, reviews, or any other materials, you represent and warrant that you own or have the necessary rights, licenses, consents, and permissions to submit such content and that it does not infringe, misappropriate or violate any third-party's patent, copyright, trademark, trade secret, moral rights, or other proprietary or intellectual property rights, or rights of publicity or privacy. You grant GraddBudy a non-exclusive, royalty-free, worldwide, perpetual license to use, reproduce, modify, create derivative works of, publicly display, and exploit such content in connection with the operation and improvement of the Platform.",
        ]
    },
    {
        title: "Intellectual Property",
        points: [
            "Ownership: All intellectual property rights in the Platform and its content, including but not limited to copyrights, trademarks, service marks, trade names, and other proprietary rights, are owned by GraddBudy or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the Platform and its content solely for your personal, non-commercial use, subject to these Terms.",
            "Restrictions: You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the Platform without prior written permission from GraddBudy. You may not reverse engineer, decompile, or disassemble any software or other products or processes accessible through the Platform, nor insert any code or product, or manipulate the content of the Platform in any way that affects the user experience.",
        ]
    },
    {
        title: "Payment Terms",
        points: [
            "Fees: Certain Services offered through the Platform may require payment of fees. You agree to pay all applicable fees in accordance with the payment terms provided at the time of purchase. Fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, levies, or duties.",
            "Refund Policy: All fees paid for Services are non-refundable unless otherwise stated in the specific course or service terms. If you believe you are entitled to a refund for any reason, please contact our support team at [Insert Email Address] for assistance. GraddBudy reserves the right to issue refunds or credits at its sole discretion.",
        ]
    },
    {
        title: "Termination",
        points: [
            "Termination by GraddBudy: GraddBudy reserves the right to suspend or terminate your access to the Platform at any time, without prior notice, for any reason whatsoever, including if we reasonably believe that you have violated or acted inconsistently with these Terms or any applicable law. Upon such termination, your right to access and use the Platform will immediately cease.",
            "Termination by User: You may terminate your account and discontinue your use of the Platform at any time by contacting us at [Insert Email Address]. Upon termination of your account, your right to access the Platform will immediately cease, and you will no longer be able to access any content or information associated with your account.",
        ]
    },
    {
        title: "Disclaimers",
        points: [
            `No Warranty: The Platform and Services are provided on an "as-is" and "as-available" basis, without warranties of any kind, either express or implied. GraddBudy makes no representations or warranties of any kind, express or implied, regarding the operation of the Platform or the information, content, materials, or products included on the Platform. GraddBudy disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
            `Limitation of Liability: To the fullest extent permitted by applicable law, GraddBudy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (i) your access to or use of or inability to access or use the Platform; (ii) any conduct or content of any third party on the Platform; (iii) any content obtained from the Platform; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory.`,
        ]
    },
    {
        title: "Indemnification",
        content: `You agree to indemnify, defend, and hold harmless GraddBudy, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees and costs) arising out of or in connection with: (i) your use of the Platform; (ii) your violation of these Terms; (iii) your violation of any rights of another party, including any Users of the Platform; or (iv) your conduct in connection with the Platform. GraddBudy reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which event you will cooperate with GraddBudy in asserting any available defenses.`,
    },
    {
        title: "Governing Law",
        content: `These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without giving effect to any choice or conflict of law provision or rule. Any disputes arising out of or relating to these Terms or the Platform shall be resolved in the competent courts of [Insert Jurisdiction].`,
    },
    {
        title: "Changes to Terms",
        content: `GraddBudy reserves the right, in its sole discretion, to modify, discontinue, or terminate the Platform or to modify these Terms at any time. We will provide notice of any material changes to these Terms by posting the updated Terms on the Platform, with the "Effective Date" at the top of the Terms updated accordingly. Your continued use of the Platform after any changes constitutes your acceptance of the revised Terms. It is your responsibility to check these Terms periodically for changes.`,
    },
    {
        title: "Contact Information",
        content: `If you have any questions or concerns about these Terms, or if you need to contact GraddBudy for any other reason, please email us at [Insert Email Address] or write to us at: GraddBudy.`,
        points: [
            "[Insert Address]",
            "[Insert City, State, Zip Code]",
            "[Insert Country]"
        ]
    },
];

const TermsAndConditions = () => {
    return (
        <>
            <section className="flex-center bg-white mx-auto">
                <div className="max-w-[1440px] my-6 sm:my-10 w-full p-4 sm:p-12 sm:mx-10 md:mx-16">
                    <h2 className="text-2xl mb-5 font-bold">Terms and Conditions</h2>
                    <div className="py-3 pb-5 text-black/70 text-base font-normal">
                        <p>Effective Date: [Insert Date]
                        </p>
                        <p className='pt-1'> These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you and GraddBudy, governing your access to and use of the GraddBudy platform (&quot;Platform&quot;), including all content, features, and services offered through the Platform. By accessing or using the Platform, you expressly acknowledge that you have read, understood, and agree to comply with and be bound by these Terms in their entirety. If you do not agree to these Terms, or any part thereof, you are prohibited from using or accessing the Platform.
                        </p>
                    </div>

                    <div className="text-black/70 text-base font-normal text-justify space-y-4 sm:space-y-6 lg:space-y-8">
                        {termsAndConditions.map((term, index) => (
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

                        <p>By using the GraddBudy Platform, you acknowledge that you have read and understood these Terms and agree to be bound by them in their entirety. If you do not agree to these Terms, or any part thereof, you are prohibited from using or accessing the Platform.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditions